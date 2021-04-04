import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServerComponent } from './server/server.component';
import { FooterComponent } from './footer/footer.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {RouterModule} from '@angular/router'
import { MainComponent } from './main/main.component';
import { ContactComponent } from './main/contact/contact.component';
import { ChangePasswordComponent } from './auth/changepassword/change.component';
import { ResetPassword } from './auth/resetpassword/reset.component';
import { ForgetPassword } from './auth/forgetpassword/forget.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WarningComponent,
    SuccessAlertComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ServerComponent,
    MainComponent,
    ContactComponent,
    ChangePasswordComponent,
    ResetPassword
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent,
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
        path: 'reset',
        component: ResetPassword,
      
      },
      {
        path: 'forgetpassword',
        component: ForgetPassword
      },
      {
        path: '**',
        component: WarningComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
