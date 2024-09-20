package com.personal_finance_project.PersonalFinanceProject.Services;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.personal_finance_project.PersonalFinanceProject.Entities.UserEntity;

@Service
public class TokenService {

	@Value("${api.security.token.secret}")
	private String secret;
	private String ISSUER = "personal-finance";
	
	
	public String generateToken(UserEntity user){
		try {
			Algorithm algorithm = Algorithm.HMAC256(secret);
			String token = JWT.create()
			.withIssuer(ISSUER)
			.withSubject(user.getEmail())
			.withExpiresAt(generateExpirationDate())
			.sign(algorithm);
			
			return token;
		}catch(JWTCreationException exception){
			throw new RuntimeException("Error while generating token", exception);
		}
	}
	
	public String validateToken(String token) {
		try {
			Algorithm algorithm = Algorithm.HMAC256(secret);
			return JWT.require(algorithm)
					.withIssuer(ISSUER)
					.build()
					.verify(token)
					.getSubject();
		}catch(JWTVerificationException exception) {
			return "";
		}
	}
	
	private Instant generateExpirationDate() {
		return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
	}
}
