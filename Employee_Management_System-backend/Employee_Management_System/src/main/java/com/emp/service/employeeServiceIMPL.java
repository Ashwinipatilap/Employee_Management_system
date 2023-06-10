package com.emp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emp.model.Employee;
import com.emp.repository.employeeRepository;

@Service
public class employeeServiceIMPL implements IemployeeService {

	@Autowired
	employeeRepository emprepo;
	@Override
	public Employee addEmp(Employee emp) {
		// TODO Auto-generated method stub
		return emprepo.save(emp);
	}
	
	

}
