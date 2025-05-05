import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonApiCallService } from '../services/common-api-call.service';
import { CommondataService } from '../services/commondata.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signUpForm!: FormGroup;
  showEyeIcon: boolean = false;
  isMatch: boolean = true;
  hideForm: boolean = false;
  reactiveFormInMat! : FormGroup;
  userData:any;
  constructor(private formBuilder : FormBuilder, private apiCall : CommonApiCallService, private commonDataService:CommondataService) { }

  ngOnInit(){
   this.userData = this.commonDataService.userData;
    this.signUpFormDetails();
  }

  signUpFormDetails(){
    this.signUpForm = this.formBuilder.group({
      userName : [ this.userData ? this.userData?.userName : '',[Validators.required,Validators.maxLength(20),this.spacesNotAllowed, this.notStartWithSpace]],
      phoneNo : [this.userData ? this.userData?.phoneNo : '',[Validators.pattern('^\\d+$'),Validators.maxLength(10),Validators.minLength(10)]],
      password : [this.userData ? this.userData?.password : ''],
      confirmPass:[this.userData ? this.userData?.confirmPass : ''],
      TnC : [this.userData ? this.userData?.TnC : '',[Validators.requiredTrue]]
    })
  }
  eyeIcon(){
   // this.showEyeIcon = true;
   this.showEyeIcon = !this.showEyeIcon; //toggle !T = f; !f =T
  }
  submit(){
     // { status:"success",
    //   statusCode:"200"
    //   msg:"user added  suc"
    // }
    console.log("this.signUpForm",this.signUpForm.value);
    this.apiCall.postApicall(this.signUpForm.value).subscribe(res=>{
      console.log('post resp', res);  
    })
  //  let payload = {
  //   user_Name : this.signUpForm.value.userName, 
  //   phone_no : this.signUpForm.value.phoneNo,
  //   password: this.signUpForm.value.password, //trim the space
  //   confirm_password : this.signUpForm.value.confirmPass, //trim the space
  //   tnc : this.signUpForm.value.TnC //'T' 'F'
  //  }
  //  this.apiCall.postApicall(payload).subscribe(res=>{
  //     console.log('post resp', res);  
  //   })
  }
  update(){
    let payload = {phoneNo : this.signUpForm.value.phoneNo}
    this.apiCall.updateRecord(this.userData.id,payload).subscribe((response:any)=>{
    })
  }
  checkPass(){
    console.log("ceckpass calling",this.signUpForm.value.password);
   if(this.signUpForm.value.password && this.signUpForm.value.confirmPass){
    this.signUpForm.value.password == this.signUpForm.value.confirmPass ? this.isMatch = true : this.isMatch = false;
   }
  }

  spacesNotAllowed(control:any){
     //includes() : T/F
     let isInclude = /\s{2,}/.test(control?.value); 
     return isInclude ? { 'whiteSpaceError' : true } : null;
  }
  notStartWithSpace(control:any){
    let isInclude = control?.value?.startsWith(' ');
    return isInclude ? { "startWithSpaceError" : true } : null;
  }

  reactiveMaterialForm(){
    this.hideForm = true;
    this.rectiveFormWithMaterial();
  }

  rectiveFormWithMaterial() {
    this.reactiveFormInMat = this.formBuilder.group({
      FullName:[,[Validators.required]],
      email:[,[Validators.required]]
    })
  }
  //CURD create/Post, Update/patch/put, Read/Get, Delete/delete
}
