import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, Navbar, NavParams, ToastController } from 'ionic-angular';
import { CalculatePage } from '../calculate/calculate';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {

  @ViewChild(Navbar) navBar: Navbar;

  settings

  o = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

  answers = {}

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.settings = this.navParams.get('settings');
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
            this.answers = {}
            this.navCtrl.pop();
          }
        },
        {
          text: 'Finish test and calculate marks',
          handler: () => {
			if(Object.keys(this.answers).length !== 0){
				this.navCtrl.push(CalculatePage, {
					responseData: this.answers,
					questions: this.settings.questions,
					positive: this.settings.positive,
					negative: this.settings.negative,
					answered: Object.keys(this.answers).length
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
	// this.answers[x] = { 'res': i }
	this.answers[x] = {'res': i}
  }

}
