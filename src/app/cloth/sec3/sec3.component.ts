import { Component } from '@angular/core';
import { CommondataService } from 'src/app/services/commondata.service';

@Component({
  selector: 'app-sec3',
  templateUrl: './sec3.component.html',
  styleUrls: ['./sec3.component.scss']
})
export class Sec3Component {
  sec3Data :any;
constructor(private commondataService:CommondataService){}

  ngOnInit(){
    this.commondataService.dataSubject.subscribe(data=>{
      console.log("data",data);
      this.sec3Data = data;
    })
  }
}
