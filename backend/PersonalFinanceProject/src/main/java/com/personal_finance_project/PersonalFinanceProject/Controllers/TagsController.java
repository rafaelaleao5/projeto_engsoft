package com.personal_finance_project.PersonalFinanceProject.Controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.personal_finance_project.PersonalFinanceProject.Entities.TagsEntity;
import com.personal_finance_project.PersonalFinanceProject.Entities.UserEntity;
import com.personal_finance_project.PersonalFinanceProject.Repositories.TagsRepository;
import com.personal_finance_project.PersonalFinanceProject.Security.SecurityFilter;
import com.personal_finance_project.PersonalFinanceProject.Serializer.TagsSerializer;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("tags")
public class TagsController {
	
	@Autowired
	TagsRepository tagsRepository;
	
	@Autowired
	SecurityFilter security;
	
	@PostMapping("/save-tag")
	public ResponseEntity saveTag(@RequestBody HashMap<String, Object> tagObject) throws Exception{
		
		try {
			TagsEntity tag = TagsSerializer.toTag(tagObject);
			
			tagsRepository.save(tag);	
		}catch(Exception e){
			throw new Exception(e);
		}
		
		return ResponseEntity.ok().build();
		
	}
	@GetMapping("/get-user-tags/{userId}")
	public ResponseEntity getUserTags(HttpServletRequest request, @PathVariable Long userId) throws Exception {
		
		try {
			Optional<UserEntity> optionalUser = security.getUser(request);
			
			UserEntity user = optionalUser.get();
			
			List<TagsEntity> tags = tagsRepository.findByUserId(user.getId());
			
			HashMap<String, List<TagsEntity>> tagsList= TagsSerializer.toObject(tags);
			
			return ResponseEntity.ok(tagsList);
			
		}catch(Exception e) {
			throw new Exception(e);
		}
	}

}
