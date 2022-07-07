package com.lucamartinelli.app.travelsite.registration.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.annotation.PostConstruct;
import javax.enterprise.context.RequestScoped;
import javax.enterprise.inject.spi.CDI;
import javax.inject.Inject;
import javax.inject.Named;

import org.jboss.logging.Logger;

import com.lucamartinelli.app.travelsite.registration.vo.UserVO;

import io.agroal.api.AgroalDataSource;

@RequestScoped
@Named("DBDAO")
public class RegistrationDAOImpl implements RegistrationDAO {
	
	private static final String INSERT_NEW_USER = "INSERT INTO users "
			+ "(USERNAME, PASSWORD, users.GROUPS, NAME, SURNAME, EMAIL, BIRTHDATE, COUNTRY) "
			+ "VALUES (?,?,?,?,?,?,?,?)";
	private static final String QUERY_SEARCH_USERNAME = "SELECT username FROM users WHERE username=?";
	
	private AgroalDataSource datasource = null;
	
	@Inject
	Logger log;
	
	@PostConstruct
	void init() {
		datasource = CDI.current().select(AgroalDataSource.class).get();
	}
	
	@Override
	public boolean registerUser(UserVO user) throws SQLException {
		log.debug("Executing insert new user: " + INSERT_NEW_USER);
		log.debug("With data: " + user);
		if (user == null)
			throw new RuntimeException("User in input is null");
		
		try (Connection conn = datasource.getConnection();
				PreparedStatement pt = conn.prepareStatement(INSERT_NEW_USER);) {
			pt.setString(1, user.getUsername());
			pt.setString(2, user.getPassword());
			pt.setString(3, "user");
			pt.setString(4, user.getName());
			pt.setString(5, user.getSurname());
			pt.setString(6, user.getEmail());
			pt.setString(7, user.getBirthdate());
			pt.setString(8, user.getCountry());
			final int result = pt.executeUpdate();
			
			if (result == 1) {
				log.debug("Insert completed");
			} else {
				log.error("Insert finished with error");
			}
			return result == 1;
		} catch (SQLException e) {
			log.error("Error during insert: ", e);
			throw e;
		}
	}
	
	
	@Override
	public boolean checkUsernameFree(String username) throws SQLException {
		log.debug("Running query: " + QUERY_SEARCH_USERNAME.replace("?", username));
		try (Connection conn = datasource.getConnection();
				PreparedStatement pt = conn.prepareStatement(QUERY_SEARCH_USERNAME);) {
			pt.setString(1, username);
			try (final ResultSet rs = pt.executeQuery()) {
				if (rs.next()) {
					log.info("Username " + username + " is already used");
					return false;
				} else {
					log.info("Username " + username + " is free");
					return true;
				}
			}
			
		} catch (SQLException e) {
			log.error("Error during insert: ", e);
			throw e;
		}
	}
	
	
}
