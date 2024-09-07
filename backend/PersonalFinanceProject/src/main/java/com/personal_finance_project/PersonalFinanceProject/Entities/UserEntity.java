package com.personal_finance_project.PersonalFinanceProject.Entities;

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
	private Date birthdate;
	private Date lastModified;
	
	public UserEntity() {
		
	}

	public UserEntity(String name, String email, String password, Date birthdate, Date lastModified) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.birthdate = birthdate;
		this.lastModified = lastModified;
	}


	public Date getBirthday() {
		return birthdate;
	}
	public void setBirthday(Date birthday) {
		this.birthdate = birthday;
	}
	public Date getLastModified() {
		return lastModified;
	}
	public void setLastModified(Date lastModified) {
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
