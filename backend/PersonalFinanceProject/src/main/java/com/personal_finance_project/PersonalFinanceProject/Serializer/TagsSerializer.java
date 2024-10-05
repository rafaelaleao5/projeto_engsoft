package com.personal_finance_project.PersonalFinanceProject.Serializer;

import java.util.HashMap;
import java.util.List;

import com.personal_finance_project.PersonalFinanceProject.Entities.PaymentMethodEntity;
import com.personal_finance_project.PersonalFinanceProject.Entities.TagsEntity;

public class TagsSerializer {
	
	public static TagsEntity toTag(HashMap<String, Object> tagObject) {
		
		String name = tagObject.get("name").toString();
		Long userId = Long.parseLong(tagObject.get("userId").toString());
		
		TagsEntity tag = new TagsEntity();
		
		tag.setTagName(name);
		tag.setUserId(userId);
		
		return tag;
		
	}
	
	public static HashMap<String, List<TagsEntity>> toObject(List<TagsEntity> tag) {
		
		HashMap<String, List<TagsEntity>> tagsArray = new HashMap<String, List<TagsEntity>>();
		
		tagsArray.put("tags", tag);
		
		return tagsArray;
		
	}
	
	public static TagsEntity updateObject(HashMap<String, Object> tagJSON, TagsEntity tagObject){
		
		String name = tagJSON.get("tagName").toString();
		
		tagObject.setTagName(name);
		
		return tagObject;
		
		
	}

}
