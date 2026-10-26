// - [ ] ETAP A: sprawdź dane wejściowe.
// - [ ] ETAP B: zaimplementuj logikę i uruchom próbę.
// - [ ] ETAP C: przygotuj wynik i sprawdź granicę.

import { Component } from '@angular/core';

import { NgClass, NgStyle } from '@angular/common';

enum Status { Nowe='nowe', WRealizacji='w-realizacji', Gotowe='gotowe' }

@Component({selector: 'app-root',standalone: true,imports: [NgClass, NgStyle],templateUrl: './app.html',styleUrl: './app.css'})
export class App {

// TODO: metody i powiązania wynikające z polecenia.
}
