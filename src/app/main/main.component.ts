import { Component, OnInit } from '@angular/core';
import { EngrainapiService } from '../engrainapi.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  public pageInfo: any = {};

  constructor(private engrainapiService: EngrainapiService) { }

  ngOnInit(): void {
    this.engrainapiService.getAllUnits("https://engrain-unify.herokuapp.com/?per-page=100&page=1").subscribe(data => {
      this.pageInfo = data["pages"];
      console.log(data["pages"], "hello")
    })
  }

}
