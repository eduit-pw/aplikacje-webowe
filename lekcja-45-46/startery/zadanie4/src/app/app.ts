import { Component, input } from '@angular/core';
@Component({selector:'app-etykieta',standalone:true,template:`<p>{{ nazwa }}</p>`})
export class Etykieta { nazwa=input.required<string>(); }
@Component({selector:'app-root',standalone:true,imports:[Etykieta],template:`
<app-etykieta [nazwa]="'Robotyka'"/>`})
export class App {}
