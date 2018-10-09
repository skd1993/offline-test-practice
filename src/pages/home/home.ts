import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestPage } from '../test/test';
import { Validators, FormControl, FormGroup } from '@angular/forms';
 
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	
	private settingsForm: FormGroup;

	constructor(public navCtrl: NavController) {
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
		this.navCtrl.push(TestPage, {
			settings: this.settingsForm.value
		});
	}

}
