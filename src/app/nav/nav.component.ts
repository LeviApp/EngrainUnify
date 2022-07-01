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
  @Output() arrowTime = new EventEmitter()

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

  arrowClick(direction: string, current: number) {
    console.log(direction, current, this.pageInfo["total_pages"])
    if (direction === "right" && current !== this.pageInfo["total_pages"]) {
      this.arrowTime.emit(current+1)
    }
    else if (direction === "right" && current === this.pageInfo["total_pages"]) {
      this.arrowTime.emit(1)
    }

    else if (direction === "left" && current !== 1) {
      this.arrowTime.emit(current-1)
    }
    else if (direction === "left" && current === 1) {
      this.arrowTime.emit(this.pageInfo["total_pages"])
    }

  }
}
