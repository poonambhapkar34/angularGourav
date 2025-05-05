import { Component } from '@angular/core';
import { CommondataService } from 'src/app/services/commondata.service';

@Component({
  selector: 'app-electronicslanding',
  templateUrl: './electronicslanding.component.html',
  styleUrls: ['./electronicslanding.component.scss']
})
export class ElectronicslandingComponent {
  name:any;
  
  constructor(private commondataService:CommondataService){}

  ngOnInit(){
    this.name = this.commondataService.userName;
  }
}
