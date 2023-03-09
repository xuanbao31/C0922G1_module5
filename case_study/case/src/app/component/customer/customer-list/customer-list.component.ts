import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer";
import {CustomerService} from "../../../service/customer.service";
import {CustomerTypeService} from "../../../service/customer-type.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];
  item: Customer = {};
  page: number = 0;


  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAllCustomer().subscribe(next => {
      console.log(next);
      this.customerList = next;
    })
  }


  delete(id: number) {
     this.customerService.deleteCustomer(this.item.id).subscribe(next=>{
      alert("Delete Complete");
     this.ngOnInit();
     })
  }

}
