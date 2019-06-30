import { Action, createReducer, on } from '@ngrx/store';


export interface State {

}

export const initialState: State = {

};

const commentReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return commentReducer(state, action);
}
