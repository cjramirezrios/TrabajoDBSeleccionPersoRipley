import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private router:Router, private fb:FormBuilder, private _snackBar:MatSnackBar) {
    this.form=this.fb.group({
      correo_electronico:['',Validators.required],
      password:['',Validators.required]      
    })
   }

  ngOnInit(): void {
  }
  Ingresar(){
    const correo_electronico=this.form.value.correo_electronico;
    const password=this.form.value.password;
    if(correo_electronico == 'Prueba@gmail.com' && password == '123'){
      this.EnviarHome();
    }else{
      this.Error();
    }
  }
  EnviarHome(){
    this.router.navigate(['/home']);
  }
  Error(){
    this._snackBar.open('Correo electronico o contraseña invalidos','',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    });
  }

}
