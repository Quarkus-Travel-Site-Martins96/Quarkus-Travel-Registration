package com.lucamartinelli.app.travelsite.registration.ejb;

import javax.enterprise.context.RequestScoped;

import com.lucamartinelli.app.travelsite.registration.vo.OperationStatusResponseVO;
import com.lucamartinelli.app.travelsite.registration.vo.UserVO;

/**
 * EJB for managing the registration
 * 
 * @author Luca Martinelli
 * @date 23/03/2021
 *
 */
@RequestScoped
public interface RegistrationEJB {
	
	/**
	 * Check if the user data are valid for the registration
	 * 
	 * 
	 * @param user - For the validation
	 * @return Response with result and the error in negative case
	 */
	public OperationStatusResponseVO checkUser(UserVO user);
	
	/**
	 * Register a new user in the system
	 * 
	 * @param user - new User for the registration
	 */
	public void register(UserVO user);
	
	/**
	 * Check the validity for email token
	 * 
	 * @param token - String required to check
	 * @return The boolean value if the token is correct or not
	 */
	public boolean checkToken(String token);
	
}
