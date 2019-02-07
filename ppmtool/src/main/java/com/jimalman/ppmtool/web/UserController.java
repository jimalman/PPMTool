package com.jimalman.ppmtool.web;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jimalman.ppmtool.domain.User;
import com.jimalman.ppmtool.services.UserService;
import com.jimalman.ppmtool.services.ValidationErrorService;

@RestController
@RequestMapping("/api/users")
public class UserController {
	@Autowired
	private ValidationErrorService mapValidationErrorService;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult result) {
		ResponseEntity<?> errorMap = mapValidationErrorService.ValidationService(result);
		if(errorMap != null) return errorMap;
		
		User newUser = userService.saveUser(user);
		
		return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
	}
}
