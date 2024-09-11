package com.personal_finance_project.PersonalFinanceProject.Entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_")
public class UserEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String email;
	private String password;
	private LocalDate birthdate;
	private LocalDateTime lastModified;
	
	public UserEntity() {
		
	}

	public UserEntity(String name, String email, String password, LocalDate birthdate, LocalDateTime lastModified) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.birthdate = birthdate;
		this.lastModified = lastModified;
	}


	public LocalDate getBirthday() {
		return birthdate;
	}
	public void setBirthday(LocalDate birthday) {
		this.birthdate = birthday;
	}
	public LocalDateTime getLastModified() {
		return lastModified;
	}
	public void setLastModified(LocalDateTime lastModified) {
		this.lastModified = lastModified;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
