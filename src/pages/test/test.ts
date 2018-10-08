import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, Navbar, NavParams, ToastController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, public toastCtrl: ToastController) {
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
      title: 'Exit test?',
      message: 'What do you want to do?',
      buttons: [
        {
          text: 'Go home (progress will be lost)',
          handler: () => {
			this.navCtrl.pop();
          }
        },
        {
          text: 'Finish test and calculate marks',
          handler: () => {
			if(this.answers.length != 0){
				this.navCtrl.push(CalculatePage, {
					responseData: this.answers
				});
			}
            else {
				const toast = this.toastCtrl.create({
					message: 'You have not answered any question',
					duration: 1500
				  });
				  toast.present();
			}
		  }
        }
      ]
    });
	confirm.addButton({
		text: 'Resume test',
		role: 'cancel',
          handler: () => {
		  }
	});
	confirm.present();
  }

  mcqAnswer(x, i) {
    this.answers[x] = { 'res': i }
  }

}
