import { Component } from '@angular/core';
@Component({selector:'app-root', standalone:true, template:`
@for (osoba of osoby; track 1; let i = $index) {
  <p>{{ i }}. {{ osoba.imie }}
  <button (click)="usun(osoba.id)">Usuń</button></p>
} @empty { <p>Brak zawodników</p> }
`})
export class App {
  osoby = [{id:11, imie:'Ada'}, {id:22, imie:'Ola'}];
  usun(id:number):void { this.osoby = this.osoby.filter(o => o.id === id); }
}
