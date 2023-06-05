package com.example.demo.api.client;


import org.springframework.cloud.openfeign.FeignClient;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.api.client.AppConfig;

@FeignClient(name = "ThalesService", url = "${api.urlToRequest}", configuration = AppConfig.class)
public interface EmployeeFeignClient {
	
	@GetMapping(value = "/api/v1/employees", consumes = MediaType.APPLICATION_JSON_VALUE)
	String getEmployees();
	
	@GetMapping(value = "/api/v1/employee/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
	String getEmployeeById(@PathVariable("id") int id);
}
