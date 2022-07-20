package com.lucamartinelli.app.travelsite.registration.ejb;

import com.lucamartinelli.app.travelsite.registration.vo.UserVO;

/**
 * This class encrypt and decrypt the user data for store it in the mail
 * 
 * @author Luca Martinelli
 *
 */
public interface CryptoEJB {
	
	/**
	 * This method encrypt the user data and return the coded string.<br>
	 * The encrypted value will be used as token in the confirmation mail.
	 * 
	 * @param user - to encrypt
	 * @return The encrypted string, <code>null</code> in case of error
	 */
	public String entryptUser(UserVO user);
	
	
	/**
	 * This method decrypt the generated token into User structure
	 * 
	 * @param token - encrypted string
	 * @return User data, <code>null</code> in case of error
	 */
	public UserVO decryptUser(String token);
	
	
	/**
	 * This method will hash a string using algorithm <code>Add algorithm</code>
	 * 
	 * @param clear string to hash
	 * @return The string hashed
	 */
	public String hashString(String cleanString);
}
