# ES6+: funkcje, destrukturyzacja i metody tablic

Otwórz plik HTML w przeglądarce. Wyniki i błędy skryptu sprawdzaj w F12. Biblioteki i obrazy są lokalne.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Funkcja zwraca wartość | 15 minut, prowadzone

**Pliki:** [zadanie1/app.js](zadanie1/app.js).

**Polecenie:**

1. Napisz trzy funkcje strzałkowe: `kwota(cena, ilosc)` zwraca iloczyn; `etykieta(produkt)` pobiera przez destrukturyzację nazwę i cenę, zwraca tekst „nazwa: cena zł”; `obiekt(nazwa)` zwraca obiekt z polami `nazwa` oraz `aktywny: true`. Dla produktu `{nazwa: "Notes", cena: 12, stan: 4}` pobierz także nazwę i stan przez destrukturyzację.
2. Utwórz kopię z polem `stan: 5` za pomocą spread; oryginał ma nadal stan 4.
3. Wypisz wyniki `kwota(12,3)`, etykiety i obiektu dla „Notes”, pobrane pola oraz stany oryginału i kopii. Przewidź różnicę między `x => x*2` a `x => { x*2; }`.

**Oczekiwany wynik - przykład:** kwota(12,3) daje 36; etykieta: Notes: 12 zł; stany oryginału i kopii: 4 i 5.

**Sprawdź również:** Porównaj funkcję strzałkową z jawnym return i bez niego.

## Zadanie 2. Dobierz metodę do wyniku | 18 minut, wspólne

**Pliki:** [zadanie2/app.js](zadanie2/app.js).

**Polecenie:**

1. Dane: `[3,8,2,5]`. Bez ręcznego przepisywania wyników utwórz: A - liczby podwojone `[6,16,4,10]`; B - parzyste `[8,2]`; C - sumę 18; D - pierwszą liczbę większą od 4, czyli 8; E - posortowaną kopię `[2,3,5,8]`.
2. Oryginał ma pozostać `[3,8,2,5]`. Zastosuj metody tablic i funkcje strzałkowe.
3. Wypisz sześć wyników.
4. Zapisz, dlaczego wybierasz `map` albo `filter`. Sprawdź też pustą tablicę: wyniki A, B, E to `[]`, C to 0, D to `undefined`.

**Oczekiwany wynik - przykład:** [6,16,4,10]; [8,2]; 18; 8; [2,3,5,8]; źródło [3,8,2,5].

**Sprawdź również:** Dla pustej tablicy: puste tablice, suma 0, wyszukanie undefined.

## Zadanie 3. Raport magazynu | 25 minut, samodzielne

**Pliki:** [zadanie3/app.js](zadanie3/app.js).

**Dane i kontekst:** Dane w starterze: Notes 12 zł/4 szt., Długopis 4 zł/0 szt., Teczka 8 zł/5 szt., Marker 10 zł/2 szt.

**Polecenie:**

1. Napisz raport(dane, limit=10), który zwraca obiekt z polami etykiety, wartosc i kolejnosc.
2. Wybierz produkty z ceną nie większą od limitu i dodatnim stanem magazynu.
3. Zbuduj etykiety w formacie nazwa: cena zł, zachowując kolejność wybranych danych.
4. Oblicz sumę cena × stan dla wybranych produktów.
5. Przygotuj tablicę nazw wybranych produktów posortowanych rosnąco po cenie. Zachowaj tablicę wejściową i jej obiekty.
6. Użyj destrukturyzacji w callbackach. Sprawdź limit 10, pustą tablicę oraz limit 7. Porównaj kolejność ID w źródle przed i po wywołaniu.
7. Funkcja obliczająca wynik zwraca dane; wyświetlanie pozostaje w kodzie wywołującym.

**Oczekiwany wynik - przykład:** Limit 10: etykiety Teczka: 8 zł i Marker: 10 zł; wartość 60; kolejność Teczka, Marker.

**Sprawdź również:** Pusta tablica i limit 7 dają wartość 0 i puste listy. Źródłowe ID pozostają 1,2,3,4.

<details><summary>Wskazówka</summary>

Uruchom najmniejszy działający fragment. Sprawdź jeden rekord lub jedną akcję, a potem dodawaj kolejne wymagania.

</details>

## Zadanie 4. Trzy usterki w krótkim programie | 15 minut, diagnoza

**Pliki:** [zadanie4/app.js](zadanie4/app.js), [zadanie4/index.html](zadanie4/index.html).

**Polecenie:**

1. Przeanalizuj kod. Oczekiwane: podwojone ceny `[24,6]`, posortowane nazwy `["B","A"]`, suma pustej tablicy 0 i niezmieniona kolejność wejścia `["A","B"]`.
2. Znajdź trzy przyczyny rozbieżności; popraw je i sprawdź wyniki.

**Oczekiwany wynik - przykład:** Ceny [24,6], posortowane nazwy B,A, suma pustej tablicy 0; źródło A,B.

**Sprawdź również:** Sprawdź osobno zwracanie wartości, zachowanie kolejności źródła i sumowanie pustej tablicy.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Punkt wyjścia:** własna, działająca część podstawowa wskazana w poleceniu.

Wybierz wariant opisany poniżej albo własny dodatek: Dodaj do raportu magazynu własne podsumowanie, np. liczbę dostępnych produktów. Zachowaj działanie części podstawowej.

**Polecenie:**

1. Zbuduj `podsumuj(...wartosci)`: suma dowolnej liczby argumentów, bez argumentów 0. Wywołaj ją z tablicą `[2,3,5]` przez spread.
2. Następnie udowodnij, że `{...baza}` nie kopiuje niezależnie zagnieżdżonego `meta` w `{nazwa:"Notes",meta:{stan:4}}`. Zrób drugą wersję, która kopiuje też `meta`, i pokaż różnicę.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: Playlista bez zmiany źródła

**Pliki:** [domowe/review.js](domowe/review.js).

**Cel naprawy:** Wybierz dostępne utwory, podaj sumę ich długości i posortowaną po czasie kopię. Dla danych startowych suma wynosi 200. Kolejność źródła pozostaje B, A, C.

**Polecenie:**

1. Uruchom lub skompiluj błędną wersję i porównaj jej zachowanie z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: Dostępne utwory, brak dostępnych utworów i zachowanie źródłowej kolejności. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
