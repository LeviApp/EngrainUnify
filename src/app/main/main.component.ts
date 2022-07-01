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

  ngOnInit(): void {
    this.engrainapiService.getAllUnits("https://engrain-unify.herokuapp.com/?per-page=100&page=1").subscribe(data => {
      this.pageInfo = data["pages"];
      this.pageGroup = data["pages"]["per_page"];
      this.area1Info = data["area1units"];
      this.areaMoreInfo = data["areamoreunits"];
      console.log(data, "hello")
    })
  }

  ngOnChanges(changes: SimpleChanges) {
      console.log("Things Changing!")
  }

  selectingNumber(vals:number) {
    this.engrainapiService.getAllUnits(`https://engrain-unify.herokuapp.com/?per-page=${vals}&page=1`).subscribe(data => {
      this.pageInfo = data["pages"];
      this.pageCurrent = data["pages"]["current_page"];
      this.pageGroup = data["pages"]["per_page"];
      this.area1Info = data["area1units"];
      this.areaMoreInfo = data["areamoreunits"];
      console.log(data, "hello again from select!")
    })
  }

  pagingArrow(vals:number) {
    this.engrainapiService.getAllUnits(`https://engrain-unify.herokuapp.com/?per-page=${this.pageGroup}&page=${vals}`).subscribe(data => {
      this.pageInfo = data["pages"];
      this.pageCurrent = data["pages"]["current_page"];
      this.pageGroup = data["pages"]["per_page"];
      this.area1Info = data["area1units"];
      this.areaMoreInfo = data["areamoreunits"];
      console.log(data, "hello again from arrow!")
    })
  }

  inputtingNumber(vals:number) {
    this.engrainapiService.getAllUnits(`https://engrain-unify.herokuapp.com/?per-page=${this.pageGroup}&page=${vals}`).subscribe(data => {
      this.pageInfo = data["pages"];
      this.pageCurrent = data["pages"]["current_page"];
      this.pageGroup = data["pages"]["per_page"];
      this.area1Info = data["area1units"];
      this.areaMoreInfo = data["areamoreunits"];
      console.log(data, "hello again from select!")
    })
  }

}
