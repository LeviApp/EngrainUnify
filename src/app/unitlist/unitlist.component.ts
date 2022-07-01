import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-unitlist',
  templateUrl: './unitlist.component.html',
  styleUrls: ['./unitlist.component.sass']
})
export class UnitlistComponent implements OnInit {

  @Input() unitInfo: any = {};
  @Input() category: string = "";

  public total: any = {};
  public unitList: any = [];

  constructor() { }

  ngOnInit(): void {
    this.total = this.unitInfo["total_count"];
    this.unitList = this.unitInfo["data"];

  }

}
