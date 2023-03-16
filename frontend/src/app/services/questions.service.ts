import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private _http:HttpClient) { }
  public getQuestionsOfMOdeule(qid:any){
    return this._http.get(`${baseUrl}/question/quiz/${qid}`)
  }
  //add question
  public addQuestionsInmodule(questions: any){
    return this._http.post(`${baseUrl}/question/`,questions)
  }
   //delete question
   public deleteQuestion(questionId: any){
    return this._http.delete(`${baseUrl}/question/${questionId}`);
   }
}
