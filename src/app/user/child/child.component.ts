import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommondataService } from 'src/app/services/commondata.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  name: any
  @Input() dataFromParent: any; //parent to child data transfer
  @Output() dataFromChild = new EventEmitter<any>; // child to parent data transfer
  @Input() paraData: any;

  constructor(private commondataService: CommondataService) {
    console.log("constructor calling");
   }

  ngOnInit() {
    console.log("onit calling");
    //Called once, after the first ngOnChanges(). 
    this.name = this.commondataService.name
  }
  ngOnChanges() {
    console.log("on changes calling");
    
  }
  ngDoCheck(){
    console.log("do check calling");
    
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit calling");
    //	Runs once after the  ngDpCheck and component's content has been initialized.
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked calling");
    
  }
  ngAfterViewInit(){
    //	Runs once after the component's view has been initialized.
    console.log("ngAfterViewInit  calling"); 
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked calling");
    
  }
  ngOnDestroy(){
    //Runs once before the component is destroyed.
    console.log("ngOnDestroy calling");
    
  }

  inpData(event: any) {
    this.dataFromChild.emit(event.target.value)
  }

}
