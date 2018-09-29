import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTechnologyComponent, DialogOverview } from './home-technology.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatDialogModule
  ],
  declarations: [HomeTechnologyComponent,DialogOverview],
  entryComponents:[DialogOverview],
  
  exports: [HomeTechnologyComponent]
})
export class HomeTechnologyModule { }
