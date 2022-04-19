import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();
  rememberMe = false;
 

  constructor(private auth:AuthService,
              private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('email')){
      this.user.email = localStorage.getItem('email');
      this.rememberMe = true;
    }
  }

  
  login(form: NgForm){

   if(form.invalid){return;}

    Swal.fire({
      allowOutsideClick:false,
      type: 'info',
      text: 'Wait please...'
    });

    Swal.showLoading();


    this.auth.login(this.user). 
    subscribe(anws => {
      console.log(anws);
      Swal.close();

      if(this.rememberMe){
        localStorage.setItem('email', this.user.email)
      }

      this.router.navigateByUrl('/home');
      
    }, (err)=>{
      console.log(err.error.error.message);
      Swal.fire({
        type: 'error',
        title:'Error while authenticate',
        text: err.error.error.message
      });
      
    });


  }

}
