import { Component, signal, computed } from '@angular/core';

@Component({selector: 'app-root',standalone: true,template:'<p>Uzupełnij zadanie.</p>'})
export class App {
produkty = signal([{id:1,nazwa:'Notes',cena:12},{id:2,nazwa:'Długopis',cena:5}]);
// TODO: metody i powiązania wynikające z polecenia.
}
