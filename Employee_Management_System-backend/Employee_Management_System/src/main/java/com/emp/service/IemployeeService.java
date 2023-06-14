package com.emp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.emp.model.Employee;


public interface IemployeeService {
	
public Employee addEmp(Employee emp);
public List<Employee> getEmp();
public Employee editEmp(int id,Employee emp);

public Employee getEmp(int id);


}
