import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {SuperheroT} from '../types/SuperheroT';
import {SuperheroData} from '../types/SuperheroData';

@Injectable({
  providedIn: 'root'
})
export class NewheroService {

  constructor(private http: HttpClient) { }

  newHero(data: SuperheroData): Observable<SuperheroT> {
    const url = `https://jsonplaceholder.typicode.com/posts`
    return this.http.post<SuperheroT>(url, data)
  }
}
