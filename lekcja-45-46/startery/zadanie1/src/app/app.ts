import { Component } from '@angular/core';

import { Karta, Produkt } from './karta';

@Component({selector: 'app-root',standalone: true,imports: [Karta],template:'<p>Uzupełnij zadanie.</p>'})
export class App {
produkt: Produkt = {id:1,nazwa:'Notes',cena:12};
// TODO: metody i powiązania wynikające z polecenia.
}
