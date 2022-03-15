import { Injectable } from "@angular/core";
import{HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
/*import { Usuario } from "./model";
import { Postulante } from "./model";
import { Administrador } from "./model";
import { Convocatoria } from "./model";
*/
@Injectable({
    providedIn:'root'
  })
  export class ApiService{
    baseurl = 'http://localhost:8082' ;
  httpOptions ={
      headers: new HttpHeaders({
      'Content-Type':'application/json;charset=utf-8'
    })
  };
  errorHand1(error){
    let errorMessage='';
    if(error.error instanceof ErrorEvent){
      errorMessage=error.error.message;
    }else{
      errorMessage=`Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
  }
  constructor(private http: HttpClient){}


  
}