import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu'
import { HomeCarouselModule } from '../home-carousel/home-carousel.module';
import { HomeHeaderModule } from '../home-header/home-header.module';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HomeTechnologyModule } from '../home-technology/home-technology.module';


@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HomeCarouselModule,
    HomeHeaderModule,
    MatCardModule,
    MatTooltipModule,
    HomeTechnologyModule,
    MatMenuModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
