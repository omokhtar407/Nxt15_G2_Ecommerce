import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../Core/Services/auth.service';



@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private _AuthService: AuthService, private _Router:Router) {}

  regForm: FormGroup = new FormGroup({
    //controls => inputs
    name: new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
    rePassword: new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
    phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  },{validators:this.matchPass});

  Register() {
    if(this.regForm.valid){
      this._AuthService.register(this.regForm.value).subscribe({
        next:(res)=>{
          console.log(res);
          if(res.message == 'success'){
            this._Router.navigate(['/login'])
          }
        },
        error:(err)=>{
          console.log(err.error.message);
        }
      })
    }
  }


  matchPass(group:AbstractControl){
      const pass = group.get('password')?.value;
      const rePass = group.get('rePassword')?.value;
      if(pass == rePass){
        return null;
      }else{
        return {misMatch:true}
      }
  }


}
