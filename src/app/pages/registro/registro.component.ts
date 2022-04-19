import { Component, OnInit } from "@angular/core";
import { UserModel } from "src/app/models/user.model";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/services/auth.service";
import Swal from "sweetalert2";
import { Router } from "@angular/router";


@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"],
})
export class RegistroComponent implements OnInit {
  user: UserModel;
 

  constructor(private auth: AuthService, 
              private router: Router) {}

  ngOnInit() {
    this.user = new UserModel();
    this.user.email = "jaine.aps@hotmail.com";
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick:false,
      type: 'info',
      text: 'Wait please...'
    });

    Swal.showLoading();
      this.auth.newUser(this.user).subscribe( answ =>{
       console.log(answ);
       Swal.close();
       this.router.navigateByUrl('/home');
       
       }, (err) =>{
      console.log(err.error.error.message);
      Swal.fire({
        type: 'error',
        title:'Error while authenticate',
        text: err.error.error.message
      });
      
        
       });
  }
}
