import { Component, input, output } from '@angular/core';
@Component({selector:'trening-etykieta',standalone:true,template:'<p>TODO: wejście i przycisk</p>'})
export class Etykieta { /* TODO: tytul i wskazano */ }
@Component({selector:'app-root',standalone:true,imports:[Etykieta],template:'<h1>Wiadomości komponentów</h1>'})
export class App { ostatnia='Brak'; }
