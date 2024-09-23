package com.personal_finance_project.PersonalFinanceProject.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EntriesController {
	@RequestMapping("/entry")
	@GetMapping("/")
	public String getTextoDefault() {
		return "Texto! funcionou? vamo ver o build!";
	}

}
