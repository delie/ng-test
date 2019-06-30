import { Action, ActionReducer, createReducer } from '@ngrx/store';
import { Comment } from '../../models/Comment.interface';

export interface CommentState {
  list: Comment[];
}

export const initialCommentState: CommentState = {
  list: []
};

const reducer: ActionReducer<CommentState, Action> = createReducer(initialCommentState);

export const commentReducer: any = (state: CommentState, action: Action) => reducer(state, action);
