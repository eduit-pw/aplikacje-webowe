// - [ ] ETAP A: sprawdź dane wejściowe.
// - [ ] ETAP B: zaimplementuj logikę i uruchom próbę.
// - [ ] ETAP C: przygotuj wynik i sprawdź granicę.

import { Component } from '@angular/core';

import { Karta, Produkt } from './karta';

@Component({selector: 'app-root',standalone: true,imports: [Karta],templateUrl: './app.html',styleUrl: './app.css'})
export class App {
produkty: Produkt[] = [{id:1,nazwa:'Notes',cena:12},{id:2,nazwa:'Długopis',cena:5},{id:3,nazwa:'Teczka',cena:8}];
// TODO: metody i powiązania wynikające z polecenia.
}
