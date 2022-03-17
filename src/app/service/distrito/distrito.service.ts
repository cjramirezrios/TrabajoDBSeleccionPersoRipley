import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DistritoService {
  private API_SERVER ="http://localhost:8080/distrito/";
  constructor(
    private httpClient:HttpClient
  ) { }
  public getAllDistritobyProvincia(idProvincia):Observable<any>{
    return this.httpClient.get(this.API_SERVER+idProvincia)
  }
}
