import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-dir',
  templateUrl: './structural-dir.component.html',
  styleUrls: ['./structural-dir.component.scss']
})
export class StructuralDirComponent {
  show: any = true;
  cityName: any = "bigCity";
  user = 'support'; //admin,endUser,support
  isHighlighted = true;
  hide() {
    this.show = false;
  }
  list = [44, 55, 66, 11, 222];
  list1 = [
    { name: "aaa", age: 20 },
    { name: "bbb", age: 20 },
    { name: "ccc", age: 33 },
    { name: "dd", age: 20 },
    { name: "aaa", age: 12 },
    { name: "ee", age: 11 },
    { name: "e", age: 22 },
    { name: "g", age: 33 },
    { name: "v", age: 20 }
  ]
  day = "syyyat";
  //list1.name = v; list1.age= 33

  marks = 30;  //pass or fail marks > 35 :pass marks < 35 :failed
  isPritty = false;
  percent = 30;
  constructor() {

  }
  test() {
    if (this.isPritty) {  //for single condition
      console.log("pritty");
    }

    //for two conditons true : false: 
    if (this.marks >= 35) {
      console.log("pass");
    } else {
      console.log("fail");
    }

    this.percent >=35 ? console.log("pass") : console.log("fail");
   
  
    // elseif more than two conditons 
    // 4 

    if (this.percent < 35) {
      console.log("fail");
    } else if (this.percent >= 35 && this.percent < 60) {
      console.log("pass");
    } else if (this.percent >= 60 && this.percent <= 70) {
      console.log("first class");
    } else {
      console.log("distinction");
    }

    switch (this.percent) {
      case 35:
        console.log("pass");
        break;
      case 61:
        console.log("FC");
        break;
      default:
        console.log("default");
        break;
    }
  }
}
