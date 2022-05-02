import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
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
  loginForm;
  loginLoading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  __onSubmit() {
    // console.log(this.loginForm.value);
    //  this.router.navigate(['/cuenta']);
    this.loginLoading = true;

    this.loginService.login(this.loginForm.value).subscribe((response) => {
      console.log(response);
      this.loginLoading = false;
    });
  }

  ngOnInit(): void {}
}
