import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectronicSectionRoutingModule } from './electronic-section-routing.module';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ACComponent } from './ac/ac.component';
import { ElectronicslandingComponent } from './electronicslanding/electronicslanding.component';
console.log("electronic module");


@NgModule({
  declarations: [
    MobilesComponent,
    ACComponent,
    ElectronicslandingComponent
  ],
  imports: [
    CommonModule,
    ElectronicSectionRoutingModule
  ]
})
export class ElectronicSectionModule { }
