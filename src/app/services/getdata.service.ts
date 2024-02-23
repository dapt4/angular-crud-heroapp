import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SuperheroT } from '../types/SuperheroT';

@Injectable({
  providedIn: 'root',
})
export class GetdataService {
  private URL = 'https://gist.githubusercontent.com/dapt4/f94db05256efefc53af46e098bfc36f2/raw/43a3dffb52f908fec7929caf45e61c9b3996366b/superheros.json';
  constructor(private http: HttpClient) {}

  public getAll(): Observable<SuperheroT[]> {
    return this.http.get<SuperheroT[]>(this.URL);
  }
}
