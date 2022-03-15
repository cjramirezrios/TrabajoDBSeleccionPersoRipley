import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
//import { ApiService } from '../ApiService';
//import { Usuario } from '../model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  //user: Usuario=null;
  pagina:String='A';
  constructor(private router:Router, private fb:FormBuilder, private _snackBar:MatSnackBar,/*private apiService: ApiService*/) {
    this.form=this.fb.group({
      correo_electronico:['',Validators.required],
      password:['',Validators.required],
      tipo_usuario:['',Validators.required]      
    })
   }

  ngOnInit(): void {
    /*this.user={
     correo: "",
     contra: "",
     tipoUsuario:"" ,
     nroDni:"" ,
      nombres: "",
     apellidos: ""

    };
    */
  }
  
  Registrarse(){
    if(this.pagina=='A'){
      this.pagina='N';
    }else{
      this.pagina='A';
    }
  }
  Ingresar(){
    const correo_electronico=this.form.value.correo_electronico;
    const password=this.form.value.password;
    const tipo_usuario=this.form.value.tipo_usuario;
    if(correo_electronico == 'Prueba@gmail.com' && password == '123' && tipo_usuario=='Administrador'){
      this.EnviarHome();
    }else{
      this.Error();
    }
  }
  EnviarHome(){
    this.router.navigate(['/home']);
  }
  EnviarLogin(){
    this.pagina='A';
  }
  Error(){
    this._snackBar.open('Correo electronico o contraseña invalidos','',{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    });
  }

}
