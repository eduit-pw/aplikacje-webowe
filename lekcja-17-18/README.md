# Ćwiczenia: Express: instalacja, konfiguracja i trasy GET/POST

## Przygotowanie

Utwórz jeden projekt dla całego bloku. Pliki `.js` używają CommonJS (`require`).

```bash
npm init -y
npm install express@5
```

Twórz pliki wskazane w zadaniach i uruchamiaj je poleceniem `node nazwa.js`. Przed uruchomieniem kolejnego serwera zatrzymaj poprzedni przez Ctrl+C.

## Zadanie 1. Pierwsze dwie trasy GET

Utwórz `zadanie1.js`. Aplikacja ma nasłuchiwać lokalnie pod `http://127.0.0.1:3039`. `GET /` zwraca tekst `Witaj w Express!` i status 200. `GET /status` zwraca JSON `{"status":"ok","aplikacja":"lekcja-17-18"}` i status 200. Każda nieznana ścieżka GET zwraca `{"error":"Nie znaleziono"}` i 404. Uruchom przez `node zadanie1.js` i sprawdź wszystkie trzy przypadki.

**Oddawany rezultat:** `zadanie1.js`, wspólny `package.json` i wyniki trzech żądań.

## Zadanie 2. Katalog kursów: GET i POST

Utwórz `zadanie2.js`. Serwer zaczyna z tablicą dwóch kursów: `{id:1,nazwa:'Python'}` i `{id:2,nazwa:'JavaScript'}`. `GET /kursy` zwraca aktualną tablicę. `POST /kursy` przyjmuje JSON z polem `nazwa` będącym niepustym napisem; usuń białe znaki z początku i końca, nadaj kolejne ID i odeślij nowy kurs z kodem `201`. Pusty napis, same spacje albo brak pola mają dawać `400` z `{"error":"Podaj nazwę kursu"}`. Po poprawnym POST ponowny GET ma zwrócić trzy kursy. Dane znikają po restarcie serwera.

**Oddawany rezultat:** `zadanie2.js`; wyniki GET przed i po POST oraz POST z pustą nazwą.

## Zadanie 3. Miniarkusz: API zapisów na warsztaty

**Sytuacja (autorskie wymagania).** Utwórz `zadanie3.js`. Serwer korzysta z tablicy dwóch warsztatów: `Python` z 2 wolnymi miejscami i `JavaScript` z 1 miejscem. Zapisy są przechowywane w pamięci do zatrzymania procesu. Żądanie POST przyjmuje JSON z polami `imie` i `warsztat`; nazwa warsztatu musi być równa jednej z nazw dostępnych w tablicy. Aplikacja nasłuchuje na `127.0.0.1:3039`.

**Wymagania do odhaczenia:**

1. `GET /api/warsztaty` zwraca tablicę warsztatów i bieżące liczby miejsc z kodem `200`.
2. `GET /api/zapisy` zwraca tablicę zapisów (na początku pustą) z kodem `200`.
3. Poprawne `POST /api/zapisy`, np. `{"imie":" Ada ","warsztat":"Python"}`, usuwa spacje z imienia, nadaje ID, zwraca obiekt `{id,imie,warsztat}` z kodem `201` i zmniejsza liczbę miejsc **dokładnie o 1**. Kolejny GET pokazuje zmianę.
4. Brak imienia, puste imię albo `warsztat` o innym typie niż napis daje `400` i `{"error":"Niepoprawne dane"}`. Nieznana nazwa warsztatu daje `404` i `{"error":"Nie ma warsztatu"}`. Gdy brak miejsc, POST daje `409` i `{"error":"Brak miejsc"}`; po każdym błędzie dane pozostają bez zmian.
5. Nieznana ścieżka zwraca `404` oraz `{"error":"Nie znaleziono"}`. Wszystkie odpowiedzi z obiektami i tablicami są JSON. `express.json()` jest włączony przed obsługą POST.

**Oddawany rezultat:** `zadanie3.js`, wspólne `package.json` i `package-lock.json` oraz zrzuty z poprawnego POST, GET po zapisie i dwóch różnych błędów.

## Zadanie 4. Diagnoza: Parser zarejestrowany za trasą

Otwórz celowo błędny `naprawa.js`. Serwer działa na porcie 3090. Przed uruchomieniem przewidź wartość `req.body`, gdy trasa POST jest zarejestrowana przed parserem JSON. Wyślij `POST /echo` z JSON-em `{"nazwa":"Notes"}`. Popraw kolejność middleware i sprawdź poprawne żądanie oraz pusty obiekt. Zapisz przyczynę i wyniki prób. Przed startem zatrzymaj poprzedni serwer.

## Zadanie 5. Dla chętnych: podsumowanie miejsc

Dodaj do zadania 3 trasę `GET /api/podsumowanie`, która zwraca `{"liczbaZapisow":<liczba>,"wolneMiejsca":<suma>}`. Na początku są 0 zapisy i 3 wolne miejsca. Po pierwszym poprawnym zapisie jest 1 zapis i 2 miejsca. Dane mają wynikać z bieżących tablic.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
