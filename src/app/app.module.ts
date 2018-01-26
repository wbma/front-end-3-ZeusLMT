import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ListMediaComponent } from './list-media/list-media.component';
import {MediaService} from './services/media.service';
import {HttpClientModule} from '@angular/common/http';
import {DigitransitService} from './services/digitransit.service';


@NgModule({
  declarations: [
    AppComponent,
    ListMediaComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, NgbModule.forRoot()
  ],
  providers: [MediaService, DigitransitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
