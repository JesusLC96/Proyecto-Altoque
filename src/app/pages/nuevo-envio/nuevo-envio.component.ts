import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnviosService } from 'src/app/services/envios.service';

@Component({
  selector: 'app-nuevo-envio',
  templateUrl: './nuevo-envio.component.html',
  styleUrls: ['./nuevo-envio.component.css']
})
export class NuevoEnvioComponent implements OnInit {
  nuevoEnvioForm: FormGroup

  token = sessionStorage.getItem('token');
  user = sessionStorage.getItem('user');

  nuevoEnvioLoading = false;
  hasNuevoEnvioErrors = false;
  constructor(private fb: FormBuilder, private enviosService: EnviosService, private router: Router) {
    this.nuevoEnvioForm = this.fb.group({
      src_add: ['', Validators.required],
      dest_add: ['', Validators.required],
      price: ['', Validators.required],
      weight: ['', Validators.required],
      paquete: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    if (this.token && this.user) {
      // todo
    } else {
      this.router.navigate(['/login'])
    }
  }

  onSubmit() {
    const token = sessionStorage.getItem('token')
    const header = { Authorization: 'Bearer ' + token }
    this.nuevoEnvioLoading = true;

    this.enviosService.createEnvios(this.nuevoEnvioForm.value, header).subscribe((response: any) => {
      if (response.issuccess) {
        this.hasNuevoEnvioErrors = false
        //sessionStorage.setItem('user', response.data.name + ' ' + response.data.lastname)
        //sessionStorage.setItem('token', response.data.token)
        this.router.navigate(['/cuenta'])
      } else {
        this.hasNuevoEnvioErrors = true
      }
      this.nuevoEnvioLoading = false;
    });
  }
}
