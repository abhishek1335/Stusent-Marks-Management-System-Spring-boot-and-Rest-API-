package com.jntuk.marks.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Disable CSRF for simple REST API testing
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/admin/**").authenticated() // Require login for admin
                .requestMatchers("/api/student/**").permitAll()   // Public access for students
                .anyRequest().permitAll()
            )
            .httpBasic(basic -> {}); // Use Basic Auth for simplicity

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}