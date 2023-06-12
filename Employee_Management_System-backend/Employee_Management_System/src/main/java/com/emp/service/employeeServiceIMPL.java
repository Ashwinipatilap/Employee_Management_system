package com.emp.service;

import java.util.List;

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
	@Override
	public List<Employee> getEmp() {
		// TODO Auto-generated method stub
		return emprepo.findAll();
	}
	@Override
	public Employee editEmp(int id, Employee emp) {
		Employee newemp = emprepo.findById(id);
		
		newemp.setFirstName(emp.getFirstName());
		newemp.setLastName(emp.getLastName());
		newemp.setEmailId(emp.getEmailId());
		newemp.setContactNumber(emp.getContactNumber());
		return emprepo.save(newemp);
	}
	
	

}
