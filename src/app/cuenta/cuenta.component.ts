import { Component, OnInit } from '@angular/core';

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

  lista = [
    {
      name: 'Christian Quispe',
      address_origin: 'Jr Nevado Huandoy 249',
      district_origin: 'San Juan de Lurigancho',
      address_destination: 'Av Industrial 1200',
      district_destination: 'Surquillo',
      weight: 2,
      status: 'En camino',
    },
    {
      name: 'Ruben Ochoa',
      address_origin: 'Jr Nevado Huandoy 249',
      district_origin: 'San Juan de Lurigancho',
      address_destination: 'Av Industrial 1200',
      district_destination: 'Surquillo',
      weight: 2,
      status: 'En camino',
    },
    {
      name: 'Adrian Zela',
      address_origin: 'Jr Nevado Huandoy 249',
      district_origin: 'San Juan de Lurigancho',
      address_destination: 'Av Industrial 1200',
      district_destination: 'Surquillo',
      weight: 2,
      status: 'Recogido',
    },
    {
      name: 'Carlos Alcantará',
      address_origin: 'Jr Nevado Huandoy 249',
      district_origin: 'San Juan de Lurigancho',
      address_destination: 'Av Industrial 1200',
      district_destination: 'Surquillo',
      weight: 2,
      status: 'Entregado',
    },
    {
      name: 'Jesus Narvaes',
      address_origin: 'Jr Nevado Huandoy 249',
      district_origin: 'San Juan de Lurigancho',
      address_destination: 'Av Industrial 1200',
      district_destination: 'Surquillo',
      weight: 2,
      status: 'Entregado',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
