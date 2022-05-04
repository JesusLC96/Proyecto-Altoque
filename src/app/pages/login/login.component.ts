import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm;
  loginLoading = false;
  hasLoginErrors = false;

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

  onSubmit() {
    this.loginLoading = true;

    this.loginService.login(this.loginForm.value).subscribe((response: any) => {
      if (response.issuccess) {
        this.hasLoginErrors = false
        sessionStorage.setItem('user', response.data.name + ' ' + response.data.lastname)
        sessionStorage.setItem('token', response.data.token)
        this.router.navigate(['/cuenta'])
      } else {
        this.hasLoginErrors = true
      }
      this.loginLoading = false;
    });
  }

  ngOnInit(): void { }
}
