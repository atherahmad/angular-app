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
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangePasswordComponent } from './auth/changepassword/change.component';
import { ResetPassword } from './auth/resetpassword/reset.component';
import { ForgetPassword } from './auth/forgetpassword/forget.component';
import { CreateAppointment } from './appointments/create/create.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'
import { MatSelectModule } from '@angular/material/select'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { MatFormFieldModule } from '@angular/material/form-field';
import {TokenInterceptorService} from './token-interceptor.service'
import { StoreRegistration } from './storeregistration/registration/registration.component';
import { CreateStoreService } from './services/store/create.service';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { ContactService } from './contact-component/contact.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AccountconfirmationComponent } from './auth/accountconfirmation/accountconfirmation.component';
import { HeadingComponent } from './shared/heading/heading.component';
import { EditAppointmentComponent } from './appointments/edit-appointment/edit-appointment.component';


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
    DashboardComponent,
    ChangePasswordComponent,
    ResetPassword,
    CreateAppointment,
    ForgetPassword,
    HomeComponent,
    StoreRegistration,
    ContactComponentComponent,
    SpinnerComponent,
    AccountconfirmationComponent,
    HeadingComponent,
    EditAppointmentComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
    


  ],
  providers: [CreateStoreService,{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true},ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
