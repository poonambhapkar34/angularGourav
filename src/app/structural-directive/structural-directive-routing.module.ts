import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructuralDirComponent } from './structural-dir/structural-dir.component';

const routes: Routes = [
  { path: 'structuralDirCompo', component:StructuralDirComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructuralDirectiveRoutingModule { }
