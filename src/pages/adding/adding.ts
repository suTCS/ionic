import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo';
import { SampleData } from '../../model/data';


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

  private datas: SampleData[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private todoService: TodoProvider) {
    
  }

  ionViewDidLoad() {
    // this.todoService.getUser2().subscribe((datas) => {
    //   console.log(datas);
    //   this.datas = datas;
    // },
    //   (error) => {
    //   console.log(error);
    // },
    // () => {
    //   //console.log('success');
    // });
  }

  goBack() {
    this.navCtrl.push('AddingDetailPage');
  }
}
