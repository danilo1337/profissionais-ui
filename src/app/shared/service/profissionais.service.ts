import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { ResponsePageable } from '../model/responsePageable.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfissionaisService {

  apiUrl = environment.URL_API;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(
    private httpClient: HttpClient
  ) {}

  public getProfissaoPageable(page:string, size:string): Observable<ResponsePageable>{
    return this.httpClient.get<ResponsePageable>(this.apiUrl+ '/profissoes/?page='+page+'&size='+size, this.httpOptions)
  }
  
  public postProfissao(profissao : any){
    return this.httpClient.post(this.apiUrl+ '/profissoes', profissao,this.httpOptions);
 }

 public putProfissao(profissao : any){
  return this.httpClient.put(this.apiUrl+ '/profissoes', profissao,this.httpOptions);
}

  public postProfissional(profissional : any){
     return this.httpClient.post(this.apiUrl+ '/profissionais', profissional,this.httpOptions);
  }

  public getProfissional(): Observable<ResponsePageable>{
    return this.httpClient.get<ResponsePageable>(this.apiUrl+ '/profissionais', this.httpOptions)
 }

 public getProfissionalPageable(page:string, size:string): Observable<ResponsePageable>{
  return this.httpClient.get<ResponsePageable>(this.apiUrl+ '/profissionais/?page='+page+'&size='+size, this.httpOptions)
}

}
