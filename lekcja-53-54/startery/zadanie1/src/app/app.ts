import { Component, inject } from '@angular/core';

import { KoszykService } from './koszyk.service';

@Component({selector: 'app-root',standalone: true,template:'<p>Uzupełnij zadanie.</p>'})
export class App {
koszyk=inject(KoszykService);
// TODO: metody i powiązania wynikające z polecenia.
}
