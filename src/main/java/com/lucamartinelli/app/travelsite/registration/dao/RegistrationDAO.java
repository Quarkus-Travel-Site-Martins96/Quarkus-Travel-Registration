package com.lucamartinelli.app.travelsite.registration.dao;

import java.sql.SQLException;

import com.lucamartinelli.app.travelsite.registration.vo.UserVO;

/**
 * Data access object for registration flow
 * 
 * @author Luca Martinelli
 *
 */
public interface RegistrationDAO {
	
	/**
	 * Insert a new pending user for waiting mail confirmation link
	 */
	public boolean insertPending(UserVO user, String token) throws SQLException;
	
	/**
	 * Insert new user into DB
	 */
	public boolean registerUser(UserVO user) throws SQLException;
	
	/**
	 * Check if the new username is free to use
	 */
	public boolean checkUsernameFree(String username) throws SQLException;
	
}
