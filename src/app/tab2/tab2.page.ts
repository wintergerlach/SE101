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

  constructor() {}
  selected(id: number):void {
    this.state = "test";
    this.id = id;
    console.log(this.id);
  }

  back(): void{
    this.state = "select";
  }

}
