package com.personal_finance_project.PersonalFinanceProject;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EntryRestServiceImpl {
	
	@GetMapping("/")
	public String getTextoDefault() {
		return "Texto! funcionou? vamo ver o build!";
	}

}
