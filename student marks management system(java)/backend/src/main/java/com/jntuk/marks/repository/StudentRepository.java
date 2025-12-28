package com.jntuk.marks.repository;

import com.jntuk.marks.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, String> {
    // Custom query to find by roll number if needed, but findById works for @Id
}