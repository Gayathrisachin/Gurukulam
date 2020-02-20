import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder, FormControlName } from '@angular/forms';
// import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from "@angular/material";
import { Router } from '@angular/router';
import { AdmissionService } from '../admission.service';
import { Admission } from '../models/admissionForm.model';
// import * as moment from 'moment';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {  MomentUtcDateAdapter  } from './date.adapter';

export interface Section{
  
  viewValue: string;
}
export interface Class{
  
  viewClass:number;
}
export interface bloodGroups{

  viewValue:string;
}
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
 
})


export class StudentFormComponent implements OnInit {
  // registerForm: FormGroup;
//   submitted = false;
// date = new FormControl(moment());
date=new Date().toISOString().substring(0,10)
jsonDate=JSON.stringify(this.date)
  admission:Admission[];
  
 
  sections: Section[] = [
    {viewValue: 'A'},
    { viewValue: 'B'},
    {viewValue: 'C'},
    {viewValue: 'D'}
  ];
  Classes: Class[] = [
    { viewClass: 1},
    { viewClass: 2},
    { viewClass: 3},
    { viewClass: 4},
    { viewClass: 5},
    { viewClass: 6},
    { viewClass: 7},
    { viewClass: 8},
    { viewClass: 9},
    { viewClass: 10}
  ];
 blood: bloodGroups[] = [
    { viewValue:'A+'},
    { viewValue:'A-'},
    { viewValue:'B+'},
    { viewValue:'B-'},
    { viewValue:'O+'},
    { viewValue:'O-'},
    { viewValue:'AB+'},
    { viewValue:'AB-'}
  ];
  studentForm: FormGroup;
  parentsForm: FormGroup;
editForm:FormGroup
  formJoin: FormGroup;
 


// minDate = new Date(1981,0,1).toISOString().substring(0, 10);
// maxDate = new Date().toISOString().substring(0, 10);
  constructor(private formBuilder: FormBuilder,private router:Router,private adminService:AdmissionService) { }
 

  // date:any
  ngOnInit(  
  ) {
  
    this.studentForm = this.formBuilder.group({
     admissionId:[''],
      firstName: ['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$'),Validators.maxLength(20)]],
      lastName: ['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$'),Validators.maxLength(20)]],
      gender: ['', Validators.required],
      dateOfBirth:[this.jsonDate, Validators.required],
      classes:['', Validators.required],
      section:['', Validators.required],
      bloodGroup:[''],
      address: ['', Validators.required],
    
      phoneNumber: ['',[ Validators.required,Validators.pattern('[6-9]\\d{9}')]],
      email: ['',Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]
     
    });
    
    this.parentsForm = this.formBuilder.group({
   
      fatherFullName: ['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$'),Validators.maxLength(20)]],
      motherFullName: ['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$'),Validators.maxLength(20)]],
      fatherOccupation: ['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$'),Validators.maxLength(20)]],
      motherOccupation: ['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$'),Validators.maxLength(20)]],
      contactNum: ['',[Validators.required,Validators.pattern('[0-9]\\d{9}')]],
      pemail: ['',Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]
    });
  
    // this.formJoin=new FormGroup({form1:this.studentForm,form2:this.parentsForm})
  
  
  }

 hasError = (controlName: string, errorName: string) =>{
    return this.studentForm.controls[controlName].hasError(errorName);
  }
  hasError1 = (controlName: string, errorName: string) =>{
    return this.parentsForm.controls[controlName].hasError(errorName);
  }
 

  createRegister(){
   
    if (this.studentForm.valid && this.parentsForm.valid) {
      let arc=this.studentForm.value
      arc.fatherFullName=this.parentsForm.value.fatherFullName;
      arc.motherFullName=this.parentsForm.value.motherFullName;
      arc.fatherOccupation=this.parentsForm.value.fatherOccupation;
      arc.motherOccupation=this.parentsForm.value.fatherFullName;
      arc.contactNum=this.parentsForm.value.contactNum;
      arc.pemail=this.parentsForm.value.pemail;
            this.adminService.createAdmission(arc)
            .subscribe( (data:any)=> {
            });
        
          }

  }
  // createRegister1(){
  //   if (this.parentsForm.valid) {
  //           this.adminService.createAdmission(this.parentsForm.value)
  //           .subscribe( data => {
  //           });
         
  //         }

  // }

  // editUser(user: Admission): void {
  //   localStorage.removeItem("editUserId");
  //   localStorage.setItem("editUserId", user.admissionId.toString());
  //   this.router.navigate(['edit-user']);
  // };

  
}

