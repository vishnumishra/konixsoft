import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { AppMainModule } from './app-main/app-main.module';
import { AboutModule } from './about/about.module';
import { routingModule } from './routing.module';
import { ServiceOfferedModule } from './service-offered/service-offered.module';
import { TeamsModule } from './teams/teams.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    AppMainModule,
    AboutModule,
    routingModule,
    ServiceOfferedModule,
    TeamsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
