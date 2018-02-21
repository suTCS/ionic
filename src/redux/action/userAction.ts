import { Action } from '@ngrx/store';
import { User } from '../../model/user';

export interface PayloadAction extends Action {payload: string};

export const GET_USERS = '[Gett] Users';
export const GET_USERS_SUCCESS = '[Gett] Users success';
export const GET_USERS_FAIL = '[Get] users fail';

  export class GetUsers implements Action {
    readonly type = GET_USERS;
    consturctor() {}
  }
  
  export class GetUsersSuccess implements Action  {
    readonly type = GET_USERS_SUCCESS;
    constructor(public payload?: User[]) {}
  }
  
  export class GetUsersFail implements Action  {
    readonly type = GET_USERS_FAIL;
    constructor(public payload: any) {}
  }

  export type Actions
  = GetUsers
  | GetUsersSuccess
  | GetUsersFail;