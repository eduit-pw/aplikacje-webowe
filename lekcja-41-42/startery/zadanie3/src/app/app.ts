// - [ ] ETAP A: sprawdź dane wejściowe.
// - [ ] ETAP B: zaimplementuj logikę i uruchom próbę.
// - [ ] ETAP C: przygotuj wynik i sprawdź granicę.

import { Component } from '@angular/core';

interface Zdjecie { id: number; nazwa: string; plik: string; pobrania: number }

@Component({selector: 'app-root',standalone: true,imports: [],templateUrl: './app.html',styleUrl: './app.css'})
export class App {
zdjecia: Zdjecie[] = [
{id:1,nazwa:'Las',plik:'las.svg',pobrania:0},
{id:2,nazwa:'Morze',plik:'morze.svg',pobrania:2},
{id:3,nazwa:'Góry',plik:'gory.svg',pobrania:0}];
// TODO: metody i powiązania wynikające z polecenia.
}
