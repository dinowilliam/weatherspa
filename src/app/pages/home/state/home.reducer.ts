import { createReducer, Action } from "@ngrx/store"

export interface HomeState {

}

export const homeInitialState: HomeState = {
    text: 'Curitiba'
}

const reducer = createReducer(
    homeInitialState,
);

export function homeReducer(state: HomeState | undefined, action: Action): HomeState{
    return reducer(state, action)
}