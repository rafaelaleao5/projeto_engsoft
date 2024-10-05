package com.personal_finance_project.PersonalFinanceProject.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.personal_finance_project.PersonalFinanceProject.Entities.PaymentMethodEntity;

public interface PaymentMethodRepository extends JpaRepository<PaymentMethodEntity, Long> {

	List<PaymentMethodEntity> findByUserId(Long userId);
}
