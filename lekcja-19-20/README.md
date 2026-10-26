# Express: `req.params` i `req.query`

W folderze lekcji: npm install, potem node nazwa.js. Używamy CommonJS. Przed uruchomieniem kolejnego serwera zatrzymaj poprzedni przez Ctrl+C.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Uczeń wybrany przez ID | 15 minut, prowadzone

**Pliki:** [zadanie1.js](zadanie1.js).

**Polecenie:**

1. Napisz `zadanie1.js`. `GET /api/uczniowie` zwraca tablicę trzech uczniów: `Ala` (ID 1), `Bartek` (ID 2), `Celina` (ID 3).
2. `GET /api/uczniowie/:id` zwraca jeden obiekt dla podanego ID. Jeżeli zapis ID nie jest dodatnią liczbą całkowitą (np. `abc`, `0`, `2.5`, `02`), zwróć `400` i `{"error":"Niepoprawne id"}`.
3. Jeżeli ID ma poprawny zapis, lecz nie występuje w tablicy, zwróć `404` i `{"error":"Nie ma ucznia"}`. Pozostałe adresy dają `404` i `{"error":"Nie znaleziono"}`.

**Oczekiwany wynik - przykład:** GET /api/uczniowie/2 zwraca Bartka; /99 daje 404, /abc daje 400.

**Sprawdź również:** Sprawdź 0,2.5,02 oraz nieznany adres.

## Zadanie 2. Katalog kursów: poziom i limit | 18 minut, wspólne

**Pliki:** [zadanie2.js](zadanie2.js).

**Polecenie:**

1. Napisz `zadanie2.js` z czterema kursami: Python i HTML (`podstawowy`), JavaScript i SQL (`zaawansowany`). `GET /api/kursy` zwraca obiekt `{"liczba":4,"kursy":[...]}`.
2. Opcjonalny `poziom` może przyjąć dokładnie `podstawowy` albo `zaawansowany`; opcjonalny `limit` może być dodatnią liczbą całkowitą od 1 do 10. Najpierw filtruj, potem ogranicz listę.
3. `GET /api/kursy?poziom=podstawowy&limit=1` zwraca tylko Python i `liczba:1`. Nieznany lub pusty poziom daje `400` z `{"error":"Niepoprawny poziom"}`; niepoprawny limit (także `0`, `2x`, `1.5` i powtórzone `limit`) daje `400` z `{"error":"Niepoprawny limit"}`.
4. Gdy parametr nie występuje, pomiń filtr albo limit.

**Oczekiwany wynik - przykład:** poziom=podstawowy&limit=1: tylko Python i liczba:1.

**Sprawdź również:** Sprawdź brak parametrów, pusty poziom, limity 0,1,10,11,1.5,2x i powtórzenie limitu.

## Zadanie 3. Miniarkusz: cena zamówienia | 25 minut, samodzielne

**Pliki:** [zadanie3.js](zadanie3.js).

**Dane i kontekst:** Dane: Długopis ID 1/cena 3, Zeszyt ID 2/cena 8.5, Teczka ID 3/cena 12. To wyliczenie kosztu, bez tworzenia zamówień.

**Polecenie:**

1. W zadanie3.js uruchom serwer na 127.0.0.1:3040. GET /api/produkty zwraca tablicę produktów.
2. GET /api/produkty/:id wybiera produkt. ID musi być dodatnią bezpieczną liczbą całkowitą zapisaną cyframi, bez zer wiodących.
3. Błędny zapis ID daje 400 i Niepoprawne id; poprawny nieznany ID daje 404 i Nie ma produktu.
4. Odczytaj opcjonalne ilosc. Gdy go brak, przyjmij 1. Podany parametr musi być pojedynczym zapisem liczby całkowitej 1-10; inaczej zwróć 400 i Niepoprawna ilość.
5. Zwróć 200 i obiekt {produkt,ilosc,cenaJednostkowa,razem}. Kwotę wylicz z ceny po stronie serwera. Zachowaj dane produktów.
6. Nieznane adresy dają 404 i Nie znaleziono. Wszystkie odpowiedzi są JSON; błędne zapytanie nie wyłącza serwera.
7. Rozróżniaj niepoprawny parametr i poprawny identyfikator nieistniejącego rekordu.

**Oczekiwany wynik - przykład:** GET /api/produkty/2?ilosc=3: {"produkt":"Zeszyt","ilosc":3,"cenaJednostkowa":8.5,"razem":25.5}.

**Sprawdź również:** Brak ilości oznacza 1. Sprawdź nieznany produkt, błędny ID, granice 1/10 i powtórzoną ilość.

<details><summary>Wskazówka</summary>

Uruchom najmniejszy działający fragment. Sprawdź jeden rekord lub jedną akcję, a potem dodawaj kolejne wymagania.

</details>

## Zadanie 4. Diagnoza: Pusty parametr staje się zerem | 15 minut, diagnoza

**Pliki:** [naprawa.js](naprawa.js).

**Polecenie:**

1. Przeanalizuj błędną walidację `const n = Number(req.query.limit); if (!Number.isNaN(n)) ...`. Wymaganie: limit jest pojedynczym napisem z cyfr, od 1 do 20; brak parametru daje 10.
2. Sprawdź brak, pusty tekst, 0, 20, 21, abc oraz powtórzony parametr.

**Oczekiwany wynik - przykład:** Brak limitu daje 10; limit=20 jest poprawny; limit= daje błąd.

**Sprawdź również:** Sprawdź brak, pusty tekst,0,20,21,abc i powtórzony parametr.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Punkt wyjścia:** własna, działająca część podstawowa wskazana w poleceniu.

Wybierz wariant opisany poniżej albo własny dodatek: Dodaj opcjonalny parametr sortowania z jawną listą dopuszczalnych wartości. Zachowaj działanie części podstawowej.

**Polecenie:**

1. Rozbuduj zadanie 3: `GET /api/produkty/2?ilosc=3&kod=UCZEN` obniża obliczoną kwotę o **10%**. Jeśli `kod` nie podano, wynik pozostaje bez rabatu.
2. Jedynym dozwolonym kodem jest `UCZEN`; nieznany, pusty lub powtórzony `kod` daje `400` i `{"error":"Niepoprawny kod"}`. W odpowiedzi dodaj pole `rabatProcent` (0 albo 10).
3. Dla zeszytu i trzech sztuk otrzymasz `razem:22.95`.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: Bilety na seans

**Pliki:** [domowe/review.js](domowe/review.js).

**Cel naprawy:** GET /seanse/7?osoby=3 daje {kwota:60}. Seans ma ID 7, cena 20 zł. Dozwolone jest od 1 do 5 osób, domyślnie 1. Błędne ID daje 400, nieznany poprawny 404.

**Polecenie:**

1. Uruchom lub skompiluj błędną wersję i porównaj jej zachowanie z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: Brak parametru osób, granice 1/5, wartości 0/6 i nieznany ID. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
