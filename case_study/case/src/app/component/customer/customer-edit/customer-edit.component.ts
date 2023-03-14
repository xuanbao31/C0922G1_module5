import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer";
import {CustomerType} from "../../../model/customer-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
    name: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    customerType: new FormControl('', [Validators.required]),
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
    this.getAllCustomerType();
  }
  getAllCustomerType(){
    this.customerTypeService.getAllCustomerType().subscribe(next=>{
      console.log(next);
      this.customerType=next;
    })
  }

  private getCustomer(id: number) {
    console.log(this.customerService.findById(id).subscribe(next => {
      console.log(next);
      this.updateForm.patchValue(next);
    }))
  }
  comparaFn(o1: CustomerType, o2: CustomerType): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
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
