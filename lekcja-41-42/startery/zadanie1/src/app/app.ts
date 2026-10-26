import { Component } from '@angular/core';

@Component({selector: 'app-root',standalone: true,template:'<p>Uzupełnij zadanie.</p>'})
export class App {
produkty: { id: number; nazwa: string; cena: number }[] = [{id:11,nazwa:'Notes',cena:12},{id:22,nazwa:'Długopis',cena:5}];
// TODO: metody i powiązania wynikające z polecenia.
}
