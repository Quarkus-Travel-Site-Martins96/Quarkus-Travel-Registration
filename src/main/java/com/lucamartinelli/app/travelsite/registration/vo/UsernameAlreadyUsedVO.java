package com.lucamartinelli.app.travelsite.registration.vo;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class UsernameAlreadyUsedVO implements Serializable {
	
	private static final long serialVersionUID = 6885705445852742170L;
	
	Short usernameStatus;

	
	public UsernameAlreadyUsedVO() {
	}
	
	public UsernameAlreadyUsedVO(final Short usernameStatus) {
		super();
		this.usernameStatus = usernameStatus;
	}

	public Short getUsernameStatus() {
		return usernameStatus;
	}

	public void setUsernameStatus(final Short usernameStatus) {
		this.usernameStatus = usernameStatus;
	}

	@Override
	public String toString() {
		return "UsernameAlreadyUsedVO [usernameStatus=" + usernameStatus + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((usernameStatus == null) ? 0 : usernameStatus.hashCode());
		return result;
	}

	@Override
	public boolean equals(final Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		final UsernameAlreadyUsedVO other = (UsernameAlreadyUsedVO) obj;
		if (usernameStatus == null) {
			if (other.usernameStatus != null)
				return false;
		} else if (!usernameStatus.equals(other.usernameStatus))
			return false;
		return true;
	}

	

	
	
}
