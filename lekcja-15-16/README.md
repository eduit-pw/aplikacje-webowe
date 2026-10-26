# JSON i wbudowany serwer HTTP w Node.js

Node.js, CommonJS. Uruchamiaj node ścieżka/do/pliku.js. Moduły wbudowane nie wymagają instalacji.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Dostępne stanowiska - JSON do JSON | 15 minut, prowadzone

**Pliki:** [zadanie1/filtruj.js](zadanie1/filtruj.js), [zadanie1/dane/stanowiska.json](zadanie1/dane/stanowiska.json).

**Polecenie:**

1. W katalogu `zadanie1` utwórz podkatalog `dane` i plik `stanowiska.json` z przygotowaną zawartością. Napisz `filtruj.js`, który asynchronicznie odczytuje plik, parsuje JSON, wybiera tylko stanowiska z polem `dostepne: true` i zapisuje do `out/dostepne.json` obiekt z polami `liczba` oraz `stanowiska` (tablica przefiltrowanych obiektów).
2. Zapis ma być czytelny (wcięcie dwóch spacji). W terminalu wypisz `Zapisano 2 dostępne stanowiska.` dopiero po zapisie.
3. Program ma działać także uruchomiony z katalogu nadrzędnego.

**Oczekiwany wynik - przykład:** out/dostepne.json zawiera liczba:2 i stanowiska o ID 1 oraz 3.

**Sprawdź również:** Sprawdź brak dostępnych stanowisk, pustą tablicę oraz inny katalog uruchomienia.

## Zadanie 2. Pierwszy serwer HTTP | 18 minut, wspólne

**Pliki:** [zadanie2/server.js](zadanie2/server.js).

**Polecenie:**

1. Utwórz `zadanie2/server.js`. Serwer ma działać lokalnie na porcie `3038` i obsługiwać trzy przypadki: `GET /` → status `200`, typ `text/plain; charset=utf-8`, treść `Serwer działa`; `GET /status` → status `200`, typ JSON, obiekt `{"status":"ok"}`; każdy inny adres GET → status `404`, typ JSON, `{"error":"Nie znaleziono"}`.
2. Każda odpowiedź musi się zakończyć. Sprawdź kody i nagłówki w terminalu.

**Oczekiwany wynik - przykład:** GET /status: 200 i {"status":"ok"}; nieznany adres GET: 404.

**Sprawdź również:** Sprawdź /, /status, nieznany adres, nagłówki oraz kolejne żądanie po odpowiedzi.

## Zadanie 3. Miniarkusz: serwer katalogu kursów | 25 minut, samodzielne

**Pliki:** [zadanie3/server.js](zadanie3/server.js), [zadanie3/dane/kursy.json](zadanie3/dane/kursy.json).

**Polecenie:**

1. Wykorzystaj przygotowany zadanie3/dane/kursy.json z trzema kursami. Asynchronicznie odczytaj i sparsuj plik przed otwarciem portu 3038.
2. Przy błędzie wejścia wypisz komunikat i zakończ program niezerowym kodem. Serwer nie powinien wtedy nasłuchiwać.
3. GET /api/kursy zwraca 200 i tablicę wszystkich kursów. Opcjonalny parametr id wybiera jeden obiekt; brak takiego kursu daje 404 i błąd Nie ma kursu.
4. Niepoprawne ID, w tym abc,0 i pusty napis, daje 400 oraz błąd Niepoprawne id.
5. Nieznana ścieżka GET daje 404 i Nie znaleziono. Inna metoda daje 405, nagłówek Allow: GET i błąd Metoda niedozwolona.
6. Wszystkie odpowiedzi są JSON z kodowaniem UTF-8 i kończą żądanie. Po błędnym zapytaniu kolejne poprawne nadal działa.
7. Oddziel poprawność składni JSON od poprawności wartości odczytanych danych.

**Oczekiwany wynik - przykład:** GET /api/kursy?id=2 zwraca jeden obiekt JavaScript; id=99 daje 404.

**Sprawdź również:** Sprawdź brak ID, abc,0,puste ID, nieznaną ścieżkę, metodę POST i błędny plik wejściowy.

<details><summary>Wskazówka</summary>

Uruchom najmniejszy działający fragment. Sprawdź jeden rekord lub jedną akcję, a potem dodawaj kolejne wymagania.

</details>

## Zadanie 4. Diagnoza: JSON poprawny składniowo, dane błędne | 15 minut, diagnoza

**Pliki:** [naprawa.js](naprawa.js).

**Polecenie:**

1. Przeanalizuj szablon `const dane = JSON.parse(tekst); console.log(dane.cena * 2);` i trzy napisy: `{"cena":12}`, `{"cena":"abc"}`, `nie JSON`. Wymaganie: cena jest skończoną liczbą >= 0.
2. Dodaj osobno obsługę błędu formatu i walidację danych. Zaproponuj próbę ceny 0 i -1.

**Oczekiwany wynik - przykład:** Tekst {"cena":12} daje 24; cena jako "abc" jest odrzucona; nie JSON daje błąd formatu.

**Sprawdź również:** Cena 0 jest poprawna, -1 błędna. Oddziel błąd parsowania od błędnej wartości.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Punkt wyjścia:** własna, działająca część podstawowa wskazana w poleceniu.

Wybierz wariant opisany poniżej albo własny dodatek: Dodaj własny odczytowy endpoint zwracający podsumowanie danych. Zachowaj działanie części podstawowej.

**Polecenie:**

1. Rozszerz serwer z zadania 3 o `GET /api/liczba`, które zwraca `200` i `{"liczba":3}` (wartość obliczona z tablicy, nie wpisana na stałe). Pozostałe adresy i kody mają zachować opisane działanie.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: Weryfikacja programu kina

**Pliki:** [domowe/review.js](domowe/review.js).

**Cel naprawy:** Odczytaj JSON, wybierz filmy trwające co najmniej 90 minut i oblicz łączny czas. Dla danych startowych wynik wynosi 190.

**Polecenie:**

1. Uruchom lub skompiluj błędną wersję i porównaj jej zachowanie z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: Filmy o czasie 89,90 i 100 minut oraz brak filmów spełniających warunek. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
