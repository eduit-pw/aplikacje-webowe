import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({selector: 'app-root',standalone: true,imports: [FormsModule],templateUrl: './app.html',styleUrl: './app.css'})
export class App {
nazwa = '';
cena: number | null = null;
kategoria = 'papier';
dostepny = true;
komunikat = '';
// TODO: metody i powiązania wynikające z polecenia.
}
