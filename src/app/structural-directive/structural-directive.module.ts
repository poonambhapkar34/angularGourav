import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructuralDirectiveRoutingModule } from './structural-directive-routing.module';
import { StructuralDirComponent } from './structural-dir/structural-dir.component';


@NgModule({
  declarations: [
    StructuralDirComponent
  ],
  imports: [
    CommonModule,
    StructuralDirectiveRoutingModule
  ]
})
export class StructuralDirectiveModule { }
