import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAppointment } from './appointments/create/create.component';
import { ForgetPassword } from './auth/forgetpassword/forget.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetPassword } from './auth/resetpassword/reset.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { WarningComponent } from './warning/warning.component';

const routes: Routes = [
        {
            path: 'dashboard',
            component: DashboardComponent,
        },
        {
            path: 'register',
            component: RegisterComponent
        },
        {
            path: 'contact',
            component: ContactComponent
        },
  
        {
            path: 'login',
            component: LoginComponent,
        
        },
        {
            path: 'resetpassword/:id/:token',
            component: ResetPassword,
        
        },
        {
            path: 'forgetpassword',
            component: ForgetPassword
        },
        {
            path: 'createappointment',
            component: CreateAppointment
        },
        {
            path: '',
            component: HomeComponent,
        },
        
        {
            path: '**',
            component: WarningComponent
        }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}