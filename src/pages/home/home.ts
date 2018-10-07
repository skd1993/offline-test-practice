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

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
    // this.options = 4;
    // this.questions = 10;
  }

  startTest() {
    const questions = this.questions
    const options = this.options 
    this.navCtrl.push(TestPage, {
      questions,
      options
    });
  }

}
