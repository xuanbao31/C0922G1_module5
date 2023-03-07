import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.css']
})
export class ChangeColorComponent implements OnInit {
  color = 'red';

  constructor() {
  }

  ngOnInit(): void {
  }

  changeColorName(target: any) {
    this.color = target.value;
  }

}
