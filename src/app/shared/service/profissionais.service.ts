import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { ResponsePageable } from '../model/responsePageable.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfissionaisService {

  apiUrl = environment.URL_API+"/profissionais";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(
    private httpClient: HttpClient
  ) { }

  public getProfissionalPageable(page: string, size: string): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl + "/?page=" + page + "&size=" + size, this.httpOptions)
  }
  public postProfissional(profissional: any) {
    return this.httpClient.post(this.apiUrl, profissional, this.httpOptions);
  }
  public putProfissao(profissional: any) {
    return this.httpClient.put(this.apiUrl, profissional, this.httpOptions);
  }

}
