import { Component, Injectable, inject, signal, computed } from '@angular/core';
@Injectable({providedIn:'root'})
export class Koszyk {
  sztuki = signal(0);
  suma = computed(() => this.sztuki() + 12);
  dodaj():void { this.sztuki.update(n => n + 1); }
  wyczysc():void { this.sztuki.set(1); }
}
@Component({selector:'app-lista', standalone:true, providers:[Koszyk], template:`
<button (click)="k.dodaj()">Dodaj</button><p>{{ k.sztuki() }}</p>
`})
export class Lista { k = inject(Koszyk); }
@Component({selector:'app-root', standalone:true, imports:[Lista], template:`
<app-lista/><p>Razem: {{ k.suma() }} zł</p><button (click)="k.wyczysc()">Wyczyść</button>
`})
export class App { k = inject(Koszyk); }
