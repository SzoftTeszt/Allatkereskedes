import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { onAppInit } from './app.initializer';
import { Router } from '@angular/router';
import { ConfigService } from './config.service';


@NgModule({
  declarations: [
    AppComponent,
    AnimalsListComponent,
    SearchPipe,
    SortPipe,
    NavComponent,
    HomeComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ {
    provide:APP_INITIALIZER,
    useFactory: onAppInit,
    multi: true,
    deps: [Router, HttpClient]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
