import { Action, createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";

export interface iMy {
  n: number,
  s: string
}

export const initialState: iMy = {n:0, s:''}

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({n: state.n + 1, s: 'go UP'}) ),
  on(decrement, (state) => ({n: state.n - 1, s: 'go DOWN'}) ),
  on(reset, () => ({...initialState}) )
)

export function counterReducer(state: iMy = {...initialState}, action: Action) {
  return _counterReducer(state, action);
}
