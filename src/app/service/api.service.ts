import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'http://localhost:8080/AppRest2-0.0.1-SNAPSHOT/webapi/clientes/buscarClientes/find/123450678933';

  constructor(private http:HttpClient) { }

  public getData():Observable<any>{

    return this.http.get<any>(this.urlApi);
  }
}
