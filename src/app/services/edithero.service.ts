import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {SuperheroData} from '../types/SuperheroData';
import {SuperheroT} from '../types/SuperheroT';

@Injectable({
  providedIn: 'root'
})
export class EditheroService {

  constructor(private http: HttpClient) { }

  edit(id: string, data: SuperheroData): Observable<SuperheroT> {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`
    return this.http.put<SuperheroT>(url, data)
  }
}
