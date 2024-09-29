package com.personal_finance_project.PersonalFinanceProject.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tags")
public class TagsEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String tagName;
	private String type;
	private Long userId;
	
	
	public TagsEntity() {
		
	}
	
	public TagsEntity(String tagName, String type, Long userId) {
		this.tagName = tagName;
		this.type = type;
		this.userId = userId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getId() {
		return id;
	}

	public String getTagName() {
		return tagName;
	}

	public void setTagName(String tagName) {
		this.tagName = tagName;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}



}


