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
  @Output() inputNumber = new EventEmitter()

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {}

  // THIS FUNCTION WILL SEND THE SELECTED
  // PER PAGE DROPDOWN NUMBER TO INITIATE DATA RELOADING
  perPage(e:any) {
    this.groupNumber.emit(e.target.value)
  }

  // THIS FUNCTION WILL SEND THE CORRECT NUMBER BASED ON
  // THE ARROW BEING CLICKED ON AND CURRENT PAGE TO INITIATE DATA RELOADING
  arrowClick(direction: string, current: number) {
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

  // THIS FUNCTION WILL SEND THE CORRECT NUMBER BASED ON
  // THE CURRENT PAGE NUMBER BEING INPUTTED TO INITIATE DATA RELOADING
  pageInput(e:any) {
    this.inputNumber.emit(e.target.value)
  }

  // THIS FUNCTION WILL FORBID THE USER FROM TYPING IN
  // A CURRENT PAGE NUMBER THAT IS GREATER THAN THE TOTAL PAGE COUNT 
  checkVal(e:any) {
    if (Number(e.target.value) > this.pageInfo["total_pages"]) {
      e.preventDefault()
      e.target.value = this.pageInfo["current_page"]
    }
  }
}
