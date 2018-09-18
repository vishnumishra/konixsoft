import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCarouselComponent } from './home-carousel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeCarouselComponent],
  exports: [HomeCarouselComponent]
})
export class HomeCarouselModule { }
