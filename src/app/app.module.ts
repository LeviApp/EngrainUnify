import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EngrainapiService } from './engrainapi.service'
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [EngrainapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
