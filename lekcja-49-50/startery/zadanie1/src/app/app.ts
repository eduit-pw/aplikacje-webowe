import { Component, signal } from '@angular/core';

@Component({selector: 'app-root',standalone: true,template:'<p>Uzupełnij zadanie.</p>'})
export class App {
sztuki = signal(0);
// TODO: metody i powiązania wynikające z polecenia.
}
