package com.Exam_Project.service.impl;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Exam_Project.Modals.exam.Quiz;
import com.Exam_Project.repo.QuizRepositiry;
import com.Exam_Project.service.QuizService;
@Service
public class QuizServiceImpl  implements QuizService{
	@Autowired
	private QuizRepositiry quizRepositiry;

	@Override
	public Quiz addQuiz(Quiz quiz) {
		// TODO Auto-generated method stub
		return this.quizRepositiry.save(quiz);
	}

	@Override
	public Quiz updateQuiz(Quiz quiz) {
		// TODO Auto-generated method stub
		return this.quizRepositiry.save(quiz);
	}

	@Override
	public Set<Quiz> getQuizzes() {
		// TODO Auto-generated method stub
		return new HashSet<>(this.quizRepositiry.findAll());
	}

	@Override
	public Quiz getQuiz(Long quizId) {
		// TODO Auto-generated method stub
		return this.quizRepositiry.findById(quizId).get();
	}

	@Override
	public void deleteQuiz(Long quizId) {
		// TODO Auto-generated method stub
		
		  
		this.quizRepositiry.deleteById(quizId);
	}

}
