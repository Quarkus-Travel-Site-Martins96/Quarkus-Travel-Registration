package com.lucamartinelli.app.travelsite.registration.vo;

import java.io.Serializable;
import java.io.StringReader;
import java.util.HashSet;
import java.util.Set;

import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import javax.json.JsonReader;
import javax.json.JsonString;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class UserVO implements Serializable {

	private static final long serialVersionUID = 5436943198117426501L;
	
	private String username;
	private String email;
	private Set<String> groups = new HashSet<>();;
	private String birthdate;
	private String name;
	private String surname;
	private String country;
	private String avatar;
	
	public UserVO() {
	}

	public UserVO(String username, String email, Set<String> groups, String birthdate, String name, String surname,
			String country, String avatar) {
		super();
		this.username = username;
		this.email = email;
		this.groups = groups;
		this.birthdate = birthdate;
		this.name = name;
		this.surname = surname;
		this.country = country;
		this.avatar = avatar;
	}

	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	public Set<String> getGroups() {
		return groups;
	}
	public void setGroups(Set<String> groups) {
		this.groups = groups;
	}

	public String getBirthdate() {
		return birthdate;
	}
	public void setBirthdate(String birthdate) {
		this.birthdate = birthdate;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getAvatar() {
		return avatar;
	}
	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}

	@Override
	public String toString() {
		String base64 = this.avatar;
		
		if (base64 != null && base64.length() > 60)
			base64 = new String(base64.substring(0,50) + "..." + base64.substring(base64.length()-51));
		
		
		return "UserVO [username=" + username + ", email=" + email + ", groups=" + groups + ", birthdate=" + birthdate
				+ ", name=" + name + ", surname=" + surname + ", country=" + country + ", avatar=" + base64 + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((avatar == null) ? 0 : avatar.hashCode());
		result = prime * result + ((birthdate == null) ? 0 : birthdate.hashCode());
		result = prime * result + ((country == null) ? 0 : country.hashCode());
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + ((groups == null) ? 0 : groups.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((surname == null) ? 0 : surname.hashCode());
		result = prime * result + ((username == null) ? 0 : username.hashCode());
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
		UserVO other = (UserVO) obj;
		if (avatar == null) {
			if (other.avatar != null)
				return false;
		} else if (!avatar.equals(other.avatar))
			return false;
		if (birthdate == null) {
			if (other.birthdate != null)
				return false;
		} else if (!birthdate.equals(other.birthdate))
			return false;
		if (country == null) {
			if (other.country != null)
				return false;
		} else if (!country.equals(other.country))
			return false;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (groups == null) {
			if (other.groups != null)
				return false;
		} else if (!groups.equals(other.groups))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (surname == null) {
			if (other.surname != null)
				return false;
		} else if (!surname.equals(other.surname))
			return false;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}

	public JsonObject toJSON() {
		final JsonObjectBuilder job = Json.createObjectBuilder();
		final JsonArrayBuilder jab = Json.createArrayBuilder();
		
		job.add("username", username == null ? "" : username)
				.add("email", email == null ? "" : email)
				.add("birthdate", birthdate == null ? "" : birthdate)
				.add("name", name == null ? "" : name)
				.add("surname", surname == null ? "" : surname)
				.add("country", country == null ? "" : country)
				.add("avatar", avatar == null ? "" : avatar);
		
		groups.forEach(jab::add);
		job.add("groups", jab.build());
		
		return job.build();
	}
	
	public static UserVO parseJSON(String json) {
		final UserVO user = new UserVO();
		
		final JsonReader reader = Json.createReader(new StringReader(json));
		final JsonObject root = reader.readObject();
		user.username = root.getString("username");
		user.email = root.getString("email");
		user.birthdate = root.getString("birthdate");
		user.name = root.getString("name");
		user.surname = root.getString("surname");
		user.country = root.getString("country");
		user.avatar = root.getString("avatar");
		final Set<String> groups = new HashSet<>(0);
		
		root.getJsonArray("groups").getValuesAs(JsonString.class)
				.forEach(s -> groups.add(s.getString()));
		
		user.groups = groups;
		return user;
	}

}
