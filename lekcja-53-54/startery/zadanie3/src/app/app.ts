// - [ ] ETAP A: sprawdź dane wejściowe.
// - [ ] ETAP B: zaimplementuj logikę i uruchom próbę.
// - [ ] ETAP C: przygotuj wynik i sprawdź granicę.

import { Component } from '@angular/core';

import { Lista } from './lista';

import { Podsumowanie } from './podsumowanie';

@Component({selector: 'app-root',standalone: true,imports: [Lista, Podsumowanie],templateUrl: './app.html',styleUrl: './app.css'})
export class App {

// TODO: metody i powiązania wynikające z polecenia.
}
