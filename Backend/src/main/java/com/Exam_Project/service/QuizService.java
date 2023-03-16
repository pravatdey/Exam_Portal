package com.Exam_Project.service;

import java.util.Set;

import com.Exam_Project.Modals.exam.Quiz;

public interface QuizService {
	
  public Quiz addQuiz(Quiz quiz);
  
  public Quiz updateQuiz(Quiz quiz);
  
  public Set<Quiz> getQuizzes();
  
  public Quiz getQuiz (Long quizId);
  
  public void deleteQuiz(Long quizId);
}
