import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(payload: any) {
    return this.http.post(
      'https://localhost:44309/api/user/login',
      payload
    );
  }
}
