import {Component, OnInit} from '@angular/core';
import {ShoeService} from "../../../../../../nhap/demo-product/src/app/service/shoe.service";
import {ShoeTypeService} from "../../../../../../nhap/demo-product/src/app/service/shoe-type.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BusType} from "../../model/bus-type";
import {BusService} from "../../service/bus.service";
import {BusTypeService} from "../../service/bus-type.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  busForm: FormGroup = new FormGroup({
    soXe: new FormControl('',[Validators.required]),
    nhaXe: new FormControl('',[Validators.required]),
    diemDi: new FormControl('',[Validators.required]),
    diemDen: new FormControl('',[Validators.required]),
    soDienThoai: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    gioDi: new FormControl('',[Validators.required]),
    gioDen: new FormControl('',[Validators.required]),
    busType: new FormControl(),
  });
  busType: BusType[] = [];
  constructor(private busService: BusService,
              private busTypeService: BusTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.busTypeService.getAllBusType().subscribe(next => {
      this.busType = next;
    })
  }
  submit() {
    const bus = this.busForm.value;
    // @ts-ignore
    this.busService.saveBus(bus).subscribe(next => {
      this.router.navigateByUrl("/");
    })
  }

}
