import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({selector:'app-oferta',standalone:true,template:'Oferta'}) export class Oferta {}
@Component({selector:'app-info',standalone:true,template:'Informacje'}) export class Informacje {}
@Component({selector:'app-root',standalone:true,imports:[RouterLink,RouterOutlet],template:`
<a routerLink="/oferta">Oferta</a> <a routerLink="/info">Informacje</a><router-outlet/>`})
export class App {}
