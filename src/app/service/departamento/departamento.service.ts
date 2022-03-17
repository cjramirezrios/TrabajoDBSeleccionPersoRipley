import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private API_SERVER ="http://localhost:8080/departamento/";
  constructor(
    private httpClient:HttpClient
  ) { }

  public getAllDepartamentos(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }
}
