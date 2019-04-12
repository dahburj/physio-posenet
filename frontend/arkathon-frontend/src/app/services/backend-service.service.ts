import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  private BASE_URL: string  = 'https://physio.test.sqooba.io/api/';

  constructor(private http: HttpClient) { }

  getPoses(): Observable<any> {
    return this.http.get(
      this.BASE_URL + 'poses', httpOptions);
  }
}
