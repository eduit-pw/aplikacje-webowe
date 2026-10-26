import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KontrolaService } from './kontrola.service';
@Component({selector:'trening-lista',standalone:true,template:'<p>TODO: lista kontroli</p>'})
export class Lista { dane=inject(KontrolaService); }
@Component({selector:'trening-postep',standalone:true,template:'<p>TODO: podsumowanie</p>'})
export class Postep { dane=inject(KontrolaService); }
@Component({selector:'app-root',standalone:true,imports:[Lista,Postep,FormsModule],
 template:'<h1>Lista kontroli pracowni</h1><!-- TODO: komponenty i formularz -->'})
export class App {
  dane=inject(KontrolaService);
  opis='';blad='';
  dodaj():void { /* TODO */ }
}
