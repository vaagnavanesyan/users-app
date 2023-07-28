import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {AddUserModalComponent} from "./components/add-user-modal";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AddUserModalComponent
  ],
  imports: [
    BrowserModule,
    AkitaNgDevtools.forRoot(),
    BrowserAnimationsModule,
    MatTableModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatTooltipModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
