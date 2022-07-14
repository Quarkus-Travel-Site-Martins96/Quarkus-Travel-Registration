package com.lucamartinelli.app.travelsite.registration.ejb;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;

import org.apache.commons.io.IOUtils;
import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.jboss.logging.Logger;

import com.lucamartinelli.app.travelsite.registration.util.ResourceUtils;
import com.lucamartinelli.app.travelsite.registration.vo.MailServiceException;
import com.lucamartinelli.app.travelsite.registration.vo.UserVO;

import io.quarkus.mailer.Mail;
import io.quarkus.mailer.Mailer;

@RequestScoped
public class MailEJBImpl implements MailEJB {
	
	private final Logger log;

	@Inject
	Mailer mailer;
	
	@ConfigProperty(name="registration.host", defaultValue = "http://localhost:7171")
	@Inject String hostRegistration;
	
	@ConfigProperty(name = "registration.mail.subject", defaultValue = "Welcome to Simple Travel Site")
	@Inject String subject;
	
	String MAIL_BODY_CLASSPATH = "META-INF/mail/body.html";
	
	public MailEJBImpl() {
		log = Logger.getLogger(getClass());
	}

	@Override
	public void sendMail(UserVO user, String token) throws MailServiceException {
		if (user == null || user.getEmail() == null || user.getEmail().isEmpty()) {
			log.error("User input not valid, missing mail, user: " + user);
			throw new MailServiceException("Missing input data");
		}
		
		final Mail mail = createMail(user, token);
		if (log.isDebugEnabled()) {
			log.debug("Mail generated:\n" +
					"\nFrom: " + mail.getFrom() +
					"\nTo  : " + mail.getTo().toString() +
					"\nSubj: " + mail.getSubject() +
					"\nBody: " + mail.getHtml());
		}
		mailer.send(mail);
	}
	
	
	private Mail createMail(final UserVO user, final String token) throws MailServiceException {
		final String url = hostRegistration + "/registration/validate?token="
				+ token;
		String editedBody = String.format(getBody(), 
				user.getUsername(), 
				user.getName(), 
				url);
		return Mail.withHtml(
				user.getEmail(),
				this.subject, 
				editedBody
				);
	}
	
	private String getBody() throws MailServiceException  {
		try {
			return IOUtils.toString(ResourceUtils
					.getAsClasspathResource(MAIL_BODY_CLASSPATH), StandardCharsets.UTF_8);
		} catch (IOException e) {
			log.error("Error during read Mail body key ", e);
			throw new MailServiceException(e);
		} finally {
			log.debug("Body mail read from config");
		}
	}
	
}
