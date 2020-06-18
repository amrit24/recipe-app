import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


export interface AuthResponseData{
    kind: string;
    idToken: string;
    email: string;	
    refreshToken: string;
    expiresIn: string;
    localId: string;  
    registered?: boolean;    
}

@Injectable({providedIn: "root"})
export class AuthService{

    constructor(private http : HttpClient){}

    signUp(email: string, password: string){
      return this.http.post<AuthResponseData>(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDtTApxH6s45EMJHge9yLvuOEbgNF09bVI",
           {
               email : email,
               password : password,
               returnSecureToken: true
           }          
          )
          .pipe(catchError(this.handleError));
    }

    login(email: string, password: string){
        return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDtTApxH6s45EMJHge9yLvuOEbgNF09bVI",
        {
            email : email,
            password : password,
            returnSecureToken: true
        }   
     )
     .pipe(catchError(this.handleError));
    }

    private handleError(errorRes: HttpErrorResponse){
        let errorMessage = 'An unknown error occured';

        if(!errorRes.error || !errorRes.error.error){
            return throwError(errorMessage);
        }

        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'Email already exists'; 
                console.log(errorRes.error.error.message) 
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'Invalid email/Password'; 
                console.log(errorRes.error.error.message) 
            case 'INVALID_PASSWORD':
                errorMessage = 'Invalid email/Password'; 
                console.log(errorRes.error.error.message)                    
        }
        return throwError(errorMessage);
    }
}