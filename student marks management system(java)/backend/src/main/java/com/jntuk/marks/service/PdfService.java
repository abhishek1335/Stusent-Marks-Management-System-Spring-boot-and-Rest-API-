package com.jntuk.marks.service;

import com.jntuk.marks.model.SemesterResult;
import com.jntuk.marks.model.Student;
import com.jntuk.marks.repository.StudentRepository;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;

@Service
public class PdfService {

    @Autowired
    private StudentRepository studentRepository;

    public String parseAndSave(MultipartFile file) throws IOException {
        PDDocument document = PDDocument.load(file.getInputStream());
        PDFTextStripper stripper = new PDFTextStripper();
        String text = stripper.getText(document);
        document.close();

        // LOGIC: Parse 'text' line by line to extract Roll No, Subjects, Marks
        // This is highly dependent on the JNTUK PDF format.
        // Below is a pseudo-code example:
        
        /*
        String[] lines = text.split("\n");
        for(String line : lines) {
            if(line.contains("Roll Number Pattern")) {
                Student s = new Student();
                s.setRollNumber(extractedRollNo);
                // Extract marks and add to s.setResults(...)
                studentRepository.save(s);
            }
        }
        */
        
        return "File parsed successfully. Data text length: " + text.length();
    }
}