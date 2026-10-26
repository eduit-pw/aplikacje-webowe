// - [ ] ETAP A: sprawdź dane wejściowe.
// - [ ] ETAP B: zaimplementuj logikę i uruchom próbę.
// - [ ] ETAP C: przygotuj wynik i sprawdź granicę.

import { Component } from '@angular/core';

@Component({selector: 'app-root',standalone: true,imports: [],templateUrl: './app.html',styleUrl: './app.css'})
export class App {
natura = true;
architektura = true;
zdjecia = [{id:1,nazwa:'Las',kategoria:'natura',plik:'las.svg',pobrania:0},
{id:2,nazwa:'Morze',kategoria:'natura',plik:'morze.svg',pobrania:0},
{id:3,nazwa:'Miasto',kategoria:'architektura',plik:'miasto.svg',pobrania:0}];
// TODO: metody i powiązania wynikające z polecenia.
}
