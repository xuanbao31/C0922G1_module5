import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BusService} from "../../service/bus.service";
import {BusTypeService} from "../../service/bus-type.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BusType} from "../../model/bus-type";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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
  id = 0;

  constructor(private busService: BusService,
              private busTypeService: BusTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // tslint:disable-next-line:radix
      this.id = parseInt(<string>paramMap.get('id'));
      if (this.id !== null) {
        this.getBus(this.id);
      }
    });
  }

  ngOnInit(): void {
    this.busTypeService.getAllBusType().subscribe(next => {
      this.busType = next;
    })
  }

  getBus(id: number) {
    return this.busService.findById(id).subscribe(next => {
      this.busForm.patchValue(next);
    });
  }

  comparaFn(o1: BusType, o2: BusType): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  update(id: number) {
    if (this.busForm != undefined && id != null) {
      const bus = this.busForm.value;
      console.log(bus);
      this.busService.updateBus(id, bus).subscribe(() => {
        if (this.busForm != undefined) {
          this.busForm.reset();
          alert("edit complete");
          this.router.navigateByUrl("");
        }
      }, error => {
        this.router.navigateByUrl("/edit")
      })
    }
  }
}
