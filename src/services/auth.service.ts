import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private Url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = 'AIzaSyAw6P9ENEuvGU0jT-1PEkLYehWUm5c7Zlo';

  //create new users
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  
  
  //Login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]




  constructor( private http: HttpClient) { 

  // logout(){

  // };

  // loggin(user: UserModel){
  //   console.log('teste');
  // }

  // newUser(user: UserModel){

  // }


  }
}
