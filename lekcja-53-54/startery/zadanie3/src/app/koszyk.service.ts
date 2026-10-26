// - [ ] ETAP A: sprawdź dane wejściowe.
// - [ ] ETAP B: zaimplementuj logikę i uruchom próbę.
// - [ ] ETAP C: przygotuj wynik i sprawdź granicę.

import { Injectable, signal, computed } from '@angular/core';

@Injectable({providedIn:'root'})
export class KoszykService {
pozycje=signal([{id:1,nazwa:'Notes',cena:12,sztuki:1},{id:2,nazwa:'Długopis',cena:5,sztuki:1}]);
// TODO: metody i powiązania wynikające z polecenia.
}
