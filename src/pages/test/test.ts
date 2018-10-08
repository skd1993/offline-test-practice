import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, Navbar, NavParams } from 'ionic-angular';
import { CalculatePage } from '../calculate/calculate';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {

  @ViewChild(Navbar) navBar: Navbar;

  questions: number;
  options: number;
  minutes: number;
  positive: number;
  negative: number;

  o = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

  answers = []

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
    this.questions = this.navParams.get('questions');
    this.options = this.navParams.get('options');
    this.minutes = this.navParams.get('minutes');
    this.positive = this.navParams.get('positive');
    this.negative = this.navParams.get('negative');
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
    this.setBackButtonAction()
  }

  setBackButtonAction() {
    this.navBar.backButtonClick = () => {
      return this.showConfirm()
    }
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Exit test',
      message: 'Do you want to exit the test?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
            this.navCtrl.push(CalculatePage);
          }
        }
      ]
    });
    confirm.present();
  }

  mcqAnswer(x, i) {
    this.answers[x] = { 'res': i }
  }

}
