import {Component, OnInit} from '@angular/core';
import {RentType} from "../../../model/rent-type";
import {FacilityType} from "../../../model/facility-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Facility} from "../../../model/facility";
import {FacilityService} from "../../../service/facility.service";
import {Router} from "@angular/router";
import {FacilityTypeService} from "../../../service/facility-type.service";
import {RentTypeService} from "../../../service/rent-type.service";

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  facility:Facility[]=[];
  rentType: RentType[] = [];
  facilityType: FacilityType[] = [];
  facilityForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
    maxPeople: new FormControl('', [Validators.required]),
    standardRoom: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    poolArea: new FormControl('', [Validators.required]),
    floor: new FormControl('', [Validators.required]),
    facilityFree: new FormControl('', [Validators.required]),
    facilityType: new FormControl('', [Validators.required]),
    rentType: new FormControl('', [Validators.required]),

  });

  constructor(private facilityService:FacilityService,
              private facilityTypeService:FacilityTypeService,
              private rentTypeService:RentTypeService,
              private router:Router) {

  }

  ngOnInit(): void {
    this.facilityTypeService.getAll().subscribe(next => {
      this.facilityType = next
    })
    this.rentTypeService.getAll().subscribe(next => {
      this.rentType = next
    })
  }

  submit(){
    const facility = this.facilityForm.value;
    console.log(facility);
    this.facilityService.saveFacility(facility).subscribe(next => {
      console.log(next);
      this.router.navigateByUrl("/");
      alert("Create complete");
    })
  }
}
