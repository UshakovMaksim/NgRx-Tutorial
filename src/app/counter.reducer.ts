import { Action, createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";

interface iMy {
  n: number,
  s: string
}

const is: iMy = {n:0, s:''}

const _counterReducer = createReducer(
  is,
  on(increment, (state) => ({n: state.n + 1, s: 'go UP'}) ),
  on(decrement, (state) => ({n: state.n - 1, s: 'go DOWN'}) ),
  on(reset, () => ({...is}) )
)

export function counterReducer(state: iMy = {...is}, action: Action) {
  return _counterReducer(state, action);
}
