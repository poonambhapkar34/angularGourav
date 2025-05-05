import { Component } from '@angular/core'; //import section

@Component({ //component directive/meta data of compo
  selector: 'app-databindingtechnics',
  templateUrl: './databindingtechnics.component.html',
  styleUrls: ['./databindingtechnics.component.scss']
})
export class DatabindingtechnicsComponent { //class
  //data binding is a mechanism for coordinating the interaction between the component class and the component's view. It allows data to flow in and out of components in different ways, making it easier to work with dynamic content.
  //1. One-way Data Binding 2.Two-way Data Binding
  //1. Interpolation (One-way Data Binding):{{}}
  //1. Property binding (One-way Data Binding):[]
  // 1. event binding (One-way Data Binding):()
  //2.Two-way Data Binding:[()]

  userName: string = "Ram"; //property section
  userAddress: any = 'pune';
  twoWayDB: any;
  d=50;

  constructor() { } //constructor

  ngOnInit() {  //lifecycle hooks
  }

  blurEvent() { //functions section
    console.log("blur event");
  }

  dataBinding() {
    console.log("twoWayDB value", this.twoWayDB);
  }
  consoleChanges() {
    let a = 20;
    let b = 30;
    console.log("a", a, b);// a 20 30 
    console.log("a" + a + b);//a2030
    console.log(a + b);//50
    console.log(a + b + 'a' + b + a);// 50a3020
    console.log(a, b, a + b, b, "b", a, "a" + a);//20 30 50 30 b 20 a20 
  }

  parameterless(){}//prameterless fun
  Parametrised(id:number, name:string, amount:any){}
}
