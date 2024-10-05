package com.personal_finance_project.PersonalFinanceProject.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.personal_finance_project.PersonalFinanceProject.Entities.EntriesEntity;

public interface EntriesRepository extends JpaRepository<EntriesEntity, Long> {
	
	List<EntriesEntity> findByUserId(Long userId);

}