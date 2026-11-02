import { Component } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  usuario = '';
  clave = '';

  constructor(private router: Router) {}

  iniciarSesion() {
    if (this.usuario === 'admin' && this.clave === 'admin') {
    alert('Uusario y contraseña correctos');
    } else {
      alert('Usuario o clave incorrectos');
    }
  }

  cerrarSesion() {
    this.usuario = '';
    this.clave = '';
    this.router.navigate(['/login']);
  }
  
}
