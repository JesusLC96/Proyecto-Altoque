import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
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
    this.registerService
      .register(this.registerForm.value)
      .subscribe((response: any) => {
        console.log(response);
      });
  }

  ngOnInit(): void {}
}
