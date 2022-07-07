package com.lucamartinelli.app.travelsite.registration;

import java.util.HashMap;
import java.util.Map;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.eclipse.microprofile.config.Config;

@Path("/endpoint")
@ApplicationScoped
@Produces(MediaType.TEXT_PLAIN)
public class EndpointUrl {

	@Inject
	Config conf;
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Map<String, String> getUrls() {
		final Map<String, String> urlsMap = new HashMap<>();
		urlsMap.put("home", getHome());
		urlsMap.put("login", getLogin());
		urlsMap.put("hotel", getHotel());
		urlsMap.put("registration", getRegistration());
		urlsMap.put("user-management", getUserManagement());
		return urlsMap;
	}
	
	@GET
	@Path("/home")
	public String getHome() {
		return conf.getOptionalValue("endpoint.home", String.class).orElse("http://localhost:8080");
	}
	
	@GET
	@Path("/login")
	public String getLogin() {
		return conf.getOptionalValue("endpoint.login", String.class).orElse("http://localhost:7070");
	}
	
	@GET
	@Path("/hotel")
	public String getHotel() {
		return conf.getOptionalValue("endpoint.hotel", String.class).orElse("http://localhost:8081");
	}
	
	@GET
	@Path("/user-management")
	public String getUserManagement() {
		return conf.getOptionalValue("endpoint.home", String.class).orElse("http://localhost:7071");
	}
	
	@GET
	@Path("/registration")
	public String getRegistration() {
		return conf.getOptionalValue("endpoint.registration", String.class).orElse("http://localhost:7171");
	}
	
	
	
}
