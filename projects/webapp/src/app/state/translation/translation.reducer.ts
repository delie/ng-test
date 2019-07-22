import { Action, ActionReducer, createReducer } from '@ngrx/store';

export interface TranslationState {
  language: string;
  availableLanguages: string[];
}

export const initialState: TranslationState = {
  language: 'en',
  availableLanguages: ['en', 'fr']
};

const reducer: ActionReducer<TranslationState, Action> = createReducer(initialState);

export const translationReducer: any = (state: TranslationState | undefined, action: Action) => reducer(state, action);
