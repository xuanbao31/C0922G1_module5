import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormDangKiComponent } from './form-dang-ki/form-dang-ki.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FormDangNhapComponent } from './form-dang-nhap/form-dang-nhap.component';

@NgModule({
  declarations: [
    AppComponent,
    FormDangKiComponent,
    FormDangNhapComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
