import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  @Input() pageInfo: any = {};
  @Input() pageGroup: any = {};

  @Output() groupNumber = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    console.log(this.pageInfo, "paging")
  }

  ngOnChanges(changes: SimpleChanges) {
    
}


  perPage(e:any) {
    // console.log(e.target.value, "YEH!")
    this.groupNumber.emit(e.target.value)

  }
}
