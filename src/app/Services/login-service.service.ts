import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { config } from 'rxjs';
import { Login } from '../models/login.model';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor(){}
  login(data: any) {
    return new Promise(resolve => {
      const users = JSON.parse(localStorage.getItem("users"));
      if (users) {
        let status = false;
        users.forEach(user => {
          if (data.userName == user.email || data.userName == user.phone) {
            if (data.password === user.password) {
              status = true;
              localStorage.setItem("currentUser", JSON.stringify(user));
              resolve({ status: true, message: "Login succeesfully!!" });
            } else {
              resolve({
                status: false,
                message: "Please Enter the Valid UserName And Password"
              });
            }
          }
        });
        if (!status) {
          resolve({
            status: false,
            message: "Please Enter the Valid UserName And Password"
          });
        }
      }
    });
  }

  isLoggedIn() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    return currentUser ? true : false;
  }
  

  // logout() :void {    
  //   localStorage.setItem('isLoggedIn','false');    
  //   localStorage.removeItem('token');    
  //   }   
}
