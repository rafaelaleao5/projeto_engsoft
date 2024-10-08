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
	public ResponseEntity saveTag(HttpServletRequest request, @RequestBody HashMap<String, Object> tagObject) throws Exception {

		try {

			Optional<UserEntity> optionalUser = security.getUser(request);

			UserEntity user = optionalUser.get();
			
			tagObject.put("userId", user.getId());
			
			TagsEntity tag = TagsSerializer.toTag(tagObject);

			tag = tagsRepository.save(tag);
			
			return new ResponseEntity<>(tag, HttpStatus.OK);
			
		} catch (Exception e) {
			
			throw new Exception(e);
		}


	}

	@GetMapping("/get-user-tags")
	public ResponseEntity getUserTags(HttpServletRequest request) throws Exception {

		try {
			Optional<UserEntity> optionalUser = security.getUser(request);

			UserEntity user = optionalUser.get();

			List<TagsEntity> tags = tagsRepository.findByUserIdAndIsDefault(user.getId(), false);

			HashMap<String, List<TagsEntity>> tagsList = TagsSerializer.toObject(tags);

			return ResponseEntity.ok(tagsList);

		} catch (Exception e) {
			throw new Exception(e);
		}
	}
	
	@GetMapping("/get-default-tags")
	public ResponseEntity getDefaultTags(HttpServletRequest request) throws Exception {

		try {

			List<TagsEntity> tags = tagsRepository.findByIsDefault(true);

			HashMap<String, List<TagsEntity>> defaultTagsList = TagsSerializer.toObject(tags);

			return ResponseEntity.ok(defaultTagsList);

		} catch (Exception e) {
			throw new Exception(e);
		}
	}
	
	@PutMapping("/update-user-tags/{tagId}")
	public ResponseEntity updateUserTags(@RequestBody HashMap<String, Object> tagJSON, @PathVariable Long tagId) throws Exception {

		try {
			
			boolean existsTag = tagsRepository.existsById(tagId);
			
			if(existsTag) {
				
				Optional<TagsEntity> optionalTag = tagsRepository.findById(tagId);
				
				TagsEntity tagObject = optionalTag.get();
				
				tagObject = TagsSerializer.updateObject(tagJSON, tagObject);
				
				return ResponseEntity.ok().build();
				
			}else {
				return ResponseEntity.notFound().build();
			}
			

		} catch (Exception e) {
			throw new Exception(e);
		}
	}
	
	@DeleteMapping("/delete-user-tags/{tagId}")
	public ResponseEntity deleteTag(@PathVariable Long tagId) throws Exception {

		try {
			
			boolean existsTag = tagsRepository.existsById(tagId);
			
			if(existsTag) {
				
				tagsRepository.deleteById(tagId);
				
				return ResponseEntity.ok().build();
				
			}else {
				return ResponseEntity.notFound().build();
			}
			

		} catch (Exception e) {
			throw new Exception(e);
		}
	}

}
