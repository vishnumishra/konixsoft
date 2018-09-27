import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeCarouselModule } from '../home-carousel/home-carousel.module';
import { HomeTechnologyModule } from '../home-technology/home-technology.module';


@NgModule({
  imports: [
    CommonModule,
    HomeCarouselModule,
    HomeTechnologyModule,
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
