import { Injectable, signal, computed } from '@angular/core';
export interface PunktKontroli { id:number;opis:string;wykonany:boolean }
@Injectable({providedIn:'root'})
export class KontrolaService {
  lista=signal<PunktKontroli[]>([
    {id:1,opis:'Zamknij okna',wykonany:false},
    {id:2,opis:'Odłącz projektor',wykonany:false},
    {id:3,opis:'Sprawdź porządek',wykonany:false}
  ]);
  // TODO: gotowe, postep oraz metody przelacz i dodaj.
}
