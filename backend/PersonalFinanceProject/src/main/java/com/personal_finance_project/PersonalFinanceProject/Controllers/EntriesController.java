package com.personal_finance_project.PersonalFinanceProject.Controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.personal_finance_project.PersonalFinanceProject.Entities.EntriesEntity;
import com.personal_finance_project.PersonalFinanceProject.Entities.PaymentMethodEntity;
import com.personal_finance_project.PersonalFinanceProject.Entities.TagsEntity;
import com.personal_finance_project.PersonalFinanceProject.Entities.UserEntity;
import com.personal_finance_project.PersonalFinanceProject.Repositories.EntriesRepository;
import com.personal_finance_project.PersonalFinanceProject.Repositories.PaymentMethodRepository;
import com.personal_finance_project.PersonalFinanceProject.Repositories.TagsRepository;
import com.personal_finance_project.PersonalFinanceProject.Security.SecurityFilter;
import com.personal_finance_project.PersonalFinanceProject.Serializer.EntriesSerializer;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/entry")
public class EntriesController {
	
	@Autowired
	EntriesRepository entriesRepository;

	@Autowired
	SecurityFilter security;
	
	@Autowired
	PaymentMethodRepository paymentMethodRepository;
	
	@Autowired
	TagsRepository tagsRepository;
	
	@GetMapping("/get-user-entries")
	public ResponseEntity<Object> getUserEntries(HttpServletRequest request) {
		
		Optional<UserEntity> optionalUser = security.getUser(request);
		
		UserEntity user = optionalUser.get();
		
		List<EntriesEntity> entriesList = entriesRepository.findByUserId(user.getId());
		
		return new ResponseEntity<>(entriesList, HttpStatus.OK);
		
	}
	
	@PostMapping("/save-entry")
	public ResponseEntity<Object> saveEntry(HttpServletRequest request, @RequestBody HashMap<String, Object> entryJSON) {
		
		Optional<UserEntity> optionalUser = security.getUser(request);
		
		UserEntity user = optionalUser.get();
		
		Long paymentMethodId = Long.parseLong(entryJSON.get("paymentMethodId").toString());
		
		Long tagId = Long.parseLong(entryJSON.get("tagId").toString());
		
		Optional<PaymentMethodEntity> paymentMethod = paymentMethodRepository.findById(paymentMethodId);
		
		Optional<TagsEntity> tag = tagsRepository.findById(tagId);
		
		EntriesEntity entryObject = new EntriesEntity();
		
		EntriesEntity entry = EntriesSerializer.toObject(entryJSON, user, paymentMethod.get(), tag.get(), entryObject);
		
		entriesRepository.save(entry);
		
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
	@PutMapping("/update-entry/{id}")
	public ResponseEntity<Object> updateEntry(HttpServletRequest request, @PathVariable Long entryId, 
			@RequestBody HashMap<String, Object> entryJSON) {
		
		 boolean existsEntry = entriesRepository.existsById(entryId);
		 
		 if(existsEntry) {
			 
			 Optional<EntriesEntity> optionalEntry = entriesRepository.findById(entryId);
			 
			 EntriesEntity entryObject = optionalEntry.get();
			 
			 Optional<UserEntity> optionalUser = security.getUser(request);
			 
			 UserEntity user = optionalUser.get();
			 
			 Long paymentMethodId = Long.parseLong(entryJSON.get("paymentMethodId").toString());
			 
			 Long tagId = Long.parseLong(entryJSON.get("tagId").toString());
			 
			 Optional<PaymentMethodEntity> paymentMethod = paymentMethodRepository.findById(paymentMethodId);
			 
			 Optional<TagsEntity> tag = tagsRepository.findById(tagId);
			 
			 EntriesEntity entry = EntriesSerializer.toObject(entryJSON, user, paymentMethod.get(), tag.get(), entryObject);
			 
			 entriesRepository.save(entry);
			 
			 return new ResponseEntity<>(entry, HttpStatus.OK);
			 
		 }else {
			 
			 return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			 
		 }
	}
	
	@DeleteMapping("/delete-entry/{id}")
	public ResponseEntity<Object> deleteEntry(@PathVariable Long entryId) {
		
		boolean existsEntry = entriesRepository.existsById(entryId);
		
		if(existsEntry) {
			
			entriesRepository.deleteById(entryId);
			
			return new ResponseEntity<>(HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
		
		
	}

}
