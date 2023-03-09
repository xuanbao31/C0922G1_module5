import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomerService} from "../../../service/customer.service";
import {CustomerTypeService} from "../../../service/customer-type.service";
import {Customer} from "../../../model/customer";
import {CustomerType} from "../../../model/customer-type";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customer: Customer[] = [];
  customerType: CustomerType[] = [];
  customerForm: FormGroup;

  constructor(httpClient: HttpClient,
              customerService: CustomerService,
              customerTypeService: CustomerTypeService,
              router:Router) {


  }

  ngOnInit(): void {
  }

}
