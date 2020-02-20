import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'staff',component:StaffDashboardComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'contact',component:ContactComponent},
  {path:'student-form',component:StudentFormComponent},
  {path:'reg',component:RegisterComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
