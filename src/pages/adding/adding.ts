import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the AddingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'adding-page',
  segment: 'added'  //setting URL
})
@Component({
  selector: 'page-adding',
  templateUrl: 'adding.html',
})
export class AddingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad AddingPage');
  // }

  goBack() {
    this.navCtrl.push('AddingDetailPage');
  }
}
