import { Component, inject, signal } from '@angular/core';

import { HttpClient } from '@angular/common/http';

interface Produkt {id:number;nazwa:string;cena:number}

@Component({standalone:true,selector:'app-oferta',template:'<p>Uzupełnij zadanie.</p>'})
export class Oferta {
private http=inject(HttpClient);
produkty=signal<Produkt[]>([]);
ladowanie=signal(false);
blad=signal(false);
// TODO: metody i powiązania wynikające z polecenia.
}
