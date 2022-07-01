import { Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { EngrainapiService } from '../engrainapi.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit, OnChanges {

  public pageInfo: any = {};
  public pageGroup: number = 0;

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

  selectingNumber(vals:string) {
    this.engrainapiService.getAllUnits(`https://engrain-unify.herokuapp.com/?per-page=${vals}&page=1`).subscribe(data => {
      this.pageInfo = data["pages"];
      this.pageGroup = data["pages"]["per_page"];
      this.area1Info = data["area1units"];
      this.areaMoreInfo = data["areamoreunits"];
      console.log(data, "hello again from select!")
    })
  }

}
