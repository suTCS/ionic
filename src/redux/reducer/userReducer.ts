import { User } from "../../model/user";
import * as listuseractions from '../action/userAction';

export type Action = listuseractions.Actions;

export const initialState: AppState = {
    entities: [],
    loading: false,
    loaded: true
}

export interface AppState {
    entities: User[],
    loading: boolean,
    loaded: boolean
}

export function listuserReducer(state: AppState = initialState, action: Action) {
  
    switch (action.type) {
        case listuseractions.GET_USERS:
          return {...state, loading: true , loaded: false};
        case listuseractions.GET_USERS_SUCCESS:
          return {...state, entities: action.payload, loading: false,  loaded: true};
        case listuseractions.GET_USERS_FAIL:
        return {...state, entities: [], loading: false, loaded: true};

        default: {
            return state; }
        }
    }
      
export const getUsers = (state: AppState) => state.entities;
export const getLoading = (state: AppState ) => state.loading;
export const getLoaded = (state: AppState ) => state.loaded;