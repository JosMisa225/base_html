import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  imports: [],
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})
export class Calculadora {
readonly a = 0;
readonly b = 0; 
readonly resultado = signal(0);
}
