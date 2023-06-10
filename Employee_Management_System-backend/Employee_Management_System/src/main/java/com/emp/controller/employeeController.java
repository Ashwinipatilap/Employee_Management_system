package com.emp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emp.model.Employee;
import com.emp.service.IemployeeService;
@CrossOrigin
@RestController
@RequestMapping("/employee")
public class employeeController {
	@Autowired(required=true)
	IemployeeService empserv;
	
	@PostMapping("/addEmp")
	public ResponseEntity<Employee> addEmp(@RequestBody Employee employee ){
		Employee newemp = empserv.addEmp(employee);
		if(newemp != null) {
			return ResponseEntity.ok().body(newemp);
		}else {
			return ResponseEntity.status(404).body(null);
		}
	}
	

}
