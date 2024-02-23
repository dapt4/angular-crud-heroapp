import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteheroService {

  constructor(private http: HttpClient) { }

  del(id: number): Observable<Object>{
    const URL = `https://jsonplaceholder.typicode.com/posts/${id}`
    return this.http.delete<Object>(URL)
  }
}
