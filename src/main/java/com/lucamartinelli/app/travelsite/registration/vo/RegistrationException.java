package com.lucamartinelli.app.travelsite.registration.vo;

public class RegistrationException extends Exception {
	
	private int errorCode = 500;
	
	private static final long serialVersionUID = 3912034858701246689L;

	public RegistrationException() {
	}
	
	public RegistrationException(int errorCode, String err) {
		super(err);
		this.errorCode = errorCode;
	}
	
	public RegistrationException(int errorCode, Throwable e) {
		super(e);
		this.errorCode = errorCode;
	}
	
	public int getErrorCode() {
		return this.errorCode;
	}
}
