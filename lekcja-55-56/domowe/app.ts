import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Kurs { id:number; nazwa:string; cena:number; }
@Component({selector:'app-root', standalone:true, template:`
<button (click)="pobierz()" [disabled]="ladowanie">Odśwież</button>
@if (ladowanie) { <p>Ładowanie</p> }
<p>{{ blad }}</p>
@for (k of kursy; track k.id) { <p>{{ k.nazwa }}</p> }
`})
export class App {
  private http = inject(HttpClient);
  kursy:Kurs[]=[]; blad=''; ladowanie=false;
  constructor() { this.pobierz(); }
  pobierz():void {
    this.ladowanie=false; this.blad=''; this.kursy=[];
    this.http.get<Kurs[]>('/api/kurs').subscribe({
      next:dane => { this.kursy=dane; this.ladowanie=false; },
      error:() => { this.blad='Błąd pobierania'; }
    });
  }
}
