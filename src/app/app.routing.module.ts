import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAppointment } from './appointments/create/create.component';
import { AccountconfirmationComponent } from './auth/accountconfirmation/accountconfirmation.component';
import { ForgetPassword } from './auth/forgetpassword/forget.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetPassword } from './auth/resetpassword/reset.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { StoreRegistrationConirmation } from './storeregistration/confirmation/confirmation.comoponent';
import { StoreRegistration } from './storeregistration/registration/registration.component';
import { WarningComponent } from './warning/warning.component';

const routes: Routes = [
        {
            path: 'dashboard',
            component: DashboardComponent,
        },
        {
            path: 'registration/confirmation/:id/:token',
            component: AccountconfirmationComponent
        },
        {
            path: 'registeration',
            component: RegisterComponent
        },
    {

            path: 'login',
            component: LoginComponent,
        
    },
    {

        path: 'contact',
        component: ContactComponentComponent,
    
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
            path: 'store/registration/confirmation/:id/:token',
            component: StoreRegistrationConirmation
        },
        {
            path: 'store/registration',
            component: StoreRegistration
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