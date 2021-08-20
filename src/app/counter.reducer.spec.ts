import {counterReducer, initialState} from "./counter.reducer";
import {decrement, increment, reset} from "./counter.actions";

describe('Counter reducer', () => {

  it('should return default state on init', () => {
    const emptyAction = {
      type: ''
    };
    const state = counterReducer( initialState, emptyAction);
    expect(state).toEqual(initialState);
  })

  it('should modify counter object on increment', () => {
    const state = counterReducer( initialState, increment);
    expect(state).toEqual({n:1, s: 'go UP'});
  })

  it('should modify counter object on decrement', () => {
    const state = counterReducer( initialState, decrement);
    expect(state).toEqual({n:-1, s: 'go DOWN'});
  })

  it('should return default state on reset', () => {
    const firstStage = counterReducer({n:10, s:''}, increment);
    const state = counterReducer( firstStage, reset);
    expect(state).toEqual(initialState);
  })

})
