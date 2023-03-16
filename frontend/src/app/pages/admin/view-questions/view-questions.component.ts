import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {
  questions: any;
  // result:any;
  constructor(private _quiz: QuestionService) { }
  ngOnInit(): void {
    this._quiz.questions().subscribe(
      (data: any) => {
        this.questions = data;
        console.log(this.questions);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error in Loding data !', 'error');

      }
    )
  }
  deleteQuestion(qid: any) {
    Swal.fire({
      icon: 'info',  
      'title': 'Are you sure?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result: any) => {
      if (result.isConfirmed) {
        this._quiz.deleteQuestion(qid).subscribe(
          (data)=>{
            this.questions=this.questions.filter((question: any)=>question.qid !=qid)
            Swal.fire('Success','Question deleted','success');
          },
          (error)=>{
            Swal.fire('Error','Error in deleting Question','error');
          }
          )
      }
    })


  }

}



