import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { authReducer } from '../state/user.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
