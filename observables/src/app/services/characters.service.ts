import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private baseUrl: string = "https://rickandmortyapi.com/api/character/"
  constructor(private httpClient: HttpClient) { }

  getAll(pUrl: string = this.baseUrl): Observable<any> {
    return this.httpClient.get<any>(pUrl)
  }

  filterByGender(pGender: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}?gender=${pGender}`)
  }

  filterByName(pName: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}?name=${pName}`);
  }
}
