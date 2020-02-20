import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
    constructor() {}

    /* Register User */
    register(data: any) {
      let users = JSON.parse(localStorage.getItem("users"));
      users = users ? users : [];
      return new Promise(resolve => {
        users.push(data);
        localStorage.setItem("users", JSON.stringify(users));
        resolve(" Registration succeesfully!!");
      });
    }
}
