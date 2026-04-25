import { AuthService } from './../../../Core/Services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 constructor(private _AuthService: AuthService, private _Router: Router){}

  logForm: FormGroup = new FormGroup({
    //controls => inputs
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
  });

  Login(){
    console.log(this.logForm);
    this._AuthService.login(this.logForm.value).subscribe({
      next:(res)=>{
        console.log(res);
        if(res.message == 'success'){
          localStorage.setItem('userToken',res.token);
          this._AuthService.decodeUserdata();
          // this._Router.navigate(['/home'])
        }
        },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
