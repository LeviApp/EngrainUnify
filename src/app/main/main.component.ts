import { Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { EngrainapiService } from '../engrainapi.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit, OnChanges {

  public pageInfo: any = {};
  public pageCurrent: number = 1;
  public pageGroup: number = 100;

  public area1Info: any = {};
  public areaMoreInfo: any = {};


  constructor(private engrainapiService: EngrainapiService) { }

  // THIS FUNCTION WILL FETCH THE INITIAL DATA BASED ON DEFAULT VALUES
  ngOnInit(): void {
    this.engrainapiService.getAllUnits(100, 1).subscribe(data => {
      this.pageInfo = data["pages"];
      this.pageGroup = data["pages"]["per_page"];
      this.area1Info = data["area1units"];
      this.areaMoreInfo = data["areamoreunits"];
    })
  }

  ngOnChanges(changes: SimpleChanges) {}

  // THIS FUNCTION WILL FETCH DATA BASED ON
  // THE PER PAGE COUNT SELECTED IN THE DROPDOWN
  selectingNumber(vals:number) {
    this.engrainapiService.getAllUnits(vals, 1).subscribe(data => {
      this.pageInfo = data["pages"];
      this.pageCurrent = data["pages"]["current_page"];
      this.pageGroup = data["pages"]["per_page"];
      this.area1Info = data["area1units"];
      this.areaMoreInfo = data["areamoreunits"];
    })
  }

  // THIS FUNCTION WILL FETCH DATA BASED ON
  // THE ARROWS BEING CLICKED ON AND CURRENT PAGE NUMBER 
  pagingArrow(vals:number) {
    this.engrainapiService.getAllUnits(this.pageGroup, vals).subscribe(data => {
      this.pageInfo = data["pages"];
      this.pageCurrent = data["pages"]["current_page"];
      this.pageGroup = data["pages"]["per_page"];
      this.area1Info = data["area1units"];
      this.areaMoreInfo = data["areamoreunits"];
    })
  }

  // THIS FUNCTION WILL FETCH DATA BASED ON
  // THE CURRENT PAGE INPUT NUMBER TYPED IN 
  inputtingNumber(vals:number) {
    this.engrainapiService.getAllUnits(this.pageGroup, vals).subscribe(data => {
      this.pageInfo = data["pages"];
      this.pageCurrent = data["pages"]["current_page"];
      this.pageGroup = data["pages"]["per_page"];
      this.area1Info = data["area1units"];
      this.areaMoreInfo = data["areamoreunits"];
    })
  }

}
