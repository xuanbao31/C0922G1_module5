import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgessBarComponent } from './progess-bar/progess-bar.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgessBarComponent,
    CountDownTimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
