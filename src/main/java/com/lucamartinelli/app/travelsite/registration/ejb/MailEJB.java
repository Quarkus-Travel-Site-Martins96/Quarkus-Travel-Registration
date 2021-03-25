package com.lucamartinelli.app.travelsite.registration.ejb;

import com.lucamartinelli.app.travelsite.registration.vo.MailServiceException;
import com.lucamartinelli.app.travelsite.registration.vo.UserVO;

/**
 * Mail sender service
 * 
 * @author Luca Martinelli
 *
 */
public interface MailEJB {
	
	/**
	 * Create and send the mail to user
	 */
	public void sendMail(UserVO user, String token) throws MailServiceException;
	
}
