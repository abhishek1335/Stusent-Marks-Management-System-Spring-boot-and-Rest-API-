package com.jntuk.marks.service;

import com.jntuk.marks.model.SemesterResult;
import com.jntuk.marks.model.Student;
import com.jntuk.marks.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResultService {

    @Autowired
    private StudentRepository studentRepository;

    public Student getStudentResult(String rollNumber) {
        Student student = studentRepository.findById(rollNumber)
                .orElseThrow(() -> new RuntimeException("Student not found"));
        
        // Calculate SGPA/CGPA dynamically if not stored
        calculateMetrics(student);
        
        return student;
    }

    private void calculateMetrics(Student student) {
        List<SemesterResult> results = student.getResults();
        int totalCredits = 0;
        double totalPoints = 0;
        int backlogs = 0;

        for (SemesterResult res : results) {
            if ("F".equals(res.getGrade()) || "ABSENT".equals(res.getGrade())) {
                backlogs++;
            }
            // Logic for points based on grade (O=10, S=9, A=8...)
            // totalPoints += (gradePoint * res.getCredits());
            // totalCredits += res.getCredits();
        }
        
        student.setTotalBacklogs(backlogs);
        // student.setCurrentCgpa(totalPoints / totalCredits);
    }
}