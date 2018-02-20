import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the AddingDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  defaultHistory: ['adding-page']
})
@Component({
  selector: 'page-adding-detail',
  templateUrl: 'adding-detail.html',
})
export class AddingDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad AddingDetailPage');
  // }

  goHome() {
    //this.navCtrl.push('adding-page');

    this.navCtrl.setRoot(HomePage);  //By default, pages are cached and left in the DOM if they are navigated away from but still in the navigation stack (the exiting page on a push() for example). They are destroyed when removed from the navigation stack (on pop() or setRoot()).
  }
}
