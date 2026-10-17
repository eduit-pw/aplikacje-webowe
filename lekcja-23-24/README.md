# Ćwiczenia: Express: ciasteczka i sesje

## Przygotowanie

Utwórz jeden projekt dla całego bloku. Pliki `.js` używają CommonJS (`require`).

```bash
npm init -y
npm install express@5 cookie-parser express-session
```

Twórz pliki wskazane w zadaniach i uruchamiaj je poleceniem `node nazwa.js`. Przed uruchomieniem kolejnego serwera zatrzymaj poprzedni przez Ctrl+C.

## Zadanie 1. Preferencja wyglądu w cookie

Utwórz `zadanie1.js`. `POST /api/motyw/ciemny` i `POST /api/motyw/jasny` zapisują cookie `motyw` z wybraną wartością na 15 minut. Stosuj `httpOnly: true`, `sameSite: 'lax'`, `secure: false` w lokalnym HTTP i `path: '/'`. `GET /api/motyw` zwraca `{"motyw":"jasny"}`, jeżeli cookie nie ma, a w pozostałych przypadkach aktualną dopuszczalną wartość. `POST /api/motyw/usun` usuwa cookie i zwraca `{"motyw":"jasny"}`. Niepoprawny motyw daje 400. Inne adresy dają 404.

**Oddawany rezultat:** plik źródłowy oraz odpowiedzi pokazujące zapis, odczyt i usunięcie cookie.

## Zadanie 2. Licznik wejść w sesji

Utwórz `zadanie2.js` z middleware `express-session`. `GET /api/licznik` zwiększa licznik bieżącej sesji o 1 i zwraca `{"wejscia":N}`. `POST /api/reset` niszczy bieżącą sesję, usuwa cookie z identyfikatorem i zwraca `{"wyzerowano":true}`. Klient A i klient B mają niezależne liczniki. Dla pierwszego żądania każdego klienta wynik wynosi 1. Pozostałe adresy: 404 JSON. Ustaw `resave: false`, `saveUninitialized: false`, cookie na 15 minut oraz flagi cookie jak w zadaniu 1.

**Oddawany rezultat:** kod oraz wyniki A: 1 → 2; B: 1; A po resecie: 1.

## Zadanie 3. Miniarkusz: koszyk i motyw

**Autorska sytuacja:** dwie osoby korzystają z tego samego API. Każda ma własny koszyk w sesji. Wybrany motyw zapamiętujemy w osobnym cookie. Ceny produktów: długopis (ID 1, 3 zł), zeszyt (ID 2, 8 zł). Serwer nie jest sklepem produkcyjnym; dane produktu zapisane są w kodzie.

**Wymagania do odhaczenia:**

1. `GET /api/stan` na początku zwraca dokładnie `{"motyw":"jasny","koszyk":[],"suma":0}` i nie zakłada sesji, dopóki użytkownik nie zmieni koszyka.
2. `POST /api/motyw/ciemny` zapisuje cookie na 15 minut, a odpowiedź zwraca `{"motyw":"ciemny"}`; dopuszczalne wartości to `jasny`, `ciemny`, inaczej kod 400 i `{"error":"Niepoprawny motyw"}`.
3. `POST /api/koszyk/2` dodaje do koszyka jedną sztukę zeszytu i zwraca stan `{"motyw":"ciemny","koszyk":[{"id":2,"nazwa":"Zeszyt","cena":8}],"suma":8}` (gdy wcześniej ustawiono ciemny motyw). Dodanie produktu 1 podnosi sumę do 11; powtórne dodanie 2 do 19. Dane pochodzą z serwera, nie z wartości podanej przez klienta.
4. Niepoprawne ID (`abc`, `0`, `02`) daje 400 i `{"error":"Niepoprawne id"}`; poprawne, ale nieobecne (np. `99`) daje 404 i `{"error":"Nie ma produktu"}`. Złe żądanie nie zmienia koszyka.
5. `POST /api/koszyk/wyczysc` usuwa zawartość koszyka bieżącej sesji, ale zostawia wybrany motyw. Dwie osobne sesje mają osobne koszyki. Inne adresy dają 404 JSON.

**Oddawany rezultat:** `zadanie3.js`, `package.json`, `package-lock.json` oraz zrzuty odpowiedzi dwóch klientów.

## Zadanie 4. Diagnoza: Wspólny licznik wszystkich użytkowników

W kopii aplikacji zastąp licznik sesji globalną zmienną `let wizyty = 0` i zwiększaj ją w obsłudze wejścia. Przed testem przewidź, co zobaczy drugi użytkownik. Sprawdź dwa osobne profile przeglądarki, popraw licznik tak, aby każda sesja miała własny stan, i powtórz test. Wyjaśnij, dlaczego drugi klient powinien zaczynać od pierwszej wizyty. Dwie karty tego samego profilu nie są testem dwóch niezależnych sesji.

## Zadanie 5. Dla chętnych: usuwanie sesji koszyka

Rozszerz zadanie 3 o `POST /api/koszyk/zamknij`: zniszcz całą sesję bieżącego klienta, usuń cookie `sid_inf04` i zwróć `{"zamknieto":true}`. Preferencja `motyw` w osobnym cookie pozostaje. Po ponownym dodaniu zeszytu koszyk ma tylko jedną pozycję i sumę 8. Dodaj trasę **przed** `POST /api/koszyk/:id`, aby tekst `zamknij` nie został uznany za ID.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
