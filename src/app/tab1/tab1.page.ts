import { Component, OnInit  } from '@angular/core';
import { lessonData } from '../data/lessons.js';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  lessons = lessonData;
  state = 'select';
  id = 0;
  answer='none';
  selectedAnswer = 0;

  constructor()
  {}

  selected(id: number): void {
    this.state = 'lesson';
    this.id = id;
    //may need more magic code
  }

  back(): void{
    this.state = 'select';
    this.answer = 'none'
    this.id = 0;
    this.selectedAnswer = 0;
  }

  check(): void {
    console.log(typeof(this.selectedAnswer));
    console.log(typeof(this.lessons[this.id].comprehension.correct));
    if (this.selectedAnswer === this.lessons[this.id].comprehension.correct.toString()) {
      this.answer = 'correct'
    } else {
      this.answer = 'wrong'
    }
  }

  next(): void{
    this.id += 1;
    this.answer = 'none';
    this.selectedAnswer = 0;
  }
}
