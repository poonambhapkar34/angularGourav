import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApiCallService } from '../services/common-api-call.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  userData:any;
  constructor(private router: Router, private apiCallService:CommonApiCallService){
  
  }
  
  userMod(){
    this.router.navigateByUrl('/user/parent')
  }
  structuralDir(){
    this.router.navigateByUrl('/structuralDirectiveMod/structuralDirCompo')
  }
  userList(){
    this.apiCallService.getUserList().subscribe(data=>{
    this.userData = data;
    })
  }
  updateDetails(){
    
  }
}
