# Ćwiczenia: Express: `req.params` i `req.query`

## Przygotowanie

Utwórz jeden projekt dla całego bloku. Pliki `.js` używają CommonJS (`require`).

```bash
npm init -y
npm install express@5
```

Twórz pliki wskazane w zadaniach i uruchamiaj je poleceniem `node nazwa.js`. Przed uruchomieniem kolejnego serwera zatrzymaj poprzedni przez Ctrl+C.

## Zadanie 1. Uczeń wybrany przez ID

Napisz `zadanie1.js`. `GET /api/uczniowie` zwraca tablicę trzech uczniów: `Ala` (ID 1), `Bartek` (ID 2), `Celina` (ID 3). `GET /api/uczniowie/:id` zwraca jeden obiekt dla podanego ID. Jeżeli zapis ID nie jest dodatnią liczbą całkowitą (np. `abc`, `0`, `2.5`, `02`), zwróć `400` i `{"error":"Niepoprawne id"}`. Jeżeli ID ma poprawny zapis, lecz nie występuje w tablicy, zwróć `404` i `{"error":"Nie ma ucznia"}`. Pozostałe adresy dają `404` i `{"error":"Nie znaleziono"}`.

**Oddawany rezultat:** `zadanie1.js` i cztery sprawdzone żądania: lista, uczeń 2, błędne ID i nieistniejące ID.

## Zadanie 2. Katalog kursów: poziom i limit

Napisz `zadanie2.js` z czterema kursami: Python i HTML (`podstawowy`), JavaScript i SQL (`zaawansowany`). `GET /api/kursy` zwraca obiekt `{"liczba":4,"kursy":[...]}`. Opcjonalny `poziom` może przyjąć dokładnie `podstawowy` albo `zaawansowany`; opcjonalny `limit` może być dodatnią liczbą całkowitą od 1 do 10. Najpierw filtruj, potem ogranicz listę. `GET /api/kursy?poziom=podstawowy&limit=1` zwraca tylko Python i `liczba:1`. Nieznany lub pusty poziom daje `400` z `{"error":"Niepoprawny poziom"}`; niepoprawny limit (także `0`, `2x`, `1.5` i powtórzone `limit`) daje `400` z `{"error":"Niepoprawny limit"}`. Gdy parametr nie występuje, pomiń filtr albo limit.

**Oddawany rezultat:** `zadanie2.js` i odpowiedzi dla braku parametrów, obu parametrów, błędnego poziomu i błędnego limitu.

## Zadanie 3. Miniarkusz: cena zamówienia

**Autorska sytuacja:** Napisz `zadanie3.js` z trzema produktami: `{id:1,nazwa:'Długopis',cena:3}`, `{id:2,nazwa:'Zeszyt',cena:8.5}`, `{id:3,nazwa:'Teczka',cena:12}`. Serwer działa pod `127.0.0.1:3040`. `GET /api/produkty` zwraca tablicę wszystkich produktów. `GET /api/produkty/:id` zwraca szczegóły wybranego produktu oraz koszt zamówienia; opcjonalna ilość jest przekazywana jako `?ilosc=N`. Nie twórz żadnego zamówienia i nie modyfikuj tablicy produktów - to tylko wyliczenie w odpowiedzi GET.

**Wymagania do odhaczenia:**

1. `GET /api/produkty` → kod 200, tablica trzech produktów.
2. `GET /api/produkty/2?ilosc=3` → 200 i dokładnie `{"produkt":"Zeszyt","ilosc":3,"cenaJednostkowa":8.5,"razem":25.5}`. Bez parametru `ilosc` przyjmij 1.
3. Niepoprawne ID (`0`, `abc`, `2x`, `02`, zbyt duża liczba) → 400 i `{"error":"Niepoprawne id"}`; poprawne, ale nieobecne ID, np. `99` → 404 i `{"error":"Nie ma produktu"}`.
4. Podane `ilosc` musi być pojedynczym zapisem liczby całkowitej z zakresu 1-10. `0`, pusty napis, `2x`, `1.5`, powtórzony parametr albo zbyt duża liczba → 400 i `{"error":"Niepoprawna ilość"}`.
5. Pozostałe adresy → 404 i `{"error":"Nie znaleziono"}`. Wszystkie odpowiedzi są JSON. Po błędnym zapytaniu prawidłowe zapytanie nadal działa.

**Oddawany rezultat:** `zadanie3.js`, wspólne `package.json` i `package-lock.json` oraz zrzuty pokazujące listę, obliczenie, błędne ID, brak produktu i błędną ilość.

## Zadanie 4. Diagnoza: Pusty parametr staje się zerem

Sprawdź walidację:

```js
const n = Number(req.query.limit);
if (!Number.isNaN(n)) {
  // Uznanie parametru za poprawny.
}
```

Limit powinien być pojedynczym napisem z cyfr, oznaczającym liczbę od 1 do 20. Brak parametru oznacza 10. Przewidź i sprawdź: brak parametru, pusty tekst, `0`, `20`, `21`, `abc` oraz powtórzony parametr. Popraw walidację i udokumentuj testy.

## Zadanie 5. Dla chętnych: opcjonalny kod rabatowy

Rozbuduj zadanie 3: `GET /api/produkty/2?ilosc=3&kod=UCZEN` obniża obliczoną kwotę o **10%**. Jeśli `kod` nie podano, wynik pozostaje bez rabatu. Jedynym dozwolonym kodem jest `UCZEN`; nieznany, pusty lub powtórzony `kod` daje `400` i `{"error":"Niepoprawny kod"}`. W odpowiedzi dodaj pole `rabatProcent` (0 albo 10). Dla zeszytu i trzech sztuk otrzymasz `razem:22.95`.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
