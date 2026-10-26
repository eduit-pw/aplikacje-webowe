// - [ ] ETAP A: sprawdź dane wejściowe.
// - [ ] ETAP B: zaimplementuj logikę i uruchom próbę.
// - [ ] ETAP C: przygotuj wynik i sprawdź granicę.

import { Component, inject } from '@angular/core';

import { KoszykService } from './koszyk.service';

@Component({selector:'app-lista',standalone:true,template:'<p>Uzupełnij zadanie.</p>'})
export class Lista {
koszyk=inject(KoszykService);
// TODO: metody i powiązania wynikające z polecenia.
}
