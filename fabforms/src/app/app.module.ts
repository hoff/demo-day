import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SignupReactiveComponent } from './signup-reactive/signup-reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupReactiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
