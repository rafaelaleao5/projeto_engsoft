package com.personal_finance_project.PersonalFinanceProject.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "paymentmethods")
public class PaymentMethodEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String methodName;
	private Long userId;
	
	
	public PaymentMethodEntity() {
		
	}
	
	
	public PaymentMethodEntity(long id, String methodName, Long userId) {
		this.methodName = methodName;
		this.userId = userId;
	}


	public Long getId() {
		return id;
	}

	public String getMethodName() {
		return methodName;
	}


	public void setMethodName(String methodName) {
		this.methodName = methodName;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public Long getUserId() {
		return userId;
	}


	public void setUserId(Long userId) {
		this.userId = userId;
	}
	
}


