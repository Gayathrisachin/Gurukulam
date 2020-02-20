import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Admission } from './models/admissionForm.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {
  // this url is for api integration through ip messanger
  url:string='http://192.168.0.102:8081/admission';
    // url:string='http://localhost:3001/admission';
  
  constructor(private http:HttpClient) { }
  // getAdmission():Observable<Admission[]>{
  //   return this.http.get<Admission[]>(this.url);
  //     }
createAdmission(data:Admission):Observable<any>{
  // this is using api
  return this.http.post<Admission[]>(this.url+'/addstudent',data)
//  commented "return" is usin json
  // return this.http.post<Admission[]>(this.url+'/',data)
}
// getUserById(id: number) {
//   return this.http.get<Admission>(this.url + '/' + id);
// }


  
}
