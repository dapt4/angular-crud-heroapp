import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetoneService {

  constructor(private http: HttpClient) { }

  one(id: string): Observable<Object> {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`
    return this.http.get<Object>(url)
  }
}
