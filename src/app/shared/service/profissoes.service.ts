import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class ProfissoesService {

  apiUrl = environment.URL_API+"/profissoes";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) { }
  

  public getProfissaoPageable(page: string, size: string): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl+"/?page=" + page + "&size=" + size, this.httpOptions)
  }

  public postProfissao(profissao: any) {
    return this.httpClient.post(this.apiUrl, profissao, this.httpOptions);
  }

  public putProfissao(profissao: any) {
    return this.httpClient.put(this.apiUrl, profissao, this.httpOptions);
  }

}
