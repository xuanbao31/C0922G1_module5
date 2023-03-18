import {Component, OnInit} from '@angular/core';
import {Bus} from '../../model/bus';
import {BusType} from '../../model/bus-type';
import {BusService} from '../../service/bus.service';
import {BusTypeService} from '../../service/bus-type.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  busList: Bus[] = [];
  busType: BusType[] = [];
  item: Bus = {};

  constructor(private busService: BusService,
              private busTypeService: BusTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.busService.getAllBus().subscribe(next => {
      this.busList = next;
    });
  }

  delete(id: number) {
    this.busService.deleteBus(this.item.id).subscribe(next => {
      alert('delete Complete');
      this.ngOnInit();
    });
  }
}
