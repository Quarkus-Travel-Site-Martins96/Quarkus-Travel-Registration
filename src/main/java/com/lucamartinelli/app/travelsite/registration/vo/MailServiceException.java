package com.lucamartinelli.app.travelsite.registration.vo;

/**
 * Used to indicate an error during mail sender service
 *
 */
public class MailServiceException extends Exception {

	private static final long serialVersionUID = 5690055223887960019L;
	
	public MailServiceException() {
	}
	
	public MailServiceException(String err) {
		super(err);
	}
	
	public MailServiceException(Throwable e) {
		super(e);
	}
	
}
