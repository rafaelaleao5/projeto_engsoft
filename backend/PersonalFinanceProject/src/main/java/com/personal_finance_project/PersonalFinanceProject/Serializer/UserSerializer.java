package com.personal_finance_project.PersonalFinanceProject.Serializer;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.personal_finance_project.PersonalFinanceProject.Entities.UserEntity;

public class UserSerializer {
	public static UserEntity toUser(HashMap<String, Object> userObject){
		
		String name = userObject.get("name").toString();
		String email = userObject.get("email").toString();
		String password = new BCryptPasswordEncoder().encode(userObject.get("password").toString());
		LocalDate birthdate = null;
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
		if(userObject.get("birthdate") != null) {
			birthdate = LocalDate.parse(userObject.get("birthdate").toString(), formatter);			
		}
		
		UserEntity user = new UserEntity();
		
		user.setName(name);
		user.setEmail(email);
		user.setPassword(password);
		user.setBirthday(birthdate);
		user.setLastModified(LocalDateTime.now());
		
		return user;
		
	}
	
	public static UserEntity userLogin(HashMap<String, Object> userObject){
		
		String email = userObject.get("email").toString();
		String password = userObject.get("password").toString();
		
		UserEntity user = new UserEntity();
		
		user.setEmail(email);
		user.setPassword(password);
		
		return user;
		
	}

}
