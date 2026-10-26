// - [ ] ETAP A: sprawdź dane wejściowe.
// - [ ] ETAP B: zaimplementuj logikę i uruchom próbę.
// - [ ] ETAP C: przygotuj wynik i sprawdź granicę.

import { Component, signal, computed } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({selector: 'app-root',standalone: true,imports: [FormsModule],templateUrl: './app.html',styleUrl: './app.css'})
export class App {
rezerwacje = signal([{id:1,imie:'Anna',miejsca:2},{id:2,imie:'Bartek',miejsca:1}]);
nastepneId=3;
imie='';
miejsca:number|null=1;
blad='';
// TODO: metody i powiązania wynikające z polecenia.
}
