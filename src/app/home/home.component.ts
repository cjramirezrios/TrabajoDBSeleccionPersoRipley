import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  creacionConvocatoria(){
    this.router.navigate(['/CreacionConvocatoria']);
  }
  verConvocatoria(){
    this.router.navigate(['/VerConvocatoria']);
  }
  formularioMensaje(){
    this.router.navigate(['/VerFormularioMensaje']);
  }

}
