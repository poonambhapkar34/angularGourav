import { Component } from '@angular/core';
import { CommondataService } from '../services/commondata.service';
import { Router } from '@angular/router';
import { CommonApiCallService } from '../services/common-api-call.service';

@Component({
  selector: 'app-landingscreen',
  templateUrl: './landingscreen.component.html',
  styleUrls: ['./landingscreen.component.scss']
})
export class LandingscreenComponent {
  constructor(private commonDataService: CommondataService, private router: Router, private commonApiCallService: CommonApiCallService){}
  userData:any
  ngOnInit() {
    this.userData = this.commonDataService.userData;
  }
  edit(){
    this.router.navigateByUrl("/signUp")
  }
  delete(){
    this.commonApiCallService.deleteRecord( this.userData.id).subscribe(res=>{
      
    })
  }
}
