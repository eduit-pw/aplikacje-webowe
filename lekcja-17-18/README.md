# Express: instalacja, konfiguracja i trasy GET/POST

W folderze lekcji: npm install, potem node nazwa.js. Używamy CommonJS. Przed uruchomieniem kolejnego serwera zatrzymaj poprzedni przez Ctrl+C.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Pierwsze dwie trasy GET | 15 minut, prowadzone

**Pliki:** [zadanie1.js](zadanie1.js).

**Polecenie:**

1. Utwórz `zadanie1.js`. Aplikacja ma nasłuchiwać lokalnie pod `http://127.0.0.1:3039`.
2. `GET /` zwraca tekst `Witaj w Express!` i status 200. `GET /status` zwraca JSON `{"status":"ok","aplikacja":"lekcja-17-18"}` i status 200.
3. Każda nieznana ścieżka GET zwraca `{"error":"Nie znaleziono"}` i 404. Uruchom przez `node zadanie1.js` i sprawdź wszystkie trzy przypadki.

**Oczekiwany wynik - przykład:** GET /: Witaj w Express!; GET /status: 200 i status ok.

**Sprawdź również:** Sprawdź także nieznaną trasę: 404 JSON.

## Zadanie 2. Katalog kursów: GET i POST | 18 minut, wspólne

**Pliki:** [zadanie2.js](zadanie2.js).

**Polecenie:**

1. Utwórz `zadanie2.js`. Serwer zaczyna z tablicą dwóch kursów: `{id:1,nazwa:'Python'}` i `{id:2,nazwa:'JavaScript'}`.
2. `GET /kursy` zwraca aktualną tablicę. `POST /kursy` przyjmuje JSON z polem `nazwa` będącym niepustym napisem; usuń białe znaki z początku i końca, nadaj kolejne ID i odeślij nowy kurs z kodem `201`.
3. Pusty napis, same spacje albo brak pola mają dawać `400` z `{"error":"Podaj nazwę kursu"}`. Po poprawnym POST ponowny GET ma zwrócić trzy kursy.
4. Dane znikają po restarcie serwera.

**Oczekiwany wynik - przykład:** POST z nazwą „ SQL ”: 201 i nowy kurs o nazwie SQL; kolejny GET zawiera trzy kursy.

**Sprawdź również:** Sprawdź brak pola, puste imię kursu, same spacje i restart serwera.

## Zadanie 3. Miniarkusz: API zapisów na warsztaty | 25 minut, samodzielne

**Pliki:** [zadanie3.js](zadanie3.js).

**Dane i kontekst:** Dane: Python ma 2 wolne miejsca, JavaScript 1. Zapisy są przechowywane w pamięci do zatrzymania procesu.

**Polecenie:**

1. W zadanie3.js przygotuj aplikację na 127.0.0.1:3039. Włącz express.json przed trasami odbierającymi JSON.
2. GET /api/warsztaty zwraca tablicę warsztatów z aktualną liczbą miejsc. GET /api/zapisy zwraca listę zapisów, początkowo pustą.
3. POST /api/zapisy przyjmuje imie i warsztat. Imię po trim jest niepuste, a warsztat ma typ string.
4. Po poprawnym zapisie nadaj kolejne ID, zapisz rekord i zmniejsz miejsca właściwego warsztatu o 1. Zwróć 201 i obiekt {id,imie,warsztat}.
5. Błędne dane dają 400 i Niepoprawne dane; nieznany warsztat 404 i Nie ma warsztatu; brak miejsc 409 i Brak miejsc. Błąd nie zmienia stanu.
6. Nieznana trasa daje 404 i Nie znaleziono. Obiekty i tablice wysyłaj jako JSON. Sprawdź stan po ponownym GET.
7. Sprawdź dane wejściowe przed zmianą stanu aplikacji.

**Oczekiwany wynik - przykład:** POST {"imie":" Ada ","warsztat":"Python"}: 201, przycięte imię i o jedno mniej wolne miejsce.

**Sprawdź również:** Sprawdź brak imienia, nieznany warsztat i wyczerpanie miejsc. Każdy błędny zapis zachowuje wcześniejsze dane.

<details><summary>Wskazówka</summary>

Uruchom najmniejszy działający fragment. Sprawdź jeden rekord lub jedną akcję, a potem dodawaj kolejne wymagania.

</details>

## Zadanie 4. Diagnoza: Parser zarejestrowany za trasą | 15 minut, diagnoza

**Pliki:** [naprawa.js](naprawa.js).

**Dane i kontekst:** Uruchom `naprawa.js` na porcie 3090. POST /echo ma odsyłać przesłany obiekt JSON.

**Polecenie:**

1. Przed uruchomieniem przewidź wartość req.body.
2. Wyślij POST /echo z JSON-em {"nazwa":"Notes"}.
3. Znajdź przyczynę braku danych w trasie i popraw kolejność konfiguracji.
4. Sprawdź poprawny obiekt oraz pusty obiekt. Zatrzymaj poprzedni serwer przed zmianą programu.

**Oczekiwany wynik - przykład:** POST /echo z {"nazwa":"Notes"} zwraca ten sam obiekt po poprawnej konfiguracji parsera.

**Sprawdź również:** Sprawdź zwykły obiekt i pusty obiekt; odczytaj req.body w obu przypadkach.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Punkt wyjścia:** własna, działająca część podstawowa wskazana w poleceniu.

Wybierz wariant opisany poniżej albo własny dodatek: Dodaj endpoint zwracający liczbę zapisów na każdy warsztat. Zachowaj działanie części podstawowej.

**Polecenie:**

1. Dodaj do zadania 3 trasę `GET /api/podsumowanie`, która zwraca `{"liczbaZapisow":<liczba>,"wolneMiejsca":<suma>}`. Na początku są 0 zapisy i 3 wolne miejsca.
2. Po pierwszym poprawnym zapisie jest 1 zapis i 2 miejsca. Dane mają wynikać z bieżących tablic.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: API zgłoszeń serwisowych

**Pliki:** [domowe/review.js](domowe/review.js).

**Cel naprawy:** POST /zgloszenia z JSON-em {opis} wymaga niepustego opisu po trim. Sukces: 201 i przycięty opis; błędne dane: 400. Serwer pracuje na 3099.

**Polecenie:**

1. Uruchom lub skompiluj błędną wersję i porównaj jej zachowanie z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: Poprawny opis, same spacje i brak opisu. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
