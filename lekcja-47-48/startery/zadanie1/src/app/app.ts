import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({selector: 'app-root',standalone: true,imports: [FormsModule],template:'<p>Uzupełnij zadanie.</p>'})
export class App {
imie = '';
// TODO: metody i powiązania wynikające z polecenia.
}
