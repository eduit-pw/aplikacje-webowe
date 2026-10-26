import { Component, Injectable, inject, signal } from '@angular/core';
@Injectable({providedIn:'root'}) export class Stan { liczba=signal(0); }
@Component({selector:'app-akcja',standalone:true,providers:[Stan],template:`
<button (click)="s.liczba.set(s.liczba()+1)">Dodaj alert</button>`})
export class Akcja { s=inject(Stan); }
@Component({selector:'app-root',standalone:true,imports:[Akcja],template:`
<app-akcja/><p>Alerty: {{ s.liczba() }}</p>`})
export class App { s=inject(Stan); }
