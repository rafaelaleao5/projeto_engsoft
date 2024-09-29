package com.personal_finance_project.PersonalFinanceProject.Security;

import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.personal_finance_project.PersonalFinanceProject.Entities.UserEntity;
import com.personal_finance_project.PersonalFinanceProject.Repositories.UserRepository;
import com.personal_finance_project.PersonalFinanceProject.Services.TokenService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class SecurityFilter extends OncePerRequestFilter {

	@Autowired
	TokenService tokenService;
	
	@Autowired
	UserRepository userRepository;
	
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		var token = recoverToken(request);
		if(token != null) {
			var email = tokenService.validateToken(token);
			UserDetails user = userRepository.findByEmail(email);
			
			var authentication = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
			SecurityContextHolder.getContext().setAuthentication(authentication);
		}
		
		filterChain.doFilter(request, response);
		
	}
	
	private String recoverToken(HttpServletRequest request) {
		var authHeader = request.getHeader("Authorization");
		
		if(authHeader == null) {
			return null;
		}else {
			return authHeader.replace("Bearer ", "");
		}
		
	}
	
	public Optional<UserEntity> getUser(HttpServletRequest request) {
		var token = recoverToken(request);
		Optional<UserEntity> userEntity = Optional.empty();
		if(token != null) {
			String email = tokenService.validateToken(token);
			UserDetails userDetais = userRepository.findByEmail(email);
			
			userEntity = userRepository.findById(Long.parseLong(userDetais.getUsername()));
			
			return userEntity;
		}
		
		return userEntity;
		
	}

}
