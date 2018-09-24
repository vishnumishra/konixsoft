import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTechnologyComponent } from './home-technology.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule
  ],
  declarations: [HomeTechnologyComponent],
  exports: [HomeTechnologyComponent]
})
export class HomeTechnologyModule { }
