import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import {MatDialog,
	MatDialogRef, 
  MAT_DIALOG_DATA,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
  DateAdapter} from "@angular/material";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {  MatSelectModule, MatGridListModule,MatDialogModule,MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule,} from  '@angular/material';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MessageComponent } from './message/message.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { StudentFormComponent } from './student-form/student-form.component';
import { AdmissionService } from './admission.service';
// import { Routes, RouterModule } from '@angular/router';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './alert/alert.component';

// import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AuthGuard } from './guards/auth.guard';
import { LoginServiceService } from './Services/login-service.service';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { RegisterServiceService } from './Services/register-service.service';

import { MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MomentUtcDateAdapter } from './student-form/date.adapter';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    MessageComponent,
    StaffDashboardComponent,
    StudentFormComponent,
    
    FooterComponent,
    RegisterComponent,
    AlertComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule,FormsModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,
     FormsModule,
     ReactiveFormsModule,
     MatFormFieldModule,
     MatInputModule,
     MatDialogModule,
     HttpClientModule,
     MatSidenavModule,
     MatButtonToggleModule,
     MatGridListModule,
     MatSelectModule,
     MatStepperModule,
     MatSlideToggleModule,
    

  ],
  
  entryComponents:[
    LoginComponent
  ],
  providers: [ MatDialog,{provide:MatDialogRef},AdmissionService,LoginServiceService,AuthGuard,RegisterServiceService,
    {
      provide: MAT_DIALOG_DATA,
      useValue: {} // Add any data you wish to test if it is passed/used correctly
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true } ,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentUtcDateAdapter },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
