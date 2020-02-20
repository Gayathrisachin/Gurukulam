import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroupDirective, NgForm,Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
// import { UserService } from '../service/user.service';
import { MessageComponent } from '../message/message.component';
import { LoginServiceService } from '../Services/login-service.service';
import { first } from 'rxjs/operators';
import { AlertService } from '../Services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
 
constructor( private alertService: AlertService,private route: ActivatedRoute, public dialogRef: MatDialogRef<LoginComponent>,private  dialog:  MatDialog, private  router:  Router,private formBuilder:FormBuilder,private loginService:LoginServiceService) { }
hideModel() {
  this.dialogRef.close("Closed");
}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }
  // userRegister(){
  //   this.router.navigate(["/reg"])
  // }
  logIn() {
    this.dialogRef.close("Closed");
    const req = {
      userName: this.loginForm.value.userName,
      password: this.loginForm.value.password
    };

    this.loginService.login(req).then((data: any) => {
      if (data && data.status) {
        console.log(data);
       alert(data.message);
        this.router.navigate(["staff"]);
      } else {
      alert(data.message);
      }
    });
  }
}
