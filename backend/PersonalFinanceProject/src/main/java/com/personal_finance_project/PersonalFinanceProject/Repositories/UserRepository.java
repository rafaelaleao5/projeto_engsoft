package com.personal_finance_project.PersonalFinanceProject.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.personal_finance_project.PersonalFinanceProject.Entities.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long>{

}

