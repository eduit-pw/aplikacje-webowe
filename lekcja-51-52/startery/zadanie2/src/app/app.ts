import { Component } from '@angular/core';

import { NgClass, NgStyle } from '@angular/common';

@Component({selector: 'app-root',standalone: true,imports: [NgClass, NgStyle],templateUrl: './app.html',styleUrl: './app.css'})
export class App {
dostepny=true;
rozmiar=18;
// TODO: metody i powiązania wynikające z polecenia.
}
