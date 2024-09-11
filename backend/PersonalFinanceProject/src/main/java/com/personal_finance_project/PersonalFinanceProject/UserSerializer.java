package com.personal_finance_project.PersonalFinanceProject;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.json.JSONObject;

import com.personal_finance_project.PersonalFinanceProject.Entities.UserEntity;

public class UserSerializer {
	
	public static UserEntity toUser(HashMap<String, Object> userObject){
		
		String name = userObject.get("name").toString();
		String email = userObject.get("email").toString();
		String password = userObject.get("password").toString();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
		LocalDate birthdate = LocalDate.parse(userObject.get("birthdate").toString(), formatter);
		
		UserEntity user = new UserEntity();
		
		user.setName(name);
		user.setEmail(email);
		user.setPassword(password);
		user.setBirthday(birthdate);
		user.setLastModified(LocalDateTime.now());
		
		return user;
		
	}

}
