import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
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
  registerForm;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegistroService
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      birth: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  __onSubmit() {
    // console.log(this.registerForm.value);
    // this.router.navigate(['/cuenta']);
    this.registerService
      .register(this.registerForm.value)
      .subscribe((response) => {
        console.log(response);
      });
  }

  ngOnInit(): void {}
}
