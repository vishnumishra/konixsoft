import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMainComponent } from './app-main.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HomeModule } from '../home/home.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { routingModule } from '../routing.module';


@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HomeModule,
    MatTooltipModule,
    routingModule
  ],
  declarations: [AppMainComponent],
  exports: [AppMainComponent]
})
export class AppMainModule { }
