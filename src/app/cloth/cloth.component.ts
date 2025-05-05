import { Component } from '@angular/core';
import { CommondataService } from '../services/commondata.service';

@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.scss']
})
export class ClothComponent {
  
constructor(private commondataService:CommondataService){}

  ngOnInit(){
    this.commondataService.dataSubject.subscribe(data=>{
      console.log("data",data);
      
    })
  }
}
