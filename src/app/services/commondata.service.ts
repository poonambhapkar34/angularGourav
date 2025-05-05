import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommondataService {

  userName: any;
  name = "poonam";
  dataSubject = new Subject<any>();
  userData: any;
  constructor() { }

  multiplication(num1: number, num2: number) { //num1 num2: parameters or aurguments
    return num1 * num2;//40
  }
}
