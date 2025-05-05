import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCharactersonly]'
})
export class CharactersonlyDirective {

  constructor(private eleRef: ElementRef) { }
  
  @HostListener('input',['$event']) onInputChange(){
    let value = this.eleRef.nativeElement.value;
   this.eleRef.nativeElement.value = value.replace(/[^a-zA-Z]/g, '');
  }
}
