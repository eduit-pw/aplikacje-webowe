# Ćwiczenia: MongoDB: CRUD z aplikacji Node.js i Express

## Przygotowanie

Wymagane są Node.js, działający MongoDB i MongoDB Compass. Przy wspólnym serwerze korzystaj z własnej przypisanej bazy.

```bash
npm init -y
npm install express@5 mongodb@6 cors@2
```

Używaj CommonJS (`require`). Serwery uruchamiaj przez `node nazwa.js` i zatrzymuj Ctrl+C. Zapisz rzeczywiste identyfikatory dokumentów zwrócone przez bazę.

## Zadanie 1. Odczytaj dane z poprzedniej lekcji

Napisz `zadanie1.js`. Połącz się z bazą tematu 13, pobierz z kolekcji `kursy` tylko kursy podstawowe. Wypisz do terminalu tablicę obiektów zawierających `kod`, `nazwa` i `godziny`, posortowanych rosnąco według godzin. Jeśli połączenie lub zapytanie się nie uda, wypisz błąd i zakończ proces kodem błędu. Zamknij klienta także w przypadku błędu. To zadanie nie zmienia kolekcji `kursy`.

## Zadanie 2. Cztery operacje na jednej notatce

Napisz `zadanie2.js` pracujący w bazie tematu 14 i kolekcji `notatki_demo`. W trakcie jednego uruchomienia: dodaj notatkę `{ tytul: 'Powtórka', ukonczona: false }`, odczytaj ją po wygenerowanym `_id`, zmień `ukonczona` na `true`, odczytaj ponownie, usuń dokument i upewnij się, że kolejne `findOne()` zwraca `null`. Usuwaj **tylko notatkę wstawioną przez ten przebieg programu**, filtrując po jej `_id`.

## Zadanie 3. Miniarkusz: API produktów z MongoDB

**Autorska specyfikacja:** Napisz `zadanie3.js` udostępniający API pod `http://127.0.0.1:3043`. Korzystaj z kolekcji `produkty_api` w bazie tematu 14. Przykłady dotyczą pojedynczego stanowiska; przy wspólnym serwerze koniecznie korzystaj z przypisanej bazy. Każdy nowy produkt ma nazwę od 1 do 50 znaków po usunięciu spacji na krańcach, dodatnią cenę będącą skończoną liczbą i `dostepny: true`.

**Wymagania do odhaczenia:**

1. `POST /api/produkty` z JSON-em `{"nazwa":"Zeszyt","cena":8.5}` tworzy dokument, zwraca 201 oraz `{ "id": "...", "nazwa": "Zeszyt", "cena": 8.5, "dostepny": true }`; pustą nazwę albo niedodatnią lub nienumeryczną cenę odrzuca 400. Nie przyjmuj `id` ani `dostepny` przesłanych przez klienta jako danych dokumentu.
2. `GET /api/produkty` zwraca tablicę produktów, a `GET /api/produkty/:id` wybrany produkt. Niepoprawny zapis ID daje 400; poprawny 24 znakowy identyfikator szesnastkowy bez dokumentu - 404.
3. `PATCH /api/produkty/:id` przyjmuje tylko nową dodatnią cenę, np. `{"cena":9}`, i zwraca produkt po zmianie; brak dokumentu daje 404. Walidacja działa także dla braku lub złego typu danych.
4. `DELETE /api/produkty/:id` usuwa jeden dokument i zwraca 204 bez treści; ponowne usunięcie tego samego dokumentu daje 404. Inne adresy dają 404 JSON.
5. Błędny JSON w żądaniu daje 400 JSON. Błędy operacji bazy po uruchomieniu API dają 500 JSON bez ujawnienia szczegółów klientowi; jeśli początkowe połączenie się nie uda, aplikacja zgłasza błąd w terminalu i nie otwiera portu. Po ponownym uruchomieniu aplikacji poprawnie zapisane dokumenty pozostają w bazie.

**Oddawany rezultat:** `zadanie3.js`, `package.json`, `package-lock.json`, wyniki żądań POST → GET → PATCH → GET → DELETE → GET oraz widok kolekcji w Compassie po utworzeniu i po usunięciu.

## Zadanie 4. CORS sprawdzony w przeglądarce

W folderze `zadanie4` znajdziesz `cors-api.js`, `klient.js` i `public/index.html`. Zainstaluj zależności w katalogu lekcji. W dwóch terminalach uruchom `node zadanie4/cors-api.js` i `node zadanie4/klient.js`. API działa na porcie 3094, strona na 8080.

1. Otwórz `http://localhost:8080`. Przed poprawką sprawdź blokowanie odczytu odpowiedzi przez JavaScript.
2. Dodaj konfigurację CORS przed trasami API. Dozwolony origin to `http://localhost:8080`.
3. Sprawdź GET, POST JSON i żądanie OPTIONS w Network. POST powinien zwracać 201.
4. Otwórz stronę przez `http://127.0.0.1:8080` i zapisz wynik: to inny origin.
5. Przenieś middleware CORS do serwera MongoDB z zadania 3. Zachowaj jego pozostałe trasy.

## Zadanie 5. Dla chętnych: zmiana dostępności

Rozszerz zadanie 3 o `PATCH /api/produkty/:id/dostepnosc`. Żądanie z JSON-em `{ "dostepny": false }` ustawia stan dostępności produktu i zwraca cały produkt po zmianie; wartość musi być wartością logiczną. Błędne ID → 400, nieznany identyfikator → 404, zły typ pola → 400. Trasę umieść **przed middleware 404**. Ponowne ustawienie tej samej wartości powinno nadal zwrócić 200 (liczy się znaleziony dokument, a nie to, czy wartość się zmieniła).

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
