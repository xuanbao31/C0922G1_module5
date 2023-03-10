import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-dang-nhap',
  templateUrl: './form-dang-nhap.component.html',
  styleUrls: ['./form-dang-nhap.component.css']
})
export class FormDangNhapComponent implements OnInit {
  rfCustomer: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.rfCustomer = new FormGroup({
      email1: new FormControl('', [Validators.required, Validators.email]),
      passWord: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })

  }
}
