// - [ ] ETAP A: sprawdź dane wejściowe.
// - [ ] ETAP B: zaimplementuj logikę i uruchom próbę.
// - [ ] ETAP C: przygotuj wynik i sprawdź granicę.

import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({selector: 'app-root',standalone: true,imports: [FormsModule],templateUrl: './app.html',styleUrl: './app.css'})
export class App {
imie = '';
miejsca: number | null = 1;
kurs = 'python';
laptop = false;
blad = '';
ostatnia: {imie:string; miejsca:number; kurs:string; kwota:number} | null = null;
// TODO: metody i powiązania wynikające z polecenia.
}
