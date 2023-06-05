package com.example.demo.api.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ResponseByIdDTO{
	private String status;
	private EmployeeDTO data;
	private String message;
	
	@JsonCreator
    public ResponseByIdDTO(@JsonProperty("status") String status,
                       @JsonProperty("data") EmployeeDTO data,
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

	public EmployeeDTO getData() {
		return data;
	}

	public void setData(EmployeeDTO data) {
		this.data = data;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
