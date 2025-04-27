import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    protected http: HttpClient,
    ) { }



  addUser(request: any): Observable<any> {
    return this.http.post<any>('/api/user', request)
  }
}
