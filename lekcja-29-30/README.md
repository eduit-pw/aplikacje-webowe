# Ćwiczenia: Sprawdzian praktyczny: REST API Express, MongoDB i CORS

## Przygotowanie

Wymagane są Node.js, działający MongoDB i MongoDB Compass. Przy wspólnym serwerze korzystaj z własnej przypisanej bazy.

```bash
npm init -y
npm install express@5 mongodb@6 cors@2
```

Używaj CommonJS (`require`). Serwery uruchamiaj przez `node nazwa.js` i zatrzymuj Ctrl+C. Zapisz rzeczywiste identyfikatory dokumentów zwrócone przez bazę.

## Zadanie 1. Start i odczyt

Utwórz API kolekcji `notatki` w bazie `inf04_t15`. API uruchom na porcie 3000, a klienta na 8080. GET /notatki zwraca JSON wszystkich dokumentów; opcjonalny filtr ?wazna=true albo false wybiera boolean. Inna wartość filtra daje 400. Brak rekordów daje 200 i `[]`. Przed uruchomieniem zapisz, dlaczego napis true trzeba przekształcić w wartość logiczną. Sortuj po _id rosnąco.

## Zadanie 2. Dodawanie i zmiana

POST /notatki przyjmuje {tytul:string,wazna:boolean}; tytuł po trim ma 1-80 znaków. Poprawne dane dają 201 i dokument z _id. Błędne 400. PATCH /notatki/:id zmienia tylko wazna; malformed ID lub nieboolean daje 400, poprawny nieistniejący ID 404. Istniejąca notatka zwraca 200 z bieżącym dokumentem. Identyczna wartość nadal jest poprawną zmianą 200 (matchedCount, nie modifiedCount). Mongo ObjectId ma 24 cyfry szesnastkowe w URL.

## Zadanie 3. Usuwanie i klient

DELETE /notatki/:id: zły ID 400, brak dokumentu 404, usunięcie 204 bez treści. Strona http://localhost:8080 ma tytuł i checkbox oraz Dodaj i Lista. Własny fetch wysyła POST JSON i GET; pokazuje dane przez textContent i komunikat błędu HTTP/sieci. CORS API dopuszcza ten konkretny origin. Sprawdź POST w przeglądarce, nie tylko w narzędziu HTTP. Zrzut Network ma pokazać żądanie i rezultat; OPTIONS preflight może być zapisany w cache, więc w razie potrzeby odśwież w nowym profilu.

## Zadanie 4. Testy i oddanie

Udokumentuj: GET pustej listy; POST tytuł A,false; PATCH ważności na true; PATCH ponownie true; filtr true; DELETE; ponowny DELETE; tytuł ze spacji; błędny ID. Odczytaj rzeczywisty _id z POST, nie używaj ID wpisanego przez nauczyciela. Dla 404 możesz wykorzystać 24-znakowy ID usuniętego dokumentu. Po usunięciu skontroluj brak wpisu w bazie i GET. Nie parsuj JSON z 204. Przy osobnej próbie błędnego JSON oczekuj 400. Oddaj źródła, manifesty i dokumentację z wynikami.

## Zadanie 5. Rozszerzenie dla kończących wcześniej

Dodaj limit GET 1-20, brak parametru 10. Wykorzystaj walidację z lekcji 19-20 i metodę kursora `.limit(limit)`. Sprawdź poprawny limit, brak parametru i błędne wartości.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
