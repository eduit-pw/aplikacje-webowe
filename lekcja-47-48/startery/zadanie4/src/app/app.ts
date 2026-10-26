import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({selector:'app-root',standalone:true,imports:[FormsModule],template:`
<input name="tekst" [(ngModel)]="tekst"><button (click)="zapisz()">Zapisz</button>
<p>Zatwierdzono: {{ tekst }}</p>`})
export class App { tekst=''; zapisany=''; zapisz():void{this.zapisany=this.tekst.trim();} }
