import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({selector:'app-root',standalone:true,imports:[FormsModule],template:`<h1>Koszt przejazdu</h1><!-- TODO: formularz i podgląd -->`})
export class App {
  kilometry:number|null=null;
  stawka:number|null=0.9;
  get poprawne():boolean { return false; }
  get kwota():number { return 0; }
  reset():void { /* TODO */ }
}
