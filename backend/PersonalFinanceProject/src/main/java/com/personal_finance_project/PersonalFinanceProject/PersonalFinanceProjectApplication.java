package com.personal_finance_project.PersonalFinanceProject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan("com.personal_finance_project.PersonalFinanceProject.Entities")
@EnableJpaRepositories(basePackages = "com.personal_finance_project.PersonalFinanceProject.Repositories")
public class PersonalFinanceProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(PersonalFinanceProjectApplication.class, args);
	}

}
