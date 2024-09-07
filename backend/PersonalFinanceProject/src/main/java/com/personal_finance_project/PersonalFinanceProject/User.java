package com.personal_finance_project.PersonalFinanceProject;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

public class User {
	
	private Long id;
	private String nome;
	private String email;
	private String senha;
	private Date birthdate;
	private Date modifiedDate;
	
	public User(String nome, String email, String senha, Date birthdate, Date modifiedDate) {
		this.nome = nome;
		this.email = email;
		this.senha = senha;
		this.birthdate = birthdate;
		this.modifiedDate = modifiedDate;
	}

	public Date getBirthday() {
		return birthdate;
	}

	public void setBirthday(Date birthday) {
		this.birthdate = birthday;
	}

	public Date getModifiedDate() {
		return modifiedDate;
	}

	public void setModifiedDate(Date modifiedDate) {
		this.modifiedDate = modifiedDate;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
}




