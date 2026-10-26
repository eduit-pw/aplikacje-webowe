# TypeScript: typy proste i `tsconfig.json`

W folderze lekcji wykonaj npm install. Kompiluj każdy plik osobno: npx tsc src/zadanie1.ts --target ES2022 --module commonjs --outDir dist, potem node dist/zadanie1.js. Dla następnego zadania zmień nazwę pliku; dla diagnozy użyj src/naprawa.ts, dla pracy domowej domowe/review.ts.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Metryka produktu | 15 minut, prowadzone

**Pliki:** [src/zadanie1.ts](src/zadanie1.ts).

**Polecenie:**

1. Utwórz `src/zadanie1.ts`. Zapisz produkt o nazwie `Zeszyt`, cenie `12.5` i dostępności `true`, używając jawnych typów `string`, `number`, `boolean`.
2. Dodaj rabat `0.2` z typem wywnioskowanym przez kompilator. Napisz funkcję `cenaPoRabacie(cena: number, rabat: number): number`.
3. Wypisz dokładnie `Zeszyt: 10 zł, dostępny: tak`. Skompiluj projekt i uruchom wygenerowany plik JS.
4. Na próbę zamień cenę na tekst `'12.5'`, zobacz błąd kompilatora, a następnie przywróć liczbę.

**Oczekiwany wynik - przykład:** Zeszyt: 10 zł, dostępny: tak.

**Sprawdź również:** Przypisanie tekstu do ceny typu number wywołuje błąd kompilacji; po próbie przywróć liczbę.

## Zadanie 2. Wyniki próbnego testu | 18 minut, wspólne

**Pliki:** [src/zadanie2.ts](src/zadanie2.ts).

**Polecenie:**

1. Utwórz `src/zadanie2.ts`. Wyniki czterech osób wynoszą `[15, 20, 5, 20]` punktów.
2. Utwórz tablicę `number[]`, funkcję `obliczSrednia(wyniki: number[]): number` oraz zmienną logiczną określającą, czy średnia wynosi co najmniej 12 punktów. Policz, ile wyników wynosi co najmniej 18 punktów.
3. Wypisz w jednej linii JSON `{"srednia":15,"zaliczono":true,"wysokieWyniki":2}`. Pusta tablica ma dawać średnią `0` bez dzielenia przez zero.

**Oczekiwany wynik - przykład:** {"srednia":15,"zaliczono":true,"wysokieWyniki":2}.

**Sprawdź również:** Pusta tablica daje średnią 0. Sprawdź dokładnie próg 18 punktów.

## Zadanie 3. Miniarkusz: rachunek zakupów | 25 minut, samodzielne

**Pliki:** [src/zadanie3.ts](src/zadanie3.ts).

**Dane i kontekst:** Dane: nazwy Długopis,Zeszyt,Teczka; ceny [3,8.5,12]; ilości [2,3,1]. Od kwoty 40 zł włącznie obowiązuje rabat 10%.

**Polecenie:**

1. W src/zadanie3.ts zadeklaruj nazwy jako string[], ceny i ilości jako number[].
2. Napisz obliczRazem(ceny:number[],ilosci:number[]):number. Przy różnych długościach tablic zgłoś czytelny błąd.
3. Sprawdź dodatnie, skończone ceny i dodatnie całkowite ilości. Niepoprawne wartości przerywają obliczenia z komunikatem.
4. Oblicz sumę sztuk, kwotę przed rabatem, rabat i kwotę do zapłaty. Zmienna promocja ma typ boolean. Kwotę końcową zaokrąglij do dwóch miejsc i zachowaj jako liczbę.
5. Wyświetl jeden obiekt JSON z polami sztuki,razemPrzedRabatem,rabatProcent,doZaplaty,promocja.
6. Skompiluj: npx tsc src/zadanie3.ts --target ES2022 --module commonjs --outDir dist. Uruchom: node dist/zadanie3.js.
7. Rozróżniaj kontrolę typu przez kompilator i sprawdzanie zakresu wartości w programie.

**Oczekiwany wynik - przykład:** {"sztuki":6,"razemPrzedRabatem":43.5,"rabatProcent":10,"doZaplaty":39.15,"promocja":true}.

**Sprawdź również:** Sprawdź próg rabatu 40, różne długości tablic, ilość ułamkową i cenę spoza zakresu.

<details><summary>Wskazówka</summary>

Uruchom najmniejszy działający fragment. Sprawdź jeden rekord lub jedną akcję, a potem dodawaj kolejne wymagania.

</details>

## Zadanie 4. Typ poprawny, wartość spoza zakresu | 15 minut, diagnoza

**Pliki:** [src/naprawa.ts](src/naprawa.ts).

**Polecenie:**

1. Przeanalizuj kod const rabat:number=120 i obliczenie cena*(1-rabat/100). Przewidź, dlaczego tsc go akceptuje, a wynik ceny 12 jest -2.4.
2. Dopisz walidację skończonego rabatu 0-100. Sprawdź 0,100,120 i NaN.

**Oczekiwany wynik - przykład:** Cena 12: rabat 0 daje 12, rabat 100 daje 0; rabat 120 jest odrzucony.

**Sprawdź również:** Sprawdź 0,100,120 i NaN; sam typ number nie sprawdza zakresu.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Punkt wyjścia:** własna, działająca część podstawowa wskazana w poleceniu.

Wybierz wariant opisany poniżej albo własny dodatek: Dodaj do rachunku własny wariant podsumowania, zachowując typy. Zachowaj działanie części podstawowej.

**Polecenie:**

1. Rozbuduj zadanie 3: napisz funkcję `zastosujRabat(kwota: number, rabat: number): number`. Ma zwracać kwotę z rabatem (zaokrągloną do dwóch miejsc), ale odrzucać rabat spoza zakresu `0-100` oraz ujemną lub nieskończoną kwotę.
2. Użyj jej do wyznaczenia `doZaplaty`. Wywołanie z `zastosujRabat(100, 120)` ma rzucać błąd; typ `number` sam nie ogranicza zakresu.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: Przelicznik drogi

**Pliki:** [domowe/review.ts](domowe/review.ts).

**Cel naprawy:** Funkcja przyjmuje kilometry i zwraca metry. Dla 1.5 wynik to 1500. Cena biletu 4 zł razy 3 osoby daje 12. Program ma się kompilować bez osłabiania typów.

**Polecenie:**

1. Uruchom lub skompiluj błędną wersję i porównaj jej zachowanie z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: 1.5 km,0 km oraz rachunek 4 zł ×3. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
