import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-accountconfirmation',
  templateUrl: './accountconfirmation.component.html',
  styleUrls: ['../forgetpassword/forget.component.css']
})
export class AccountconfirmationComponent{
  password: string = "";
  confirmPassword: string = "";
  showInputError: boolean = false;
  allInputsEntered: boolean = true;
  passwordMatchError: boolean = false;
  id: string;
  token: string;
  resetTokenVerified: boolean = true;
  email: string = "";
  confirmed: boolean = false;

  constructor(private authService: LoginService, private router: Router, private route: ActivatedRoute) {
    
  }
   ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.token = this.route.snapshot.paramMap.get('token');
    if(!this.id || !this.token) this.router.navigateByUrl('/login')
    let modal = {
      data: {
        id: this.id,
        token: this.token
      }
    }
    const myObserver = {
      next: x => this.confirmed = true,
      error: err => console.log(err),
    };
    this.authService.accountConfirmation(modal).subscribe(myObserver);
    

      this.authService.confirmationSource$
      .subscribe(
        (status) => {
          if (status == true) this.confirmed = true;
          else console.log("confirmation failed")
        }
      )
  }
  
  goToHome = () => {
    this.router.navigateByUrl('/login')
  }
}