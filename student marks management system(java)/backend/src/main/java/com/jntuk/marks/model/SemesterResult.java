package com.jntuk.marks.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class SemesterResult {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String subjectCode;
    private String subjectName;
    private int internalMarks;
    private int externalMarks;
    private int totalMarks;
    private String grade;
    private int credits;
    private String semester; // e.g., "3-1", "2-2"

    @ManyToOne
    @JoinColumn(name = "roll_number")
    private Student student;
}