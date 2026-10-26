import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({selector:'app-root', standalone:true, imports:[FormsModule], template:`
<form (ngSubmit)="zapisz()">
  <input [(ngModel)]="imie">
  <button type="submit">Zapisz</button>
</form><p>{{ imie }}</p><p>{{ blad }}</p>
`})
export class App {
  imie = ''; podsumowanie = ''; blad = '';
  zapisz():void {
    if (!this.imie) { this.blad='Podaj imię'; return; }
    this.podsumowanie = this.imie.trim();
    this.blad = '';
  }
}
