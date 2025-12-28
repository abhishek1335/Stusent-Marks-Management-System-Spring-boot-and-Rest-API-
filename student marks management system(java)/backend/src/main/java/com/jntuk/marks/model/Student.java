package com.jntuk.marks.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Data
public class Student {
    @Id
    private String rollNumber; // Acts as the unique ID
    private String name;
    private String branch;
    
    // For CGPA/SGPA Calculation
    private double currentCgpa;
    private int totalBacklogs;

    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<SemesterResult> results;
}