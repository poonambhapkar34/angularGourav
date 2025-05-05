import { Component } from '@angular/core';
import { CommondataService } from 'src/app/services/commondata.service';

@Component({
  selector: 'app-sec1',
  templateUrl: './sec1.component.html',
  styleUrls: ['./sec1.component.scss']
})
export class Sec1Component {
  data ={name:"poonam", age:30};
constructor(private commondataService:CommondataService){}

 setData(){
  //this.commondataService.dataSubject.next({name:"poonam", age:30})
  this.commondataService.dataSubject.next(this.data); //set data to the subject
 }
}
