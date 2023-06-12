package com.emp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	
	@GetMapping("/getEmp")
	public ResponseEntity<List<Employee>> getEmployee(){
		List<Employee> emplist = empserv.getEmp();
		if(emplist != null) {
			return ResponseEntity.ok().body(emplist);
		}else {
			return ResponseEntity.status(404).body(null);
		}
		
	}
	
	@PutMapping("/editEmp/{id}")
	public ResponseEntity<Employee> editEmp(@PathVariable int id,@RequestBody Employee emp){
		
		Employee e = empserv.editEmp(id, emp);
		if(e != null) {
			return ResponseEntity.ok().body(e);
		}else {
			return ResponseEntity.status(404).body(null);
		}
	}
	

}
