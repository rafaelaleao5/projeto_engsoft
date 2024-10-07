package com.personal_finance_project.PersonalFinanceProject.Serializer;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;

import com.personal_finance_project.PersonalFinanceProject.Entities.EntriesEntity;
import com.personal_finance_project.PersonalFinanceProject.Entities.PaymentMethodEntity;
import com.personal_finance_project.PersonalFinanceProject.Entities.TagsEntity;
import com.personal_finance_project.PersonalFinanceProject.Entities.UserEntity;
import com.personal_finance_project.PersonalFinanceProject.Repositories.PaymentMethodRepository;

public class EntriesSerializer {
	
	@Autowired
	PaymentMethodRepository paymentMethodRepository;
	
	public static EntriesEntity toObject(HashMap<String, Object> entryJSON, UserEntity user, PaymentMethodEntity paymentMethod, 
			TagsEntity tag, EntriesEntity entryObject) {
		
		String entryName = entryJSON.get("descricao").toString();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		LocalDate purchaseDate = null;
		Float entryValue = Float.valueOf(entryJSON.get("valor").toString());
		String entryType = entryJSON.get("entradaSaida").toString();
		
		if(entryJSON.get("data") != null) {
			purchaseDate = LocalDate.parse(entryJSON.get("data").toString(), formatter);			
		}
		
		entryObject.setEntryName(entryName);
		entryObject.setPurchaseDate(purchaseDate);
		entryObject.setPaymentMethodId(paymentMethod);
		entryObject.setTagId(tag);
		entryObject.setUserId(user);
		entryObject.setEntryValue(entryValue);
		entryObject.setEntryType(entryType);
		
		
		return entryObject;
		
	}

}
