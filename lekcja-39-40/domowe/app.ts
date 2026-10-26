import { Component } from '@angular/core';
@Component({selector:'app-root', standalone:true, template:`
<h1>Porcje: {{ porcje }}</h1>
<button (click)="plus">Plus</button>
<button (click)="minus()" disabled="false">Minus</button>
`})
export class App {
  porcje = 1;
  plus(): void { this.porcje += 1; }
  minus(): void { if (this.porcje >= 1) this.porcje -= 1; }
}
