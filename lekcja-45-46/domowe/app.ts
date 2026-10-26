import { Component, input, output } from '@angular/core';
interface Rekord { id:number; nazwa:string; }
@Component({selector:'app-karta', standalone:true, template:`
<p>{{ rekord.nazwa }} <button (click)="usunieto.emit(11)">Usuń</button></p>
`})
export class Karta {
  rekord = input.required<Rekord>();
  usunieto = output<number>();
}
@Component({selector:'app-root', standalone:true, imports:[Karta], template:`
@for (r of dane; track r.id) {
  <app-karta [rekord]="r" (usunieto)="usun($event)" />
}
`})
export class App {
  dane = [{id:11,nazwa:'Kawa'}, {id:22,nazwa:'Herbata'}];
  usun(id:number):void { this.dane = this.dane.filter(r => r.id === id); }
}
