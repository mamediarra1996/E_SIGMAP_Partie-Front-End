import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actualite } from './actualite';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {
  private baseURL="http://localhost:8084/actualite/"
    constructor(private httpClient: HttpClient) { }
    
    getActualite():Observable<Actualite[]>{
    return this.httpClient.get<Actualite[]>(this.baseURL);
   }
}

