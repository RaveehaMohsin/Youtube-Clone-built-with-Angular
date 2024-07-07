import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  constructor(private authservice : AuthService, private router : Router)
  {

  }

  fUser = faUser;
  fLock = faLock;
  isSignin = true;
  isLoading = false;
  error ?: string;

  onswitchmode()
  {
    this.isSignin = !this.isSignin;
  }

  onSubmit(form : NgForm)
  {
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;
    if(this.isSignin)
      {
        this.authservice.onSignIn(email , password).subscribe((response)=>
          {
              console.log(response);
              this.isLoading = false;
              this.router.navigate(['/main/homepage']);

          } , (errorRes) =>
          {
            console.log(errorRes);
            if(!errorRes.error || !errorRes.error.error)
              {
                this.error = 'An unknown error occured!'
              }
              switch(errorRes.error.error.message)
              {
                case 'EMAIL_NOT_FOUND':
                this.error = 'This email not exists!'
                break; 

                case 'INVALID_PASSWORD':
                this.error = 'Invalid Password!'
                break; 

                case 'INVALID_LOGIN_CREDENTIALS':
                this.error = 'Invalid Login Credentials!'
                                
              }
              this.isLoading = false;
            
          })

      }
      else
      {
        this.authservice.onSignup(email , password ).subscribe((response)=>
          {
              console.log(response);
              this.isLoading = false;
          } , (errorRes) =>
          {
            console.log(errorRes);
            if(!errorRes.error || !errorRes.error.error)
              {
                this.error = 'An unknown error occured!'
              }
              switch(errorRes.error.error.message)
              {
                 case 'EMAIL_EXISTS':
                this.error = 'This email already exists!'                 
              }
              this.isLoading = false;
            
          })

      }
 

    form.reset();
    
  }

  


}
