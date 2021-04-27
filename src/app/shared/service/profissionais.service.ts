import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { ResponsePageable } from '../model/responsePageable.model';
import { Observable } from 'rxjs';
import { Profissao } from '../model/profissao.model';
import { Profissional } from '../model/profissional.model';

@Injectable({
  providedIn: 'root'
})
export class ProfissionaisService {

  apiUrl = 'http://localhost:9090';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(
    private httpClient: HttpClient
  ) {}

  public getProfissaoPageable(page:string, size:string): Observable<ResponsePageable>{
    return this.httpClient.get<ResponsePageable>(this.apiUrl+ '/profissao/?page='+page+'&size='+size, this.httpOptions)
  }
  
  public postProfissao(profissao : any){
    return this.httpClient.post(this.apiUrl+ '/profissao', profissao,this.httpOptions);
 }

 public putProfissao(profissao : any){
  return this.httpClient.put(this.apiUrl+ '/profissao', profissao,this.httpOptions);
}

  public postProfissional(profissional : any){
     return this.httpClient.post(this.apiUrl+ '/profissional', profissional,this.httpOptions);
  }

  public getProfissional(): Observable<ResponsePageable>{
    return this.httpClient.get<ResponsePageable>(this.apiUrl+ '/profissional', this.httpOptions)
 }

 public getProfissionalPageable(page:string, size:string): Observable<ResponsePageable>{
  return this.httpClient.get<ResponsePageable>(this.apiUrl+ '/profissional/?page='+page+'&size='+size, this.httpOptions)
}

}
