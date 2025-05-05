import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommondataService } from '../services/commondata.service';
import { Router } from '@angular/router';
import { CommonApiCallService } from '../services/common-api-call.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  name!: string;
  amount!:number;
  inp1Amount!:number;
  res!: number;
  stdData= [ { name:"poonam", age: 30, add:"mumbai"},
             { name:"sai", age:40, add: " pune"}
  ]
  userList: any;
  userData: any;
  isValid: boolean = false;
  constructor(private commondataService : CommondataService, 
    private router: Router, private commonApiCallService:CommonApiCallService ) { } //


  async submit(formdata: any) {
    // console.log("login form", formdata);
    // this.commondataService.userName = formdata.userName;//set data
    // let res = this.commondataService.multiplication(20,2);
    // console.log(res);
    // this.router.navigateByUrl('electronics-section/electronicslanding');
    // this.commonApiCallService.getUserList().subscribe(res=>{
    //   this.userList = res;
    // })
    this.userList = await this.commonApiCallService.getUserList().toPromise()
    //forEach,filter,map,find ,evert etc
    console.log(this.userList);

    if (this.userList.length > 0) {
      // for (let index = 0; index < this.userList.length; index++) {
      //   if (this.userList[index].userName == formdata.userName && this.userList[index].password == formdata.password ){
      //     this.userData = this.userList[index];
      //     this.isValid = false;
      //   } else{
      //     this.isValid = true;
      this.userData = this.userList.find((item: any) => {
        return item.userName == formdata.userName && item.password == formdata.password
      })
      //a = [10,200,522],[{userName:"poo",password:50},{userName:"poo",password:50},{userName:"poo",password:50}]
        // this.userList.forEach((element:any)=>{
        // if(element.userName == formdata.userName && element.password == formdata.password){
        //   this.userData = element;
        // }
        // })
        // this.userData = this.userList.filter((ele:any)=>{
        //   return ele.userName == formdata.userName && ele.password == formdata.password
        // })
        // this.userData = this.userList.map((ele:any)=>{
        //   return ele.userName == formdata.userName && ele.password == formdata.password
        // })
        console.log(this.userData );
        
      if (this.userData) {
        this.isValid = false;
        this.commondataService.userData = this.userData;
        this.router.navigateByUrl('/landing')
      } else {
        this.isValid = true;
      }
    }
  }
    
  
  
    
  

  amount1(event: any) {
    console.log(event.target.value);
    
  }
  amount2(){
    console.log(this.amount);
  }

  amount3(data:any){
   console.log(data);
    
  }
  multiplication(){
   this.res =  this.commondataService.multiplication(this.inp1Amount, this.amount)
  }
  signUp(){
    this.commondataService.userData = {};
  }
}
