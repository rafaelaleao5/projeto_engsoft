package com.personal_finance_project.PersonalFinanceProject.Entities;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "entries")
public class EntriesEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long entryId;
	
	private String entryName;
	private LocalDate purchaseDate;
	private Float entryValue;
	private String entryType;

	@ManyToOne
	@JoinColumn(name = "userId", referencedColumnName = "id")
	private UserEntity userId;
	
	@ManyToOne
	@JoinColumn(name = "tagId", referencedColumnName = "id")
	private TagsEntity tagId;
	
	@ManyToOne
	@JoinColumn(name = "paymentMethodId", referencedColumnName = "id")
	private PaymentMethodEntity paymentMethodId;
	
	public EntriesEntity() {
		
	}
	
	public Long getEntryId() {
		return entryId;
	}

	public void setEntryId(Long entryId) {
		this.entryId = entryId;
	}

	public String getEntryName() {
		return entryName;
	}

	public void setEntryName(String entryName) {
		this.entryName = entryName;
	}

	public LocalDate getPurchaseDate() {
		return purchaseDate;
	}

	public void setPurchaseDate(LocalDate purchaseDate) {
		this.purchaseDate = purchaseDate;
	}

	public UserEntity getUserId() {
		return userId;
	}

	public void setUserId(UserEntity userId) {
		this.userId = userId;
	}

	public TagsEntity getTagId() {
		return tagId;
	}

	public void setTagId(TagsEntity tagId) {
		this.tagId = tagId;
	}

	public PaymentMethodEntity getPaymentMethodId() {
		return paymentMethodId;
	}

	public void setPaymentMethodId(PaymentMethodEntity paymentMethodId) {
		this.paymentMethodId = paymentMethodId;
	}

	public Float getEntryValue() {
		return entryValue;
	}

	public void setEntryValue(Float entryValue) {
		this.entryValue = entryValue;
	}

	public String getEntryType() {
		return entryType;
	}

	public void setEntryType(String entryType) {
		this.entryType = entryType;
	}
	
}
