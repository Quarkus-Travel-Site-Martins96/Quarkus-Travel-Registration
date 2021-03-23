package com.lucamartinelli.app.travelsite.registration;

import io.quarkus.test.junit.QuarkusTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;

import com.lucamartinelli.app.travelsite.registration.ejb.CryptoEJB;
import com.lucamartinelli.app.travelsite.registration.ejb.CryptoEJBImpl;
import com.lucamartinelli.app.travelsite.registration.vo.UserVO;

import static io.restassured.RestAssured.given;

@QuarkusTest
public class RegistrationTest {

    @Test
    public void testHelloEndpoint() {
        given()
          .when().get("/health")
          .then()
             .statusCode(200);
    }
    
    @Test
    public void testCrypto() {
    	final UserVO user = new UserVO();
    	user.setUsername("test");
    	user.setEmail("test@mail.com");
    	user.setCountry("Japan");
    	user.setBirthdate("1990-01-01");
    	user.setName("Test");
    	user.setSurname("Test1");
    	
    	final CryptoEJB ejb = new CryptoEJBImpl();
    	assertNotNull(ejb, "EJB is null");
    	
    	System.out.println("Starting user: " + user.toJSON().toString());
    	final String encrypted = ejb.entryptUser(user);
    	assertNotNull(encrypted, "Encryption failed");
    	System.out.println("Encrypted value: " + encrypted);
    	
    	final UserVO decryptedUser = ejb.decryptUser(encrypted);
    	assertNotNull(decryptedUser, "Decryption failed");
    	System.out.println("Decrypted user: " + decryptedUser);
    	
    	assertEquals(user.toJSON().toString(), decryptedUser.toJSON().toString(), 
    			"User decrypted is not equals to initial one");
    	
    }

}