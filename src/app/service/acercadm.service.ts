import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acercadm } from '../model/acercadm';

@Injectable({
  providedIn: 'root'
})
export class AcercadmService {
  URL = 'https://backend-maru-portafolio.herokuapp.com/acercadm/';
 
  constructor(private httpClient : HttpClient) {}
  
  public lista(): Observable<Acercadm[]>{
    return this.httpClient.get<Acercadm[]>(this.URL + 'lista');
  }
  
  public detail(id: number): Observable<Acercadm>{
    return this.httpClient.get<Acercadm>(this.URL + `detail/${id}`);
  }
  
  public save(acercadm: Acercadm): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', acercadm);
  }
  
  public update(id: number,acercadm : Acercadm): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, acercadm);
  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
