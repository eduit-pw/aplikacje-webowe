import { Component, signal, computed } from '@angular/core';
@Component({selector:'app-root', standalone:true, template:`
<button (click)="dodaj()">Dodaj</button><p>Liczba: {{ liczba }}</p>
@for (n of numery(); track n) { <span>{{ n }} </span> }
`})
export class App {
  numery = signal([1]);
  liczba = computed(() => this.numery.length);
  dodaj():void {
    this.numery().push(this.numery().length + 1);
  }
}
