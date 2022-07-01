import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.sass']
})
export class UnitComponent implements OnInit {

  @Input() unit: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
