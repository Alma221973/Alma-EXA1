import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface MostrarLibro{
  id: number;
  titulo: string;
  autor: string;
}

@Component({
  imports: [],
  selector: 'app-libro',
  styleUrl: './libro.css',
  templateUrl: './libro.html',
})
export class Libro {

  libros: MostrarLibro[] = [];

  constructor(private router: Router) {

    const datos = localStorage.getItem('sesionLibro');

    if (datos) {
      this.libros = JSON.parse(datos);
    }
  }

  cerrarSesion() {
    localStorage.removeItem('sesionLibro');
    this.router.navigate(['/Login']);
  }

}
