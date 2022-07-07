package com.lucamartinelli.app.travelsite.registration.dao;

import java.sql.SQLException;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.inject.Named;

import org.jboss.logging.Logger;

import com.lucamartinelli.app.travelsite.registration.vo.UserVO;

@RequestScoped
@Named("InMemoryDAO")
public class RegistrationDAOInMemoryImpl implements RegistrationDAO {
	
	@Inject Logger log;
	
	@Override
	public boolean registerUser(UserVO user) throws SQLException {
		log.debug("IN_MEMORY mode for [registerUser]");
		log.debug("Return registered fake user");
		return true;
	}

	@Override
	public boolean checkUsernameFree(String username) throws SQLException {
		log.debug("IN_MEMORY mode for [checkUsernameFree]");
		log.debug("Return user is free");
		return true;
	}
	
	

}
