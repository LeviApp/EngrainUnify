import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-unitlist',
  templateUrl: './unitlist.component.html',
  styleUrls: ['./unitlist.component.sass']
})
export class UnitlistComponent implements OnInit, OnChanges {

  @Input() unitInfo: any = {};
  @Input() category: string = "";

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {}

}
