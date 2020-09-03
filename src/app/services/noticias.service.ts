import { RespuestaTopHeadlines } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadlines(){
    return this.http.get<RespuestaTopHeadlines>(`https://rickandmortyapi.com/api/character`);
  }

}
