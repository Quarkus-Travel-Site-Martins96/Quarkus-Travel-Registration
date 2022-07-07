package com.lucamartinelli.app.travelsite.registration.ejb;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.sql.SQLException;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.inject.Named;

import org.apache.commons.io.IOUtils;
import org.jboss.logging.Logger;

import com.lucamartinelli.app.travelsite.registration.dao.RegistrationDAO;
import com.lucamartinelli.app.travelsite.registration.util.ResourceUtils;
import com.lucamartinelli.app.travelsite.registration.vo.MailServiceException;
import com.lucamartinelli.app.travelsite.registration.vo.OperationStatusResponseVO;
import com.lucamartinelli.app.travelsite.registration.vo.RegistrationException;
import com.lucamartinelli.app.travelsite.registration.vo.UserVO;

@RequestScoped
public class RegistrationEJBImpl implements RegistrationEJB {
	
	private static final String COURTESY_PAGE_HTML_PATH = "META-INF/mail/courtesy.html";
	private static final String THANK_YOU_PAGE_HTML_PATH = "META-INF/mail/validated.html";
	
	@Inject Logger log;
	
	@Inject MailEJB mailEJB;
	@Inject CryptoEJB cryptEJB;
	@Inject @Named("factory") RegistrationDAO dao;
	
	@Override
	public Boolean alreadyUsed(String username) {
		if (username == null || username.trim().isEmpty()) {
			log.debug("Username is empty");
			return true;
		}
		
		try {
			if (!dao.checkUsernameFree(username)) {
				log.debug(String.format("Username %s already in use", username));
			}
		} catch (SQLException e) {
			log.error("Error during call DAO check username", e);
			return true;
		}
		
		log.debug("Username " + username + " is free to use");
		return false;
	}

	@Override
	public OperationStatusResponseVO checkUser(UserVO user) {
		log.debug("Checking user information: " + user);
		final OperationStatusResponseVO err = new OperationStatusResponseVO(false, "Generic error");
		final OperationStatusResponseVO ok = new OperationStatusResponseVO(true, "");
		if (user == null) {
			err.setError("User structure is empty");
			return err;
		}
		if (user.getUsername() == null || user.getUsername().isEmpty()) {
			err.setError("Username is empty");
			return err;
		}
		if (user.getName() == null || user.getName().isEmpty()) {
			err.setError("First name is empty");
			return err;
		}
		if (user.getSurname() == null || user.getSurname().isEmpty()) {
			err.setError("Last name is empty");
			return err;
		}
		if (user.getEmail() == null || user.getEmail().isEmpty()) {
			err.setError("Email is empty");
			return err;
		} else if (!user.getEmail().contains("@") &&
				!user.getEmail().split("@")[1].contains(".")) {
			err.setError("Email " + user.getEmail() + " is not a valid format");
			return err;
		}
		if (user.getCountry() == null || user.getCountry().isEmpty()) {
			err.setError("Country is empty");
			return err;
		}
		if (user.getPassword() == null || user.getPassword().isEmpty()) {
			err.setError("Password is empty");
			return err;
		}
		try {
			if (!dao.checkUsernameFree(user.getUsername())) {
				err.setError("Username is already in use");
				return err;
			}
		} catch (SQLException e) {
			log.error("Error during connection to DB: ", e);
			err.setError("Username is already in use");
			return err;
		}
		
		return ok;
	}

	@Override
	public void register(UserVO user) throws MailServiceException, RegistrationException {
		final OperationStatusResponseVO checkStatus = checkUser(user);
		if (checkStatus == null || !checkStatus.getResult()) {
			log.warn("User " + user + " is not valid");
			throw new RegistrationException(400, "Input user not valid");
		}
		
		final String token = cryptEJB.entryptUser(user);
		
		mailEJB.sendMail(user, token);

	}

	@Override
	public boolean checkTokenAndRegister(String token) {
		log.debug("Validating token: " + token);
		final UserVO user = cryptEJB.decryptUser(token);
		log.debug("Decrypted user: " + user);
		if (user == null || user.getUsername() == null
				|| user.getUsername().isEmpty()) {
			log.error("User cannot be decrypted");
			return false;
		}
		
		try {
			final boolean daoResult = dao.registerUser(user);
			if (daoResult) {
				log.debug("User " + user.getUsername() + "registered!");
			} else {
				log.error("Insert for user " + user.getUsername() + " failed");
			}
			return daoResult;
		} catch (SQLException e) {
			log.error("Error in DB Insert: ", e);
			return false;
		}
	}
	
	@Override
	public String getFailHTML() throws IOException {
		return IOUtils.toString(ResourceUtils.getAsClasspathResource(COURTESY_PAGE_HTML_PATH), 
				StandardCharsets.UTF_8);
	}

	@Override
	public String getValidHTML() throws IOException {
		return IOUtils.toString(ResourceUtils.getAsClasspathResource(THANK_YOU_PAGE_HTML_PATH), 
				StandardCharsets.UTF_8);
	}

}
