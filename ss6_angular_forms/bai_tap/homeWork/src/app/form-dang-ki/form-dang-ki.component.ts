import {Component, EventEmitter, OnInit, Output} from '@angular/core';
  import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-dang-ki',
  templateUrl: './form-dang-ki.component.html',
  styleUrls: ['./form-dang-ki.component.css']
})
export class FormDangKiComponent implements OnInit {

  rfCustomer: FormGroup;
  country = [{
    id: 1, name: "Đà Nẵng"
  }, {
    id: 2, name: "Hà Nội"
  }]

  constructor() {
  }

  ngOnInit(): void {
    this.rfCustomer = new FormGroup({
      email1: new FormControl('', [Validators.required, Validators.email]),
      passWord: new FormControl('', [Validators.required, Validators.minLength(6)]),
      conFirmPass: new FormControl('', [Validators.required, Validators.minLength(6)]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])

    })
  }

}
