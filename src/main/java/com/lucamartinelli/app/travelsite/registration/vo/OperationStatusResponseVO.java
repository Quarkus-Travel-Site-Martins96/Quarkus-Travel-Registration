package com.lucamartinelli.app.travelsite.registration.vo;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class OperationStatusResponseVO implements Serializable {
	
	private static final long serialVersionUID = 8819802392540939487L;
	
	private Boolean result;
	private String error;
	
	public OperationStatusResponseVO() {
	}
	
	public OperationStatusResponseVO(Boolean result, String error) {
		super();
		this.result = result;
		this.error = error;
	}

	public Boolean getResult() {
		return result;
	}
	public void setResult(Boolean result) {
		this.result = result;
	}

	public String getError() {
		return error;
	}
	public void setError(String error) {
		this.error = error;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((error == null) ? 0 : error.hashCode());
		result = prime * result + ((this.result == null) ? 0 : this.result.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		OperationStatusResponseVO other = (OperationStatusResponseVO) obj;
		if (error == null) {
			if (other.error != null)
				return false;
		} else if (!error.equals(other.error))
			return false;
		if (result == null) {
			if (other.result != null)
				return false;
		} else if (!result.equals(other.result))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "CheckUserResponseVO [result=" + result + ", error=" + error + "]";
	}
	
	
}
