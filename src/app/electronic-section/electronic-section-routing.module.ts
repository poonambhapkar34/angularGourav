import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ACComponent } from './ac/ac.component';
import { ElectronicslandingComponent } from './electronicslanding/electronicslanding.component';

const routes: Routes = [
  { path : 'ac', component: ACComponent },
  { path:'electronicslanding',component : ElectronicslandingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectronicSectionRoutingModule { }
