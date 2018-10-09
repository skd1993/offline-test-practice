import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { TestPage } from '../test/test';
import { Validators, FormControl, FormGroup } from '@angular/forms';
 
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	
	private settingsForm: FormGroup;
	pageTitle = 'Offline Test Practice'

	constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
	}

	ngOnInit() {
		this.settingsForm  = new FormGroup({
			questions: new FormControl('10', [Validators.required, Validators.min(2)]),
			options: new FormControl('4', [Validators.required, Validators.min(2), Validators.max(10)]),
			positive: new FormControl('1', [Validators.required, Validators.min(1)]),
			negative: new FormControl('1', [Validators.required, Validators.min(0)]),
		})
	}

	startTest() {
		if(this.settingsForm.valid) {
			this.navCtrl.push(TestPage, {
				settings: this.settingsForm.value
			});
		}
		else{
			const toast = this.toastCtrl.create({
				message: 'There is some error in the form',
				duration: 1500
			  });
			  toast.present();
		}
	}

}
