package com.personal_finance_project.PersonalFinanceProject;

import java.util.HashMap;
import java.util.Map;

public class UserSerializer {
	
	public static Map<String, Object> toObjectUser(User user){
		
		Map<String, Object> userObject = new HashMap<>();
		
		userObject.put("name", user.getNome());
		userObject.put("email", user.getEmail());
		userObject.put("password", user.getSenha());
		userObject.put("id", user.getId());
		
		return userObject;
		
	}

}
