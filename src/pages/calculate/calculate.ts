import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Navbar } from 'ionic-angular';

@Component({
    selector: 'page-calculate',
    templateUrl: 'calculate.html'
})
export class CalculatePage {

    @ViewChild(Navbar) navBar: Navbar;
    responseData;
    
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.responseData = this.navParams.get('responseData');
    }

    ngOnInit() {
    }

}
