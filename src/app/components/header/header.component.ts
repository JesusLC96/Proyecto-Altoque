import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  token = sessionStorage.getItem('token');
  user = sessionStorage.getItem('user');

  menu = [
    {
      name: 'Inicio',
      route: '/inicio',
    },
    {
      name: 'Nosotros',
      route: '/nosotros',
    },
    //{
    //   name: 'Servicios',
    //   route: '/servicios',
    // },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
