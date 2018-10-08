import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestPage } from '../test/test';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  questions: number;
  options: number;
  minutes: number;
  positive: number;
  negative: number;

  constructor(public navCtrl: NavController) {
    this.questions = 10;
    this.options = 4; //ABCD
    this.minutes = 20;
    this.positive = 1;
    this.negative = 1; 
  }

  ngOnInit() {
    
  }

  startTest() {
    const questions = this.questions
    const options = this.options 
    const minutes = this.minutes;
    const positive = this.positive;
    const negative = this.negative;
    this.navCtrl.push(TestPage, {
      questions,
      options,
      minutes,
      positive,
      negative
    });
  }

}
