import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import {Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../model/user';
//import { catchError, map, tap } from 'rxjs/operators';
//import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
//import {Http} from '@angular/http';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {
  private todos = [];
  private baseUrl: string = 'http://localhost:9090/api';
  //private headers = new Headers({'Content-Type': 'application/json'});
  //private options = new RequestOptions({headers: this.headers});

  constructor(public http: HttpClient) {
    
  }
  getTodos() {
    return this.todos;
  }

  addTodo(todo) {
    return this.todos.push(todo);
  }

  deletetodo(index) {
    return this.todos.splice(this.todos.indexOf(index), 1);
  }

  editTodo (todo, index) {
    return this.todos[index] = todo;
  }

  getUsers(): Observable<User[]>  {
    
            return this.http.get(this.baseUrl + '/users')
            //.map((response: Response) => response.json())  //angular 5 removes map(res => res.json())
            .catch(this.errorHandler);
  }
  private errorHandler(err: Response) {
    //console.error(err);
    return Observable.throw(err || 'Some error on Server occured');
  }
}
