import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Gurukulam';
  email:string
  pwd:string
  constructor(public dialog: MatDialog, private router:Router) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
     data:{content:'text'}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  register(){
    this.router.navigate(["/reg"])
  }
  ngOnInit() {
  }

}
