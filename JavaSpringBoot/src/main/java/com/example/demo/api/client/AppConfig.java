package com.example.demo.api.client;

import org.springframework.context.annotation.Bean;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import feign.Logger;

@Configuration
public class AppConfig {
    @Bean
    Logger.Level feignLoggerLevel() {return Logger.Level.FULL;}
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("*") // Set the allowed origins
                        .allowedMethods("*") // Set the allowed HTTP methods
                        .allowedHeaders("*"); // Set the allowed headers
            }
        };
    }
    /*public RestTemplate restTemplate() {
        return new RestTemplate();
    }*/
}