import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';
 

@Component({
  selector: 'app-add-module-questions',
  templateUrl: './add-module-questions.component.html',
  styleUrls: ['./add-module-questions.component.css']
})
export class AddModuleQuestionsComponent implements OnInit {

  QId: any;
  qTitle:any;
  questions={
    quiz:{
      // questionId:''
    },
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
  };

  constructor(private _router:ActivatedRoute,private _question:QuestionsService){}
  ngOnInit(): void {
    this.QId=this._router.snapshot.params['qid'];
    this.qTitle=this._router.snapshot.params['title'];
    // this.questions.quiz['questionId']=this.QId;
  }
  formSubmit(){
     if(this.questions.content.trim()=='' || this.questions.content==null){
      return;
     }
     if(this.questions.option1.trim()=='' || this.questions.option1==null){
      return;
     }
     if(this.questions.option2.trim()=='' || this.questions.option2==null){
      return;
     }
     if(this.questions.option3.trim()=='' || this.questions.option3==null){
      return;
     }
     if(this.questions.option4.trim()=='' || this.questions.option4==null){
      return;
     }

     //form submit
     this._question.addQuestionsInmodule(this.questions).subscribe(
      (data)=>{
        Swal.fire("Success","Question Added","success")
      },
      (error)=>{
        Swal.fire("Error","Something went wrong to add question","error")
      }
     )
  }

}
