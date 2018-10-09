import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Navbar, AlertController } from 'ionic-angular';

@Component({
    selector: 'page-calculate',
    templateUrl: 'calculate.html'
})
export class CalculatePage {

    @ViewChild(Navbar) navBar: Navbar;
    responseData;
    questions: number;
    answered: number;
    objectKeys = Object.keys;
    positive: number;
    negative: number;
    total: number;
    right: number;
    wrong: number;
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
        this.responseData = this.navParams.get('responseData');
        this.questions = this.navParams.get('questions');
        this.answered = this.navParams.get('answered');
        this.positive = this.navParams.get('positive');
        this.negative = this.navParams.get('negative');
        this.right = 0;
        this.wrong = this.answered;
        this.total = (-1)*this.wrong*this.negative;
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
            title: 'Go back to home?',
            message: 'You will be returned to home page, all data will be lost',
            buttons: [
              {
                text: 'Yes',
                handler: () => {
                    this.total = 0;
                    this.right = 0;
                    this.wrong = this.answered;
                    this.responseData = {}
                    this.navCtrl.popToRoot();
                }
              },
              {
                text: 'No',
                role: 'cancel',
                handler: () => {
                }
              }
            ]
        });
        confirm.present();
    }

    toggle(key) {
        if(this.responseData[key].score === undefined || this.responseData[key].score === false) {
            this.responseData[key].score = true;
            this.right++;
            if(this.wrong > 0) this.wrong--;
        }
        else {
            this.responseData[key].score = false;
            this.wrong++;
            this.right--;
        }
        this.total = this.positive*this.right - this.negative*this.wrong;
    }

}
