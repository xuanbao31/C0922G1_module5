import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomerService} from "../../../service/customer.service";
import {CustomerTypeService} from "../../../service/customer-type.service";
import {Customer} from "../../../model/customer";
import {CustomerType} from "../../../model/customer-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
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

  constructor(private httpClient: HttpClient,
              private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
    this.customerForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      customerType: new FormControl('', [Validators.required]),

    });
    this.customerTypeService.getAllCustomerType().subscribe(next => {
      console.log(next);
      this.customerType = next;
    })

  }

  ngOnInit(): void {
  }

  submit() {
    const customer = this.customerForm.value;
    console.log(customer);
    this.customerService.saveCustomer(customer).subscribe(next => {
      console.log(next);
      this.router.navigateByUrl("/");
      alert("Create complete");
    })
  }

}
