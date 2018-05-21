import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private url: string = '//localhost:8080/';
  constructor( private http: HttpClient) { }

  login(): Observable<any> {
    return this.http.get( this.url + 'login');
  }

  getAll(): Observable<any> {
    return this.http.get( this.url + 'list_rutas');
  }

}
