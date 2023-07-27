import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {UsersQuery} from "./data/users.query";
import {UsersStore} from "./data/users.store";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AkitaNgDevtools.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
