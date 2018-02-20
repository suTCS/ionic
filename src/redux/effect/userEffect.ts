import * as listuseractions from '../action/userAction';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TodoProvider } from '../../providers/todo/todo';
import {Effect, Actions} from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Action} from '@ngrx/store';
import {of} from 'rxjs/observable/of';

//import {HttpClient} from '@angular/common/http';
//import {Subject} from 'rxjs/Subject';

export type Action = listuseractions.Actions;

@Injectable()
export class ListuserEffects {

  constructor(private actions$: Actions, private todoService: TodoProvider) {}

  @Effect()
  GetUsers$: Observable<Action> = this.actions$
  .ofType(listuseractions.GET_USERS)  
  //.do(val => console.log("action received", val))
  //.debug ("action received")
  .switchMap(() => this.todoService.getUsers())
  //.do(val => console.log("data received via the HTTP request", val)) 
  //.debug("data received via the HTTP request")
  .map(users => new listuseractions.GetUsersSuccess(users))
  .catch((err) => of(new listuseractions.GetUsersFail({error: err.message})));
}