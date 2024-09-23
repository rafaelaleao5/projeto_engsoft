package com.personal_finance_project.PersonalFinanceProject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.personal_finance_project.PersonalFinanceProject.Entities.UserEntity;
import com.personal_finance_project.PersonalFinanceProject.Repositories.UserRepository;


@RestController
@RequestMapping("/user")
public class UserRestService {
	
	@Autowired
	UserRepository userRepository;
	
	List<User> teste = new ArrayList<User>();
	
	@GetMapping("/get-users")
	public List<UserEntity> getUsers(){
		
		return userRepository.findAll();
		
	}
	
	@GetMapping("/get-user/{userId}")
	public ResponseEntity<Object> getUser(@PathVariable("userId") long userId) {
		
		return new ResponseEntity<>(userRepository.findById(userId), HttpStatus.OK);
	    
	}
	
	@PostMapping("/save-user")
	public ResponseEntity<Object> saveUser(@RequestBody HashMap<String, Object> userObject){
		
		
		UserEntity user = UserSerializer.toUser(userObject);
		
		userRepository.save(user);
		
		return new ResponseEntity<>(user, HttpStatus.OK);
		
	}

}