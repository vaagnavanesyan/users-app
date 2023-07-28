import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {AddUserModalComponent} from './components/add-user-modal';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AddUserModalComponent
  ],
  imports: [
    BrowserModule,
    AkitaNgDevtools.forRoot(),
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
