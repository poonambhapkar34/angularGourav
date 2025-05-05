import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonApiCallService {
 
 
  url = "http://localhost:3000/userDetails";
  constructor(private httpClient : HttpClient) { }

  postApicall(formData:any) {
   return this.httpClient.post(this.url, formData);
  }
  getUserList(){
   return this.httpClient.get(this.url);
  }
  // getUserDetails(){
  //   return this.httpClient.get(this.url).toPromise();
  //  }
  updateRecord(id:any,data:any) {
   return this.httpClient.patch(this.url + '/' + id , data);
  }
  deleteRecord(id:any) {
    return this.httpClient.delete(this.url + '/' + id )
  }
}
