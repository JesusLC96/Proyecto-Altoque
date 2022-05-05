import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnviosService } from '../../services/envios.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css'],
})
export class CuentaComponent implements OnInit {

  lista: any[] = [];

  constructor(private router: Router, private enviosService: EnviosService) { }
  token = sessionStorage.getItem('token');
  user = sessionStorage.getItem('user');


  ngOnInit(): void {
    if (this.token && this.user) {
      const token = sessionStorage.getItem('token')
      const header = { Authorization: 'Bearer ' + token }

      this.enviosService.getEnvios(header).subscribe((res: any) => {
        this.lista = res.data
        console.log(res)
      });
    } else {
      this.router.navigate(['/login'])
    }
  }
}
