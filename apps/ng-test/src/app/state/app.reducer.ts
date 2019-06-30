import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { commentReducer, CommentState } from './comment/comment.reducer';
import { translationReducer, TranslationState } from './translation/translation.reducer';

// tslint:disable-next-line
export interface AppState {
  comment: CommentState;
  translation?: TranslationState;
}

export const reducers: ActionReducerMap<AppState> = {
  comment: commentReducer,
  translation: translationReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
