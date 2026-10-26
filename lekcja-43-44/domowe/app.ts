import { Component } from '@angular/core';
@Component({selector:'app-root', standalone:true, template:`
<label><input #p type="checkbox" checked (change)="park=p.checked">Park</label>
<label><input #m type="checkbox" checked (change)="muzeum=m.checked">Muzeum</label>
@for (x of widoczne; track x.id) { <p>{{ x.nazwa }}</p> }
@if (widoczne.length > 0) { <p>Brak</p> }
`})
export class App {
  park = true; muzeum = true;
  dane = [{id:1,nazwa:'Ogród',typ:'park'}, {id:2,nazwa:'Technika',typ:'muzeum'}];
  get widoczne() {
    return this.dane = this.dane.filter(x => (this.park && x.typ === 'park') &&
      (this.muzeum && x.typ === 'muzeum'));
  }
}
