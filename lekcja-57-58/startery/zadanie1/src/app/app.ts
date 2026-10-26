import { Component } from '@angular/core';
interface Przesylka { id:number; etykieta:string; odebrana:boolean }
@Component({selector:'app-root',standalone:true,template:`<h1>Lista przesyłek</h1><!-- TODO: lista i przyciski -->`})
export class App {
  przesylki:Przesylka[] = [{id:101,etykieta:'E-14',odebrana:false},
    {id:202,etykieta:'E-27',odebrana:false},{id:303,etykieta:'E-39',odebrana:false}];
  odbierz(id:number):void { /* TODO */ }
}
