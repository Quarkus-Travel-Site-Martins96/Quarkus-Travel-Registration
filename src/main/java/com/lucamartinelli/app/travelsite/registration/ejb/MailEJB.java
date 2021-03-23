package com.lucamartinelli.app.travelsite.registration.ejb;

import com.lucamartinelli.app.travelsite.registration.vo.UserVO;

public interface MailEJB {
	
	public boolean sendMail(UserVO user, String token);
	
}
