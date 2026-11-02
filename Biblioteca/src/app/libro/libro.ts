import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/Forms';

interface MostrarLibro{
  id: number;
  titulo: string;
  autor: string;
}

@Component({
  imports: [FormsModule],
  selector: 'app-libro',
  styleUrl: './libro.css',
  templateUrl: './libro.html',
})
export class Libro {

  id = '';
  titulo = ''
  autor = '';

  libros: MostrarLibro[] = [];

  constructor(private router: Router) {

    const datos = localStorage.getItem('sesionLibro');

    if (datos) {
      this.libros = JSON.parse(datos);
    }
  }

  eliminarLibro(indice: number) {
    this.libros.splice(indice, 1);
    localStorage.setItem('sesionLibro', JSON.stringify(this.libros));
  }

  guardarLibro() {

    const nuevoLibro: MostrarLibro = {
      id: parseInt(this.id),
      titulo: this.titulo,
      autor: this.autor
    };

    
    localStorage.setItem('sesionLibro', JSON.stringify(this.libros));

    this.libros.push(nuevoLibro);

    this.id = '';
    this.titulo = '';
    this.autor = '';
    
  }

  guardarEnLocalStorage(libros: MostrarLibro[]) {
    localStorage.setItem('sesionLibro', JSON.stringify(libros));
  }

  limpiar() {
    this.id = '';
    this.titulo = '';
    this.autor = '';
  }

  cerrarSesion() {
    localStorage.removeItem('sesionLibro');
    this.router.navigate(['/Login']);
  }

}
