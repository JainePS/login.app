import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  
  login(form: NgForm){

   if(form.invalid){return;}

    this.auth.login(this.user). 
    subscribe(anws => {
      console.log(anws);
      
    }, (err)=>{
      console.log(err.error.error.message);
      
    });


  }

}
