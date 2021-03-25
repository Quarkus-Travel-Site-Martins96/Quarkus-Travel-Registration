package com.lucamartinelli.app.travelsite.registration.ejb;

import java.io.IOException;

import com.lucamartinelli.app.travelsite.registration.vo.MailServiceException;
import com.lucamartinelli.app.travelsite.registration.vo.OperationStatusResponseVO;
import com.lucamartinelli.app.travelsite.registration.vo.RegistrationException;
import com.lucamartinelli.app.travelsite.registration.vo.UserVO;

/**
 * EJB for managing the registration
 * 
 * @author Luca Martinelli
 * @date 23/03/2021
 *
 */
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
	 * Create a registration token for new user, this token must be validate via mail
	 * 
	 * @param user - new User for the registration
	 */
	public void register(UserVO user) throws MailServiceException, RegistrationException;
	
	/**
	 * Check the validity for email token and register the user into system
	 * 
	 * @param token - String required to check
	 * @return Operation result
	 */
	public boolean checkTokenAndRegister(String token);
	
	/**
	 * Get TY page for validated token
	 * 
	 */
	public String getValidHTML() throws IOException;
	
	/**
	 * Get courtesy page for error validate
	 * 
	 */
	public String getFailHTML() throws IOException;
	
}
