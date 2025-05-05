import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothComponent } from './cloth.component';

const routes: Routes = [{ path: '', component: ClothComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClothRoutingModule { }
