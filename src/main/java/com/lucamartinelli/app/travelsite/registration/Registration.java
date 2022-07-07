package com.lucamartinelli.app.travelsite.registration;

import java.io.IOException;

import javax.inject.Inject;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.jboss.logging.Logger;

import com.lucamartinelli.app.travelsite.registration.ejb.RegistrationEJB;
import com.lucamartinelli.app.travelsite.registration.vo.MailServiceException;
import com.lucamartinelli.app.travelsite.registration.vo.OperationStatusResponseVO;
import com.lucamartinelli.app.travelsite.registration.vo.RegistrationException;
import com.lucamartinelli.app.travelsite.registration.vo.UserVO;
import com.lucamartinelli.app.travelsite.registration.vo.UsernameAlreadyUsedVO;

@Path("/registration")
public class Registration {
	
	@Inject Logger log;
	
	@Inject RegistrationEJB regEJB;
	
	@Context HttpServletResponse response;
	
	@GET
	@Path("/already-used/{username}")
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	public UsernameAlreadyUsedVO alreadyInUse(@PathParam("username") String username) {
		try {
			Thread.sleep(4000L);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		final boolean inUse = regEJB.alreadyUsed(username);
		UsernameAlreadyUsedVO res = new UsernameAlreadyUsedVO();
		res.setAlreadyUsed(inUse);
		
		return res;
	}
	
	@POST
	@Path("/check")
	@Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
	public OperationStatusResponseVO checkUser(UserVO user) {
		log.debug("Checking user: " + user);
		return regEJB.checkUser(user);
	}
	
    @POST
    @Path("/register")
    @Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    public Response register(UserVO user) {
    	try {
    		regEJB.register(user);
		} catch (MailServiceException e) {
			log.error(e);
			setError(500, e.getMessage());
			return null;
		} catch (RegistrationException e) {
			log.error(e);
			setError(e.getErrorCode(), e.getMessage());
			return null;
		}
    	
        return Response.ok().build();
    }
    
    @GET
    @Path("/validate")
    @Produces(MediaType.TEXT_HTML)
    public String validate(@QueryParam("token") String token) {
    	log.debug("Validating token: " + token);
    	final boolean regResult = regEJB.checkTokenAndRegister(token);
    	try {
	    	if(!regResult) {
	    		log.error("Insert result failed, please verify the token");
	    		return regEJB.getFailHTML();
	    	}
	    	
	    	return regEJB.getValidHTML();
    	} catch(IOException e) {
    		log.error("Error IO: ", e);
    		throw new RuntimeException(e);
    	}
    }
    
    
    private void setError(int code, String msg) {
    	try {
			response.sendError(code, msg);
		} catch (IOException e) {
			log.error("Error during set error.", e);
			throw new RuntimeException(e);
		}
    }
}