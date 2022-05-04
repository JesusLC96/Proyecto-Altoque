import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnviosService {
  constructor(private http: HttpClient) { }

  getEnvios(headers: any) {
    return this.http.get('https://localhost:44309/api/envios/listarenvios', { headers });
  }

  createEnvios(data: any, headers: any) {
    return this.http.post('https://localhost:44309/api/envios/registrarNuevoEnvio', data, { headers });
  }
}
