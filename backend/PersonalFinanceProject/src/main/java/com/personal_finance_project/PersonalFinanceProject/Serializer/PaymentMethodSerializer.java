package com.personal_finance_project.PersonalFinanceProject.Serializer;

import java.util.HashMap;
import java.util.List;

import com.personal_finance_project.PersonalFinanceProject.Entities.PaymentMethodEntity;
import com.personal_finance_project.PersonalFinanceProject.Entities.UserEntity;

public class PaymentMethodSerializer {
	
	public static PaymentMethodEntity toObject(HashMap<String, Object> paymentMethodJSON, UserEntity user) {
		
		String paymentMethodName = paymentMethodJSON.get("methodName").toString();
		Long userId = user.getId();
		
		PaymentMethodEntity paymentMethod = new PaymentMethodEntity();
		
		paymentMethod.setMethodName(paymentMethodName);
		paymentMethod.setUserId(userId);
		paymentMethod.setIsDefault(false);
		
		return paymentMethod;
	}
	
	public static HashMap<String, List<PaymentMethodEntity>> toJSONList(List<PaymentMethodEntity> 
	paymentMethods){
		
		HashMap<String, List<PaymentMethodEntity>> paymentMethodsArray = new HashMap<String, List<PaymentMethodEntity>>();
		
		paymentMethodsArray.put("paymentMethods", paymentMethods);
		
		return paymentMethodsArray;
		
		
	}
	
	public static PaymentMethodEntity updateObject(HashMap<String, Object> paymentMethodJSON, PaymentMethodEntity paymentMethodObject){
		
		String name = paymentMethodJSON.get("methodName").toString();
		
		paymentMethodObject.setMethodName(name);
		
		return paymentMethodObject;
		
		
	}

}
