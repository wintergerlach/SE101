import { Component, OnInit  } from '@angular/core';
import {lessons} from '../data/lessons.js';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  lessons = lessons.lessons;
  state = 'select'
  id = 0
  answer=""
  constructor()
  {}

  selected(id: number):void {
    this.state = "lesson";
    this.id = id;
    //may need more magic code
  }

  back(): void{
    this.state = "select";
  }
}
