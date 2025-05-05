import { Component } from '@angular/core';
import { CommondataService } from 'src/app/services/commondata.service';

@Component({
  selector: 'app-sec2',
  templateUrl: './sec2.component.html',
  styleUrls: ['./sec2.component.scss']
})
export class Sec2Component {
  sec2Data:any;
constructor(private commondataService:CommondataService){}

  ngOnInit(){
    this.commondataService.dataSubject.subscribe(data=>{
      console.log("data",data);
      this.sec2Data = data;
    })
  }
}
