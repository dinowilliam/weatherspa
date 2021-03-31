import { createReducer, Action, on } from "@ngrx/store"

import * as fromHomeActions from './home.actions'

export interface HomeState {
    text: string;
    text2: string
}

export const homeInitialState: HomeState = {
    text: 'Curitiba',
    text2: 'QWE'
}

const reducer = createReducer(
    homeInitialState,
    on(fromHomeActions.changeText, (state, { text } ) => ({
        ...state,
        text,
    })),
);

export function homeReducer(state: HomeState | undefined, action: Action): HomeState{
    return reducer(state, action)
}