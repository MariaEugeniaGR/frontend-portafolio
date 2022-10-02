import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skilli } from '../model/skilli';

@Injectable({
  providedIn: 'root'
})
export class SkilliService {
  URL = 'https://backend-maru-portafolio.herokuapp.com/skilli/';
 
  constructor(private httpClient : HttpClient) {}
  
  public lista(): Observable<Skilli[]> {
    return this.httpClient.get<Skilli[]>(this.URL + 'lista');
  }
  
  public detail(id: number): Observable<Skilli>{
    return this.httpClient.get<Skilli>(this.URL + `detail/${id}`);
  }
  
  public save(skill: Skilli): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', skill);
  }
  
  public update(id: number, skill: Skilli): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, skill);
  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
