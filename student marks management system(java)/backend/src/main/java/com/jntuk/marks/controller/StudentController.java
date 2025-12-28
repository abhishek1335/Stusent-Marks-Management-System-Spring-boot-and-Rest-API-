package com.jntuk.marks.controller;

import com.jntuk.marks.model.Student;
import com.jntuk.marks.service.ResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/student")
public class StudentController {

    @Autowired
    private ResultService resultService;

    @GetMapping("/{rollNumber}")
    public ResponseEntity<Student> getResult(@PathVariable String rollNumber) {
        try {
            Student student = resultService.getStudentResult(rollNumber);
            return ResponseEntity.ok(student);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}