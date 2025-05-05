import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent {
  //varibles/property
  name = 'Poonam'; //""/'' string
  marks = 70;
  city2 : string = "mumbai";
  city?:string;  //let city;
  country :undefined =  undefined;
  country2:null = null;
  isContainValue = true 
  hobbies = [] //define empty array
  hobbies1= ['poonam', 'pooja', 500, true];
  studentData = { name:'poonam', age:30 } ;//{} empty obj
  multipleStdData = [ 
    { name: 'Ram' , age : 30 , city : 'Pune'},
    { name: 'Ram1' , age : 20 , city : 'Pune'},
    { name: 'Ram2' , age : 30 , city : 'Pune'},
    { name: 'Ram3' , age : 30 , city : 'Pune'},
    { name: 'Ram4' , age : 30 , city : 'Pune'},
    { name: 'Ram5' , age : 30 , city : 'Pune'},
  ]
  
}
