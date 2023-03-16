import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http:HttpClient) { }
  public questions(){
    return this._http.get(`${baseUrl}/quiz/`)
  }
  public addQuestion(quiz: any){
    return this._http.post(`${baseUrl}/quiz/`,quiz)
  }
  //detele Question
  public deleteQuestion(qid: any){
    return  this._http.delete(`${baseUrl}/quiz/${qid}`)
  }

  //get the single question
  public getQuestion(qid:any){
    return this._http.get(`${baseUrl}/quiz/${qid}`)
  }

  //update questions
  public updateQuestion(quiz: any){
    return this._http.put(`${baseUrl}/quiz/`,quiz)
  }
}
