import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private Url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = 'AIzaSyAw6P9ENEuvGU0jT-1PEkLYehWUm5c7Zlo';

  userToken: string;
  //create new users
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  
  
  //Login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]




  constructor( private http: HttpClient) { 
    this.readToken();
 
  
  }

  logout(){

  };

  login(user: UserModel){
    const authData = {
      ...user,returnSecureToken: true
    };0
    return this.http.post(
      `${this.Url}signInWithPassword?key=${this.apikey}`,
      authData
    ).pipe(
      map( answ =>{
               
        this.toHoldToken(answ['idToken']);
        return answ;
      }));
  }


  newUser(user: UserModel){

    const authData = {
      ...user,returnSecureToken: true
    };
    return this.http.post(
      `${this.Url}signUp?key=${this.apikey}`,
      authData
    ).pipe(
      map( answ =>{
               
        this.toHoldToken(answ['idToken']);
        return answ;
      })
    );
  } 

  private toHoldToken( idToken: string){
  
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

  }

  readToken(){
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    } else{
      this.userToken = '';
    }
  }
}

