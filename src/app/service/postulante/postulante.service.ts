import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostulanteService {
  private API_SERVER ="http://localhost:8080/postulante/";
  constructor(
    private httpClient:HttpClient
  ) { }
  
  public savePostulante(postulante:any):Observable<any>{
    return this.httpClient.post(this.API_SERVER,postulante);
  }
}
