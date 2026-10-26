import { Component } from '@angular/core';

import { UpperCasePipe, DatePipe, CurrencyPipe } from '@angular/common';

@Component({selector: 'app-root',standalone: true,imports: [UpperCasePipe, DatePipe, CurrencyPipe],templateUrl: './app.html',styleUrl: './app.css'})
export class App {
nazwa='Notes';
data='2026-10-04';
kwota=17;
// TODO: metody i powiązania wynikające z polecenia.
}
