import { Component, signal, computed } from '@angular/core';
@Component({selector:'app-root',standalone:true,template:`
<button (click)="sztuki.update(plus)">Dodaj</button><p>{{ sztuki() }} / {{ razem() }}</p>`})
export class App {
 sztuki=signal(1); razem=(()=>{const zapis=this.sztuki()*5;return ()=>zapis;})();
 plus=(n:number)=>n+1;
}
