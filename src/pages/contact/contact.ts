import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { User } from '../../model/user';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/reducer/userReducer';
import * as fromRoot from '../../redux/big-reducer';
import * as listUserActions from '../../redux/action/userAction';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  users$: Observable<User[]>;
  loading$: Observable<boolean>;

  constructor(public navCtrl: NavController, private store: Store<AppState>) {
    this.loading$  = this.store.select(fromRoot.getUsersLoading);
    this.users$ = this.store.select(fromRoot.getUserEntities)
    this.store.dispatch(new listUserActions.GetUsers());
  }

}
