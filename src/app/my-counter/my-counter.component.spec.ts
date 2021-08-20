import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCounterComponent } from './my-counter.component';
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {initialState} from "../counter.reducer";
import {By} from "@angular/platform-browser";

describe('MyCounterComponent', () => {
  let component: MyCounterComponent;
  let fixture: ComponentFixture<MyCounterComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCounterComponent ],
      providers: [ provideMockStore({ initialState }) ],
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have button Increment', () => {
    const de = fixture.debugElement.query(By.css('[data-id="btn_increment"]'));
    expect(de).toBeDefined();
  })


});
