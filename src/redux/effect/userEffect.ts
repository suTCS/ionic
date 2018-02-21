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

export type Action = listuseractions.Actions;

@Injectable()
export class ListuserEffects {

  constructor(private actions$: Actions, private todoService: TodoProvider) {}

  @Effect()
  GetUsers$: Observable<Action> = this.actions$
  .ofType(listuseractions.GET_USERS)  
  .switchMap(() => this.todoService.getUsers())
  .map(users => new listuseractions.GetUsersSuccess(users))
  .catch((err) => of(new listuseractions.GetUsersFail({error: err.message})));
}