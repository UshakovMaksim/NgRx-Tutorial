import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent {

  count$: Observable<string>;

  constructor(private store: Store<{count:string}>) {
    this.count$ = store.select('count');
  }

  inc() {
    this.store.dispatch(increment());
  }

  dec() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset())
  }
}
