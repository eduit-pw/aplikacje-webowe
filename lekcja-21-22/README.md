# Ćwiczenia: Express: middleware, `next()` i pliki statyczne

## Przygotowanie

Utwórz jeden projekt dla całego bloku. Pliki `.js` używają CommonJS (`require`).

```bash
npm init -y
npm install express@5
```

Twórz pliki wskazane w zadaniach i uruchamiaj je poleceniem `node nazwa.js`. Przed uruchomieniem kolejnego serwera zatrzymaj poprzedni przez Ctrl+C.

## Zadanie 1. Logger żądań

Utwórz `zadanie1.js`. Pierwszy middleware wypisuje w terminalu aktualną godzinę w formacie ISO, metodę i `req.originalUrl`, np. `GET /api/status?test=1`. Następny middleware nadaje żądaniu pole `req.numer` - numer kolejnego żądania od uruchomienia serwera. Oba przekazują sterowanie przez `next()`. Trasa `GET /api/status` odpowiada JSON-em `{"status":"ok","numer":1}` dla pierwszego żądania. Inny adres ma odpowiedź JSON `{"error":"Nie znaleziono"}` i kod 404. Każde żądanie powinno być zalogowane; po dwóch żądaniach numer rośnie. Numeracja jest przechowywana tylko w pamięci i zeruje się po ponownym uruchomieniu serwera.

**Oddawany rezultat:** kod i wynik dwóch żądań, wraz z dwoma wpisami w terminalu.

## Zadanie 2. Pliki statyczne

Utwórz katalog `public` oraz pliki `index.html` i `style.css`. Strona ma zawierać tytuł „Pracownia INF.04”, nagłówek oraz odsyłacz do arkusza CSS. Udostępnij oba pliki pod prefiksem `/static` przy pomocy **jednego** `express.static()`. Wejście na `/` ma przekierowywać na `/static/index.html`. Nieznany plik ma dawać 404 w JSON. Użyj ścieżki absolutnej skonstruowanej z `__dirname`.

**Oddawany rezultat:** trzy pliki i zrzut strony z widocznym stylem.

## Zadanie 3. Miniarkusz: materiały pracowni

**Autorska sytuacja:** strona z zadania 2 jest dostępna publicznie. API materiałów ma dodatkowo sprawdzać nagłówek identyfikujący grupę. To ćwiczenie sterowania przepływem żądania, **nie mechanizm logowania użytkownika ani zabezpieczenie dostępu**.

**Wymagania do odhaczenia:**

1. Dla każdego żądania wypisz w terminalu datę ISO, metodę i `req.originalUrl` (globalne middleware przed pozostałymi).
2. `GET /static/index.html` oraz `GET /static/style.css` zwracają pliki z zadania 2; nieznany plik przechodzi do odpowiedzi 404.
3. `GET /api/materialy` z nagłówkiem `x-grupa: 4TP` zwraca kod 200 oraz dokładnie `{"grupa":"4TP","materialy":["Node.js","Express","MongoDB"]}`. Sprawdzanie nagłówka jest osobnym middleware przypisanym **tylko do tej trasy**.
4. Gdy nagłówka `x-grupa` nie ma lub jego wartość jest inna niż `4TP`, odpowiedz 400 i `{"error":"Niepoprawna grupa"}`; w tej gałęzi nie wywołuj `next()`.
5. Inne adresy odpowiadają kodem 404 i `{"error":"Nie znaleziono"}`. Żądania strony i API widać w logach. Po błędnym żądaniu prawidłowe nadal działa.

**Oddawany rezultat:** `zadanie3.js`, użyte bez zmian `public/index.html` i `public/style.css` z zadania 2, `package.json`, `package-lock.json` oraz wyniki prób.

## Zadanie 4. Diagnoza: Żądanie pozostaje bez odpowiedzi

W kopii serwera umieść poniższy logger przed trasą `GET /ping`:

```js
app.use((req, res, next) => {
  console.log(req.method);
});
```

Zapisz przewidywany efekt. Otwórz adres `/ping`, sprawdź żądanie w Network i napraw middleware. Zweryfikuj także nieznaną trasę. Zawieszone żądanie anuluj. W dokumentacji wyjaśnij przyczynę i wynik poprawki.

## Zadanie 5. Dla chętnych: obsługa błędu z `next(err)`

Rozszerz **zadanie 3** o `GET /api/awaria`. Ta trasa wywołuje `next(new Error('Przykładowa awaria'))`. Na końcu stosu middleware, **po obsłudze 404**, dodaj obsługę błędów zwracającą kod 500 i `{"error":"Błąd serwera"}`. Sprawdź, że `/api/awaria` daje 500, a `/inny-adres` nadal daje 404. Treści błędu nie wysyłamy do klienta.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
