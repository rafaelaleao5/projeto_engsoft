package com.personal_finance_project.PersonalFinanceProject.Controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.personal_finance_project.PersonalFinanceProject.Entities.PaymentMethodEntity;
import com.personal_finance_project.PersonalFinanceProject.Entities.UserEntity;
import com.personal_finance_project.PersonalFinanceProject.Repositories.PaymentMethodRepository;
import com.personal_finance_project.PersonalFinanceProject.Security.SecurityFilter;
import com.personal_finance_project.PersonalFinanceProject.Serializer.PaymentMethodSerializer;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("payment-methods")
public class PaymentMethodController {

	@Autowired
	PaymentMethodRepository paymentMethodRepository;

	@Autowired
	SecurityFilter security;

	@PostMapping("save-payment-method")
	public ResponseEntity savePaymentMethod(HttpServletRequest request,
			@RequestBody HashMap<String, Object> paymentMethodJSON) throws Exception {

		try {
			Optional<UserEntity> optionalUser = security.getUser(request);

			UserEntity user = optionalUser.get();

			PaymentMethodEntity paymentMethod = PaymentMethodSerializer.toObject(paymentMethodJSON, user);

			paymentMethodRepository.save(paymentMethod);

			return ResponseEntity.ok().build();

		} catch (Exception e) {
			throw new Exception(e);
		}
	}

	@GetMapping("/get-user-payment-method")
	public ResponseEntity getUserPaymentMethods(HttpServletRequest request) throws Exception {

		try {
			Optional<UserEntity> optionalUser = security.getUser(request);

			UserEntity user = optionalUser.get();

			List<PaymentMethodEntity> paymentMethods = paymentMethodRepository.findByUserId(user.getId());

			HashMap<String, List<PaymentMethodEntity>> paymentMethodList = PaymentMethodSerializer
					.toJSONList(paymentMethods);

			return ResponseEntity.ok(paymentMethodList);

		} catch (Exception e) {
			throw new Exception(e);
		}
	}

	@PutMapping("update-payment-method/{id}")
	public ResponseEntity updatePaymentMethod(HttpServletRequest request, @RequestBody HashMap<String, Object> paymentMethodJSON,
			@PathVariable Long methodId) throws Exception {

		try {
			boolean existsPaymentMethod = paymentMethodRepository.existsById(methodId);
			
			if (existsPaymentMethod) {
				
				Optional<PaymentMethodEntity> optionalPaymentMethod = paymentMethodRepository.findById(methodId);
				
				Optional<UserEntity> optionalUser = security.getUser(request);
				
				PaymentMethodEntity oldPaymentMethod = optionalPaymentMethod.get();
				
				UserEntity user = optionalUser.get();

				PaymentMethodEntity paymentMethod = PaymentMethodSerializer.updateObject(paymentMethodJSON, oldPaymentMethod);
				
				paymentMethodRepository.save(paymentMethod);
				
				return ResponseEntity.ok().build();
			}else {
				return ResponseEntity.notFound().build();
			}

		} catch (Exception e) {
			throw new Exception(e);
		}

	}
	
	@PutMapping("delete-payment-method/{id}")
	public ResponseEntity deletePaymentMethod(HttpServletRequest request,
			@PathVariable Long methodId) throws Exception {

		try {
			boolean existsPaymentMethod = paymentMethodRepository.existsById(methodId);
			
			if (existsPaymentMethod) {
				
				paymentMethodRepository.deleteById(methodId);
				
				return ResponseEntity.ok().build();
			}else {
				return ResponseEntity.notFound().build();
			}

		} catch (Exception e) {
			throw new Exception(e);
		}

	}

}
