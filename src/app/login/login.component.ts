import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DepartamentoService } from '../service/departamento/departamento.service';
import { ProvinciaService } from '../service/provincia/provincia.service';
import { DistritoService } from '../service/distrito/distrito.service';
import { PostulanteService } from '../service/postulante/postulante.service';
//import { Usuario } from '../model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  postulanteForm:FormGroup;
  departamentos:any;
  provincias:any;
  distritos:any;
  //user: Usuario=null;
  pagina:String='A';
  constructor(private router:Router, private fb:FormBuilder, private _snackBar:MatSnackBar,
    public departamentoService: DepartamentoService,
    public provinciaService: ProvinciaService,
    public distritoSercice:DistritoService,
    public postulanteService: PostulanteService) {
    this.form=this.fb.group({
      correo_electronico:['',Validators.required],
      password:['',Validators.required],
      tipo_usuario:['',Validators.required]      
    })
    this.postulanteForm=this.fb.group({
      Nro_DNI : ['',Validators.required],
      Nombres : ['',Validators.required],
      Apellidos : ['',Validators.required],
      Correo_electronico : ['',Validators.required],
      Password :['',Validators.required],
      Tipo_usuario : ['',Validators.required],
      Fecha_nacimiento :['',Validators.required],
      Grado_academico : ['',Validators.required],
      Telefono : ['',Validators.required],
      departamento :['',Validators.required],
      provincia : ['',Validators.required],
      distrito :['',Validators.required] 
    })
   }
   
  ngOnInit(): void {
    
    this.departamentoService.getAllDepartamentos().subscribe(resp=>{
      this.departamentos=resp;
    },
      error => {console.log(error)}
    )
    this.postulanteForm.get('departamento').valueChanges.subscribe(value=>{
      this.provinciaService.getAllProvinciabyDepartamento(value.id).subscribe(resp=>{
        this.provincias=resp;
      },
      error => {console.log(error)}
      );
    })

    this.postulanteForm.get('provincia').valueChanges.subscribe(value=>{
      this.distritoSercice.getAllDistritobyProvincia(value.id).subscribe(resp=>{
        this.distritos=resp;
      },
      error => {console.log(error)}
      );
    })
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
  Guardar(): void{
    this.EnviarLogin();
    this.Registrarse();
    this.postulanteService.savePostulante(this.postulanteForm.value).subscribe(resp=>{
    },
    error => {console.log(error)}
    )
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
