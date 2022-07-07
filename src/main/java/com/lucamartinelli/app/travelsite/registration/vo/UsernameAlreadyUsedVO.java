package com.lucamartinelli.app.travelsite.registration.vo;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class UsernameAlreadyUsedVO implements Serializable {
	
	private static final long serialVersionUID = 6885705445852742170L;
	
	Boolean alreadyUsed;

	public Boolean getAlreadyUsed() {
		return alreadyUsed;
	}

	public void setAlreadyUsed(Boolean alreadyUsed) {
		this.alreadyUsed = alreadyUsed;
	}

	@Override
	public String toString() {
		return "UsernameAlreadyUsedVO [alreadyUsed=" + alreadyUsed + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((alreadyUsed == null) ? 0 : alreadyUsed.hashCode());
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
		UsernameAlreadyUsedVO other = (UsernameAlreadyUsedVO) obj;
		if (alreadyUsed == null) {
			if (other.alreadyUsed != null)
				return false;
		} else if (!alreadyUsed.equals(other.alreadyUsed))
			return false;
		return true;
	}
	
	
	
}
