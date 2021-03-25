package com.lucamartinelli.app.travelsite.registration.ejb;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;
import java.util.Base64;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.spec.SecretKeySpec;
import javax.enterprise.context.RequestScoped;

import org.apache.commons.io.IOUtils;
import org.jboss.logging.Logger;

import com.lucamartinelli.app.travelsite.registration.util.ResourceUtils;
import com.lucamartinelli.app.travelsite.registration.vo.UserVO;

@RequestScoped
public class CryptoEJBImpl implements CryptoEJB {

	private static final String AES_KEY_CLASSPATH = "META-INF/secrets/aes-key";
	private final Logger log;

	public CryptoEJBImpl() {
		log = Logger.getLogger(this.getClass());
	}

	@Override
	public String entryptUser(UserVO user) {
		log.debug("Begin encrypting");
		try {
			log.debug("Loading secret");
			final String secret = getSecret();
			final SecretKeySpec secretKey = getKey(secret);
			log.debug("Creating Algoritm");
			final Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");
			cipher.init(Cipher.ENCRYPT_MODE, secretKey);
			log.debug("Encrypting");
			return Base64.getUrlEncoder().encodeToString(cipher
					.doFinal(user.toJSON().toString().getBytes(StandardCharsets.UTF_8)));
		} catch (NoSuchAlgorithmException | NoSuchPaddingException 
				| InvalidKeyException | IllegalBlockSizeException 
				| BadPaddingException e) {
			log.error("Error while encrypting: ", e);
		} finally {
			log.debug("End encrypting");
		}
		return null;
	}

	@Override
	public UserVO decryptUser(String token) {
		log.debug("Begin decrypting");
		try {
			log.debug("Loading secret");
			final String secret = getSecret();
			final SecretKeySpec secretKey = getKey(secret);
			log.debug("Creating Algoritm");
			final Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5PADDING");
			cipher.init(Cipher.DECRYPT_MODE, secretKey);
			log.debug("Encrypting");
			final String decodedJson = new String(cipher.doFinal(Base64
					.getUrlDecoder().decode(token)));
			return UserVO.parseJSON(decodedJson);
		} catch (NoSuchAlgorithmException | NoSuchPaddingException 
				| InvalidKeyException | IllegalBlockSizeException 
				| BadPaddingException e) {
			log.error("Error while decrypting: ", e);
		} finally {
			log.debug("End decrypting");
		}
		return null;
	}

	private SecretKeySpec getKey(String myKey) throws NoSuchAlgorithmException {
		try {
			byte[] key = myKey.getBytes(StandardCharsets.UTF_8);
			final MessageDigest sha = MessageDigest.getInstance("SHA-1");
			key = sha.digest(key);
			key = Arrays.copyOf(key, 16);
			return new SecretKeySpec(key, "AES");
		} catch (NoSuchAlgorithmException e) {
			log.error("Error setting Key ", e);
			throw e;
		}
	}
	
	private String getSecret() throws InvalidKeyException {
		try {
			return IOUtils.toString(ResourceUtils
					.getAsClasspathResource(AES_KEY_CLASSPATH), StandardCharsets.UTF_8);
		} catch (IOException e) {
			log.error("Error during read AES key ", e);
			throw new InvalidKeyException(e);
		} finally {
			log.debug("AES key read from config");
		}
	}

}
