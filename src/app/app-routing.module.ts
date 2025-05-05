import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { UserComponent } from './user/user.component';
import { VariablesComponent } from './variables/variables.component';
import { DatabindingtechnicsComponent } from './databindingtechnics/databindingtechnics.component';
import { FormsComponent } from './forms/forms.component';
import { SignupComponent } from './signup/signup.component';
import { LandingscreenComponent } from './landingscreen/landingscreen.component';

const routes: Routes = [
  { path:'', component : HomeComponent},
  { path:'home', component : HomeComponent},
  { path:'user', component : UserComponent },
  { path : 'variables', component : VariablesComponent },
  { path: 'dataBinding', component: DatabindingtechnicsComponent },
  { path: 'forms', component : FormsComponent },
  { path: "signUp", component : SignupComponent},
  { path : "landing", component: LandingscreenComponent},
  { path : "electronics-section", loadChildren:()=>import('./electronic-section/electronic-section.module').then((m) => m.ElectronicSectionModule),},
  { path: 'cloth', loadChildren: () => import('./cloth/cloth.module').then(m => m.ClothModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'structuralDirectiveMod',loadChildren: () => import('./structural-directive/structural-directive.module').then(mod=>mod.StructuralDirectiveModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
