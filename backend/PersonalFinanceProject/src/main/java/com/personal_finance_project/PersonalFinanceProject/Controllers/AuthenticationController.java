package com.personal_finance_project.PersonalFinanceProject.Controllers;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.personal_finance_project.PersonalFinanceProject.UserSerializer;
import com.personal_finance_project.PersonalFinanceProject.DTO.AuthenticationDTO;
import com.personal_finance_project.PersonalFinanceProject.DTO.LoginResponseDTO;
import com.personal_finance_project.PersonalFinanceProject.DTO.RegisterDTO;
import com.personal_finance_project.PersonalFinanceProject.Entities.UserEntity;
import com.personal_finance_project.PersonalFinanceProject.Repositories.UserRepository;
import com.personal_finance_project.PersonalFinanceProject.Services.TokenService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("auth")
public class AuthenticationController {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private TokenService tokenService;
	
	@PostMapping("/login")
	public ResponseEntity login(@RequestBody @Valid HashMap<String, Object> userData) {
		
		UserEntity user = UserSerializer.userLogin(userData);
		
		var emailPassword = new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());
		
		var auth = this.authenticationManager.authenticate(emailPassword);
		
		var token = tokenService.generateToken(user);
		
		return ResponseEntity.ok(new LoginResponseDTO(token));
		
	}
	
	@PostMapping("/register")
	public ResponseEntity register(@RequestBody @Valid HashMap<String, Object> userData) {
		
		UserEntity user = UserSerializer.toUser(userData);
		if(userRepository.findByEmail(user.getEmail()) != null) {
			ResponseEntity.badRequest().build();
			
		}
		
		userRepository.save(user);
		
		return ResponseEntity.ok().build();
		
	}

}
