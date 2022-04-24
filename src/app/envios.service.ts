import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnviosService {
  constructor(private http: HttpClient) {}

  getEnvios() {
    return this.http.get('');
  }
}
