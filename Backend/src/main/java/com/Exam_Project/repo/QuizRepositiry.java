package com.Exam_Project.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Exam_Project.Modals.exam.Quiz;

public interface QuizRepositiry extends JpaRepository<Quiz, Long> {

}
