package com.example.demo.api.controller;
import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.api.model.EmployeeDTO;
import com.example.demo.service.EmployeeService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/employees")
@RequiredArgsConstructor
public class APIServiceController {
		
	@Autowired
	private EmployeeService employeeService;
    
	@CrossOrigin(origins = "*")
	@GetMapping("/{id}")
    public ResponseEntity<List<EmployeeDTO>> get(@PathVariable("id") int id) throws JsonMappingException, JsonProcessingException{
    	return new ResponseEntity<List<EmployeeDTO>> (employeeService.getEmployeeById(id), HttpStatus.OK);
    }
	
	@CrossOrigin(origins = "*")
    @GetMapping
    public ResponseEntity<List<EmployeeDTO>> getAllEmployees() throws JsonMappingException, JsonProcessingException{
    	return new ResponseEntity<List<EmployeeDTO>>(employeeService.getEmployees(), HttpStatus.OK);
    }
}