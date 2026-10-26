import { Component } from '@angular/core';
@Component({selector:'app-root',standalone:true,template:`
<button (click)="tylkoA=!tylkoA">Przełącz filtr</button>
@for (x of widoczne; track x) { <p>{{ x }}</p> }`})
export class App {
 dane=['A','B']; tylkoA=false;
 get widoczne(){return this.dane=this.dane.filter(x=>!this.tylkoA || x==='A');}
}
