import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
