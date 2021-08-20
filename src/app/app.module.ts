import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {MyCounterComponent} from './my-counter/my-counter.component';
import {counterReducer} from './counter.reducer';
import {extStoreDevtoolsModule} from "./build-specifics/extStoreDevtoolsModule";

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({count: counterReducer}),
    extStoreDevtoolsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
