import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeTechnologyModule } from '../home-technology/home-technology.module';
import { HomeParticleBannerModule } from '../home-particle-banner/home-particle-banner.module';


@NgModule({
  imports: [
    CommonModule,
    HomeParticleBannerModule,
    HomeTechnologyModule,
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
