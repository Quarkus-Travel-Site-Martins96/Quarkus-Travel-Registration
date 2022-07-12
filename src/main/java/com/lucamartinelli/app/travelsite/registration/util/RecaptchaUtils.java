package com.lucamartinelli.app.travelsite.registration.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.StringReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

import javax.json.Json;
import javax.json.JsonObject;

import io.quarkus.logging.Log;

public class RecaptchaUtils {
	
	
	
	/**
	 * Validates Google reCAPTCHA V2 or Invisible reCAPTCHA.
	 *
	 * @param secretKey Secret key (key given for communication between your
	 * site and Google)
	 * @param response reCAPTCHA response from client side.
	 * (g-recaptcha-response)
	 * @return true if validation successful, false otherwise.
	 * @throws IOException 
	 * @throws MalformedURLException 
	 */
	public static synchronized boolean isCaptchaValid(String secretKey, String response) 
			throws MalformedURLException, IOException {
        final String url = "https://www.google.com/recaptcha/api/siteverify",
                params = "secret=" + secretKey + "&response=" + response;

        final HttpURLConnection http = (HttpURLConnection) new URL(url).openConnection();
        http.setDoOutput(true);
        http.setRequestMethod("POST");
        http.setRequestProperty("Content-Type",
                "application/x-www-form-urlencoded; charset=UTF-8");
        final OutputStream out = http.getOutputStream();
        out.write(params.getBytes("UTF-8"));
        out.flush();
        out.close();

        final InputStream res = http.getInputStream();
        final BufferedReader rd = new BufferedReader(new InputStreamReader(res, "UTF-8"));

        final StringBuilder sb = new StringBuilder();
        int cp;
        while ((cp = rd.read()) != -1) {
            sb.append((char) cp);
        }
        
        final JsonObject jsonResp = Json
        		.createReader(new StringReader(sb.toString()))
        		.readObject();
        
        res.close();

        return jsonResp.getBoolean("success");
	}
	
}
