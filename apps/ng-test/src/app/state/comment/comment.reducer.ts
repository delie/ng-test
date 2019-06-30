import { Action, ActionReducer, createReducer } from '@ngrx/store';
import { Comment } from '../../shared/models/Comment.interface';

export interface CommentState {
  list: Comment[];
}

export const initialCommentState: CommentState = {
  list: [{ content: 'Test comment 1' }, { content: 'Test comment 2' }]
};

const reducer: ActionReducer<CommentState, Action> = createReducer(initialCommentState);

export const commentReducer: any = (state: CommentState, action: Action) => reducer(state, action);
