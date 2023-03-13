import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer";
import {CustomerType} from "../../../model/customer-type";
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../../service/customer.service";
import {CustomerTypeService} from "../../../service/customer-type.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer: Customer = {};
  customerType: CustomerType[] = [];
  updateForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    date: new FormControl(),
    gender: new FormControl(),
    idCard: new FormControl(),
    phoneNumber: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    customerType: new FormControl(),
  })
  id: number = 0;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = parseInt(<string>paramMap.get("id"))
      if (this.id != null) {
        this.getCustomer(this.id);
      }
    })
  }

  ngOnInit(): void {
  }

  private getCustomer(id: number) {
    console.log(this.customerService.findById(id).subscribe(next => {
      console.log(next);
      this.updateForm.patchValue(next);
    }))
  }

  update(id: number) {
    if (this.updateForm != undefined && id != null) {
      const customer = this.updateForm.value;
      console.log(customer);
      this.customerService.updateCustomer(id, customer).subscribe(() => {
        if (this.updateForm != undefined) {
          this.updateForm.reset();
          this.router.navigateByUrl("");
        }
      }, error => {
        this.router.navigateByUrl("/update")
      })
    }
  }
}
