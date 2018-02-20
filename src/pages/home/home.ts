import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { AddingPage } from '../adding/adding';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('userName') uname;
  @ViewChild('passWord') pword;

  constructor(public navCtrl: NavController) {

  }

  openPage() {
    this.navCtrl.push('adding-page');
  }

  signIn() {
    //console.log(this.uname.value, this.pword.value);
    //this.navCtrl.push(LoginPage);
    
  }
}
