import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClothRoutingModule } from './cloth-routing.module';
import { ClothComponent } from './cloth.component';
import { Sec1Component } from './sec1/sec1.component';
import { Sec3Component } from './sec3/sec3.component';
import { Sec4Component } from './sec4/sec4.component';
import { Sec2Component } from './sec2/sec2.component';


@NgModule({
  declarations: [
    ClothComponent,
    Sec1Component,
    Sec3Component,
    Sec4Component,
    Sec2Component
  ],
  imports: [
    CommonModule,
    ClothRoutingModule
  ]
})
export class ClothModule { }
