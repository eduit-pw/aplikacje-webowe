# Ćwiczenia: ES6+: funkcje, destrukturyzacja i metody tablic

## Przygotowanie

Utwórz pliki wymagane w zadaniach. Kod JavaScript uruchamiaj w przeglądarce; wyniki i błędy sprawdzaj w narzędziach deweloperskich (F12).

## Zadanie 1. Funkcja zwraca wartość

Napisz trzy funkcje strzałkowe: `kwota(cena, ilosc)` zwraca iloczyn; `etykieta(produkt)` pobiera przez destrukturyzację nazwę i cenę, zwraca tekst „nazwa: cena zł”; `obiekt(nazwa)` zwraca obiekt z polami `nazwa` oraz `aktywny: true`. Dla produktu `{nazwa: "Notes", cena: 12, stan: 4}` pobierz także nazwę i stan przez destrukturyzację. Utwórz kopię z polem `stan: 5` za pomocą spread; oryginał ma nadal stan 4.

Wypisz wyniki `kwota(12,3)`, etykiety i obiektu dla „Notes”, pobrane pola oraz stany oryginału i kopii. Przewidź różnicę między `x => x*2` a `x => { x*2; }`.

## Zadanie 2. Dobierz metodę do wyniku

Dane: `[3,8,2,5]`. Bez ręcznego przepisywania wyników utwórz: A - liczby podwojone `[6,16,4,10]`; B - parzyste `[8,2]`; C - sumę 18; D - pierwszą liczbę większą od 4, czyli 8; E - posortowaną kopię `[2,3,5,8]`. Oryginał ma pozostać `[3,8,2,5]`. Zastosuj metody tablic i funkcje strzałkowe. Wypisz sześć wyników.

Zapisz, dlaczego wybierasz `map` albo `filter`. Sprawdź też pustą tablicę: wyniki A, B, E to `[]`, C to 0, D to `undefined`.

## Zadanie 3. Raport magazynu

Zapisz tablicę produktów według tabeli:

| id | nazwa | cena | stan |
|---:|---|---:|---:|
| 1 | Notes | 12 | 4 |
| 2 | Długopis | 4 | 0 |
| 3 | Teczka | 8 | 5 |
| 4 | Marker | 10 | 2 |

Napisz funkcję `raport(dane, limit = 10)`, zwracającą obiekt z trzema polami: `etykiety`, `wartosc`, `kolejnosc`. Wybiera produkty z ceną nie większą niż limit i stanem większym od 0. Etykiety mają format „nazwa: cena zł” i kolejność z danych. Wartość jest sumą `cena × stan` wybranych produktów. Kolejność jest tablicą nazw wybranych produktów posortowanych rosnąco po cenie. Nie zmieniaj tablicy ani obiektów wejściowych. W callbackach wykorzystaj destrukturyzację.

Dla limitu 10: etykiety `["Teczka: 8 zł","Marker: 10 zł"]`, wartość 60, kolejność `["Teczka","Marker"]`. Dla `[]` oraz dla tych danych z limitem 7: obie tablice puste i wartość 0. Wywołaj te trzy testy; sprawdź, czy identyfikatory w oryginale nadal są `[1,2,3,4]`.

## Zadanie 4. Trzy usterki w krótkim programie

Przeanalizuj kod. Oczekiwane: podwojone ceny `[24,6]`, posortowane nazwy `["B","A"]`, suma pustej tablicy 0 i niezmieniona kolejność wejścia `["A","B"]`. Znajdź trzy przyczyny rozbieżności; popraw je i sprawdź wyniki. W `testy.md` opisz każdą przyczynę, nie tylko poprawione linie.

```javascript
const dane = [{ nazwa: "A", cena: 12 }, { nazwa: "B", cena: 3 }];
const ceny = dane.map(p => { p.cena * 2; });
const kolejnosc = dane.sort((a, b) => a.cena - b.cena);
const suma = [].reduce((acc, x) => acc + x);
console.log(ceny, kolejnosc, suma);
```

## Zadanie 5. Dla chętnych: Rest, spread i kopia płytka

Zbuduj `podsumuj(...wartosci)`: suma dowolnej liczby argumentów, bez argumentów 0. Wywołaj ją z tablicą `[2,3,5]` przez spread. Następnie udowodnij, że `{...baza}` nie kopiuje niezależnie zagnieżdżonego `meta` w `{nazwa:"Notes",meta:{stan:4}}`. Zrób drugą wersję, która kopiuje też `meta`, i pokaż różnicę.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
