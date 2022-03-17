import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {
  private API_SERVER ="http://localhost:8080/provincia/";
  constructor(
    private httpClient:HttpClient
  ) { }
  public getAllProvinciabyDepartamento(idDepartamento):Observable<any>{
    return this.httpClient.get(this.API_SERVER+idDepartamento)
  }
}
