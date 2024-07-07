import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, tap } from "rxjs";
import { Router } from "@angular/router";
import { User } from "./user.model";

interface AuthresponseData{
    idToken : string;
    email:string;
    refreshToken : string;
    expiresIn : string;
    localId : string;
    registered ?: boolean;   
}

@Injectable({providedIn : 'root'})
export class AuthService{

    user = new BehaviorSubject<User| null>(null);
    private expirationtimer : any;
    constructor(private http : HttpClient , private route : Router)
    {

    }

    onSignup(email : string , password : string)
    {
       return this.http.post<AuthresponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCjlAItJTyaPR63amkcGE6mGqyDbvTmt7Q' ,
        {
            email : email,
            password : password,
            returnSecureToken : true,
        }
       ).pipe(tap(resData =>{
        const expirationdate = new Date(new Date().getTime() + +resData.expiresIn *1000)
        const user = new User(resData.email , resData.localId , resData.idToken , expirationdate );
        this.user.next(user);
       // localStorage.setItem('userDataforProducts' , JSON.stringify(user));
        this.autologut(+resData.expiresIn *1000);
    }))
    }

    onSignIn(email : string , password : string)
    {
      return this.http.post<AuthresponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCjlAItJTyaPR63amkcGE6mGqyDbvTmt7Q' , 
       {
            email : email,
            password : password,
            returnSecureToken : true,

       }).pipe(tap(resData =>{
       
        const expirationdate = new Date(new Date().getTime() + +resData.expiresIn *1000)
        const user = new User(resData.email , resData.localId , resData.idToken , expirationdate );
        this.user.next(user);
       // localStorage.setItem('userDataforProducts' , JSON.stringify(user));
        this.autologut(+resData.expiresIn *1000);
    }))
    }

    logout()
    {
        this.user.next(null);
        this.route.navigate(['/auth'])
    }

    autologut(expirationtime : number)
    {
       this.expirationtimer =  setTimeout(() => {
            this.logout();
        }, expirationtime);
        localStorage.removeItem('userDataforProducts');
        if(this.expirationtimer)
        {
            clearTimeout(this.expirationtimer);
        }
        this.expirationtimer = null;
    }

    autoLogin()
    {
        const userDataString = localStorage.getItem('userDataforProducts');

        if (!userDataString) {
            return;
        }
        
        const userData: {
            email: string,
            id: string,
            _token: string,
            _tokenexpirationdate: string
        } = JSON.parse(userDataString);
        
        const userLoaded = new User(userData.email, userData.id, userData._token, new Date(userData._tokenexpirationdate));
        
        if (userLoaded.token) {
            this.user.next(userLoaded);
            const expirationDate = new Date(userData._tokenexpirationdate).getTime() - new Date().getTime();
            this.autologut(expirationDate);
        }
        
    }

}