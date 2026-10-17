# Ćwiczenia: Angular: input, output i odpowiedzialność komponentów

## Przygotowanie

Pracuj w projekcie Angular 20.3 z komponentami standalone i plikami `src/app/app.ts`, `app.html`, `app.css`. Zachowaj konfigurację wygenerowaną w lekcjach 37-38, w tym obsługę Zone.js. Otwórz terminal w katalogu aplikacji.

```bash
npx ng serve
```

Otwórz adres podany w terminalu. Kompilację sprawdzaj poleceniem `npx ng build`. Serwer zatrzymuj przez Ctrl+C. Do osobnych ćwiczeń korzystaj z kopii własnego czystego projektu; nie nadpisuj wcześniejszych rozwiązań.

Jeśli zadanie wymaga Bootstrapa, skopiuj `vendor/bootstrap.min.css` z lekcji 09-10 do `src/vendor/bootstrap.min.css`, a w `src/styles.css` dodaj:

```css
@import "./vendor/bootstrap.min.css";
```

Potrzebne obrazy z folderu `obrazy` lekcji 09-10 skopiuj do `public/obrazy` projektu Angular. Odwołuj się do nich jako `obrazy/nazwa.svg`.

## Zadanie 1. Dane rodzica w karcie

Utwórz komponent Karta z wymaganym input Produkt. Rodzic ma produkt ID 1 Notes 12 i przekazuje go przez [produkt]. Wyświetl nazwę i cenę. Samodzielnie zdefiniuj wymagane wejście i szablon dziecka.

**Wynik oczekiwany:** Jedna karta Notes 12.

## Zadanie 2. Zdarzenie w górę

Dodaj w Karcie `output<number>` usunieto, przycisk emituje ID. Rodzic odbiera $event i na razie pokazuje Ostatnia akcja:1. Rodzic posiada stan, dziecko zgłasza zamiar.

**Wynik oczekiwany:** Kliknięcie daje Ostatnia akcja:1.

## Zadanie 3. Lista kart z usuwaniem i wyczyszczeniem

Rodzic ma produkty ID 1 Notes 12, ID 2 Długopis 5, ID 3 Teczka 8. Renderuje Karta przez @for. Każde dziecko pokazuje dane i emituje usunieto z własnym ID; rodzic usuwa tylko ten rekord. Dodaj Wyczyść w rodzicu i komunikat Brak produktów. Dziecko nie dostaje całej tablicy i nie modyfikuje input.

**Wynik oczekiwany:** Usunięcie Długopisu pozostawia Notes i Teczka; wyczyszczenie pokazuje pusty stan.

## Zadanie 4. Brak wywołania input albo wymaganych danych

W dziecku zamień produkt().nazwa na produkt.nazwa. Sprawdź błąd typów i napraw. W drugim wariancie usuń [produkt] z jednej karty rodzica. Zapisz, co oznacza input.required.

**Wynik oczekiwany:** Po poprawkach obie karty otrzymują wymagane dane, a projekt kompiluje się bez błędów.

## Zadanie 5. Rozszerzenie dla kończących wcześniej

Dodaj zdarzenie `wybrano` przekazujące liczbowe ID produktu oraz drugi przycisk w karcie. Rodzic przechowuje `wybraneId` typu `number | null`, początkowo `null`, i wyświetla ID otrzymane ze zdarzenia. Wybór nie może zmieniać listy produktów.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
