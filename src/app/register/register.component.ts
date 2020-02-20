import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
// import { RegisterService } from "src/app/services/register.service";
// import { ToasterService } from "src/app/services/toaster.service";
import { Router } from "@angular/router";
// import { PasswordValidation } from "src/app/password-validator";
import { AnimationDurations } from "@angular/material/core";
import { RegisterServiceService } from '../Services/register-service.service';
import { PasswordValidation } from '../password-validator';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  errorMessages = {
    firstName: [{ type: "required", message: "First Name is required" }],
    lastName: [{ type: "required", message: "Last Name is required" }],
    password: [{ type: "required", message: "Password is required" }],
    role: [{ type: "required", message: "Role is required" }],
    email: [
      { type: "required", message: "Email is required" },
      { type: "pattern", message: "Enter a valid email" }
    ],
    phone: [
      { type: "required", message: "Phone is required" },
      {
        type: "pattern",
        message: "It is not a valid mobile number"
      }
    ],
    address: [
      { type: "required", message: "Address is required" },
      {
        type: "minlength",
        message: "Address must be at least 10 characters long"
      }
    ]
  };

  roles = [
    {
      name: "Admin",
      value: "admin"
    },
    {
      name: "Co-Ordinator",
      value: "co-ordinator"
    },

    {
      name: "Teacher",
      value: "teacher"
    },
    {
      name: "Parent",
      value: "Parent"
    },
    {
      name: "Student",
      value: "student"
    }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterServiceService,
    // private toasterService: ToasterService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: new FormControl("", Validators.required),
        lastName: new FormControl("", Validators.required),
        password: new FormControl(
          "",
          Validators.compose([Validators.required, Validators.minLength(8)])
        ),
        confirmPassword: new FormControl("", Validators.required),
        role: new FormControl("", Validators.required),
        email: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.pattern(
              "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
            )
          ])
        ),
        phone: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
          ])
        ),
        address: new FormControl(
          "",
          Validators.compose([Validators.required, Validators.minLength(10)])
        )
      },
      {
        validator: PasswordValidation.MatchPassword
      }
    );
  }

  createRegister(data: any) {
    if (this.registerForm.invalid) {
      return;
    }

    this.registerService.register(data).then(response => {
      if (response) {
        // this.toasterService.showSuccess(response);
        alert(response)
        this.registerForm.reset();
        this.registerForm.markAsUntouched();
        this.router.navigate(['login'])
      }
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  };
}
