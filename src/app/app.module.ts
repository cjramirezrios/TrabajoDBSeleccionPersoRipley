import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreacionConvocatoriaComponent } from './creacion-convocatoria/creacion-convocatoria.component';
import { VerConvocatoriaComponent } from './ver-convocatoria/ver-convocatoria.component';
import {RouterModule, Routes} from '@angular/router';
import { FormularioMensajeGmComponent } from './formulario-mensaje-gm/formulario-mensaje-gm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



const appRoutes:Routes=[
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'CreacionConvocatoria', component:CreacionConvocatoriaComponent},
  {path:'VerConvocatoria', component:VerConvocatoriaComponent},
  {path:'VerFormularioMensaje', component:FormularioMensajeGmComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreacionConvocatoriaComponent,
    VerConvocatoriaComponent,
    FormularioMensajeGmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatSliderModule,
    MatProgressSpinnerModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
