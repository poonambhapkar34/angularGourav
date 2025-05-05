import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VariablesComponent } from './variables/variables.component';
import { DatabindingtechnicsComponent } from './databindingtechnics/databindingtechnics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { CharactersonlyDirective } from './charactersonly.directive';
import { HttpClientModule } from '@angular/common/http';
import { LandingscreenComponent } from './landingscreen/landingscreen.component';
console.log("App module");

@NgModule({
  declarations: [ //component/directives/pipes
    AppComponent,
    HomeComponent,
    VariablesComponent,
    DatabindingtechnicsComponent,
    FormsComponent,
    SignupComponent,
    CharactersonlyDirective,
    LandingscreenComponent,
  ],
  imports: [ //all modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
