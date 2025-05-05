import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  parentData:any="";
  data: any;
  para = "etettete eeeeeeeeeeeeeee eeeeeeeeeeeeee eeeeeeeeee tttttttttttttt "

  dataFromChild(event:any){
    console.log("event,", event);
    this.data = event;
  }
}
