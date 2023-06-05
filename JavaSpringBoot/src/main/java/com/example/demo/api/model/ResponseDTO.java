package com.example.demo.api.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;


public class ResponseDTO{
	private String status;
	private List<EmployeeDTO> data;
	private String message;
	
	@JsonCreator
    public ResponseDTO(@JsonProperty("status") String status,
                       @JsonProperty("data") List<EmployeeDTO> data,
                       @JsonProperty("message") String message) {
        this.setStatus(status);
        this.setData(data);
        this.setMessage(message);
    }

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<EmployeeDTO> getData() {
		return data;
	}

	public void setData(List<EmployeeDTO> data) {
		this.data = data;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
