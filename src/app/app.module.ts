import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberToRomanPipe } from './number-to-roman.pipe';
import { RomanToNumberPipe } from './roman-to-number.pipe';
import { FahrenheitToCelsiusPipe } from './fahrenheit-to-celsius.pipe';
import { AppendGmailPipe } from './append-gmail.pipe';
import { BounceButtonComponent } from './bounce-button/bounce-button.component';
import { ColorChangeComponent } from './color-change/color-change.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NumberToRomanPipe,
    RomanToNumberPipe,
    FahrenheitToCelsiusPipe,
    AppendGmailPipe,
    BounceButtonComponent,
    ColorChangeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
