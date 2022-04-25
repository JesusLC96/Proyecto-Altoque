import { Component, OnInit } from '@angular/core';
import { EnviosService } from '../envios.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css'],
})
export class CuentaComponent implements OnInit {
  menu = [
    {
      name: 'Inicio',
      route: '/inicio',
    },
    {
      name: 'Nosotros',
      route: '/nosotros',
    },
    {
      name: 'Servicios',
      route: '/servicios',
    },
  ];

  lista: any[] = [];

  constructor(private enviosService: EnviosService) { }

  ngOnInit(): void {
    this.enviosService.getEnvios().subscribe((res: any) => {
      // this.lista = res;
      console.log(res)
      this.lista = res.data
    });
  }
}
