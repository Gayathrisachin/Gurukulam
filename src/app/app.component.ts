import { Component } from '@angular/core';
import {MatDialog,MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gurukulam';
  email:string
  pwd:string
  constructor(public dialog: MatDialog) {}
//   openDialog() {
//     const dialogConfig = new MatDialogConfig();

//     dialogConfig.disableClose = true;
//     dialogConfig.autoFocus = true;

//     dialogConfig.data = {
//         id: 1,
//         title: 'Angular For Beginners'
//     };

//     this.dialog.open(LoginComponent, dialogConfig);
// }

  }

