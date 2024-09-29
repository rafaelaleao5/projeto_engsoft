package com.personal_finance_project.PersonalFinanceProject.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.personal_finance_project.PersonalFinanceProject.Entities.TagsEntity;

public interface TagsRepository extends JpaRepository<TagsEntity, Long> {

	List<TagsEntity> findByUserId(Long userId);
}
