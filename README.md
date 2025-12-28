Student Marks Management System (java, spring boot, React.js)(v2.0) 🎓

A full-stack, enterprise-grade application designed to automate the extraction and management of student examination results from JNTUK PDF releases. This version features a Spring Boot REST API backend and a React.js frontend with Tailwind CSS.

🚀 Key Features

PDF Data Extraction: Utilizes Apache PDFBox and Regex to parse complex JNTUK result PDFs and store data in a structured SQL format.

Dual Dashboard System:

Faculty/Admin: Secure dashboard to upload semester PDFs and manage the student database.

Student: Real-time search portal to view marks, subject-wise grades, and automated calculation of SGPA/CGPA.

Secure Authentication: Admin access protected by Spring Security with BCrypt password hashing.

Performance Metrics: Automatic calculation of active backlogs and cumulative grade point averages.

Responsive UI: A modern, mobile-friendly interface built with React and Tailwind CSS.

🛠️ Technology Stack

Backend (Java)

Framework: Spring Boot 3.x

Security: Spring Security (REST Authentication)

Database: MySQL / Spring Data JPA

PDF Engine: Apache PDFBox

Frontend (JavaScript)
Library: React.js 18

Styling: Tailwind CSS

API Client: Axios

Icons: Lucide React

⚙️ Installation & Setup
1. Database Setup
   
Create a MySQL database named student_marks_db.

Update backend/src/main/resources/application.properties with your MySQL username and password.

2. Backend Setup

cd backend

mvn clean install

mvn spring-boot:run

3. Frontend Setup

cd frontend

npm install

npm run dev

📖 Usage

Admin Login: Access the Faculty Dashboard using the default credentials (provided in data.sql).

Upload PDF: Select a JNTUK Result PDF. The system will parse every student record and populate the SQL tables.

Student Search: On the home page, enter a Roll Number (e.g., 19BQ1A0501) to see a detailed performance breakdown.


