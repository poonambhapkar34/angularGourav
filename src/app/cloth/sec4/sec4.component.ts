import { Component } from '@angular/core';
import { CommondataService } from 'src/app/services/commondata.service';

@Component({
  selector: 'app-sec4',
  templateUrl: './sec4.component.html',
  styleUrls: ['./sec4.component.scss']
})
export class Sec4Component {
  sec4Data:any
constructor(private commondataService:CommondataService){}

  ngOnInit(){
    this.commondataService.dataSubject.subscribe(value=>{
     this.sec4Data = value;
    })
  }
}
