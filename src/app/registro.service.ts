import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegistroService {
  constructor(private http: HttpClient) {}

  register(payload: any) {
    return this.http.post(
      'https://localhost:44309/api/user/registerUser',
      payload
    );
  }
}
