import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- 1. Importar esto

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule], // <-- 2. Agregar esto aquí
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})
export class Calculadora {
  readonly a = signal(0);
  readonly b = signal(0);
  readonly resultado = signal(0);

  sumar(): void {
    this.resultado.set(Number(this.a()) + Number(this.b()));
  }
}