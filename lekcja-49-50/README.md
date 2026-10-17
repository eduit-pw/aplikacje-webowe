# Ćwiczenia: Angular: signals, niezmienne aktualizacje i computed

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

## Zadanie 1. Licznik jako signal

Utwórz signal(0). Plus korzysta z update, Reset z set. Odczytaj przez sztuki() i przewidź wartość po plus,plus,reset.

**Wynik oczekiwany:** 0,1,2,0.

## Zadanie 2. Lista i computed

Lista sygnału ma Notes 12, Długopis 5. computed liczy sumę cen. Usuń po ID tworząc nową tablicę. Przed usunięciem Notes przewidź sumę.

**Wynik oczekiwany:** 17, potem 5, po ostatnim usunięciu 0.

## Zadanie 3. Lista rezerwacji z reaktywną sumą

Dane startowe: ID 1 Anna 2 miejsca, ID 2 Bartek 1; cena miejsca 80. Formularz dodaje imię po trim i liczbę całkowitą 1-4. ID są unikalne i nie wynikają z długości tablicy. Lista ma Usuń i Zwiększ, ograniczenie 4. computed pokazuje łączną liczbę miejsc i kwotę. Zmieniaj listę przez update z nową tablicą, zmieniony rekord nowym obiektem. Pusta lista komunikat i suma 0.

**Wynik oczekiwany:** Start 3 miejsca 240; dodanie Celina 2:5 miejsc 400; usunięcie Anna:3 miejsca 240.

## Zadanie 4. push bez powiadomienia sygnału

Zmień dodawanie na this.rezerwacje().push(rekord). Obserwuj sumę i widok. Nie przyjmuj, że przypadkowy rerender dowodzi poprawności: sygnał nie dostał nowej referencji. Przywróć update i nową tablicę.

**Wynik oczekiwany:** Po poprawce dodanie aktualizuje listę i computed.

## Zadanie 5. Rozszerzenie dla kończących wcześniej

Dodaj przycisk zmniejszający liczbę miejsc w wybranej rezerwacji. Minimum to 1; przy tej wartości przycisk ma być zablokowany. Aktualizuj stan sygnału i sprawdź, że zmniejszenie o jedno miejsce obniża sumę o 80 zł.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
