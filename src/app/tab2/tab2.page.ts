import { Component } from '@angular/core';
import {cert} from '../data/tests.js';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  certs = cert.tests;
  state = 'select'
  id = 0
  questionId = 0;
  selectedAnswer = 0;
  answers = [];
  results = 0;
  message = ""
  

  constructor() {}
  selected(id: number):void {
    this.state = "test";
    this.id = id;
    console.log(this.id);
  }

  back(): void{
    this.state = "select";
    this.answers = [];
    this.results = 0;
    this.selectedAnswer = 0;
    this.message = "";
    this.questionId = 0;
  }
  next(): void{
    this.answers.push(this.selectedAnswer);
    this.questionId += 1;
    this.selectedAnswer = 0;
  }

  check(): void{
    this.answers.push(this.selectedAnswer);
    this.state = "results";
    //ADD CODE TO COUNT CORRECT ANSWERS
    console.log(this.answers)
    if (this.results/this.answers.length > 0.79){
      this.message = "good";
    } else {
      this.message = "bad";
    }
    
  }
}
