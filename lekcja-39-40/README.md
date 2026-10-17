# Ćwiczenia: Angular: interpolacja, zdarzenia i właściwości

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

## Zadanie 1. Interpolacja wizytówki

W App zdefiniuj nazwa = Pracownia 4 TI, cena = 12, sztuki = 2. Wyświetl nazwę, cenę i iloczyn ceny przez sztuki w szablonie. Przed uruchomieniem oblicz wynik. Zmień wyłącznie cenę w TS na 15.

**Wynik oczekiwany:** Najpierw kwota 24, po zmianie ceny 30.

## Zadanie 2. Licznik z blokadą

Zrób licznik od 1. Plus zwiększa, minus zmniejsza do minimum 1. Przycisk minus zablokowany przy 1. W metodzie zmniejsz także sprawdzaj granicę. Wyjaśnij różnicę [disabled] od disabled="false".

**Wynik oczekiwany:** Stan 1,2,3 po dwóch plusach; minus wraca do 1 i blokuje się.

## Zadanie 3. Karta zamówienia według specyfikacji

Zbuduj Bootstrap card: nazwa Notes, cena 12 zł, liczba 1. Plus i minus sterują liczbą od 1 do 5, przy granicach przyciski zablokowane. Pole tekstowe i przycisk Zmień nazwę ustawiają nową nazwę po trim, same spacje pokazują komunikat i zachowują starą nazwę. Reset przywraca Notes i 1. Podsumowanie cena × liczba. Użyj referencji #nazwaPole, bez ngModel.

**Wynik oczekiwany:** Start 12 zł; pięć sztuk 60 zł; biała nazwa odrzucona; reset 12 zł.

## Zadanie 4. Metoda przekazana zamiast wywołania

Zmień (click)="plus()" na (click)="plus". Obserwuj brak wzrostu licznika. Wyjaśnij, dlaczego nie wystarcza nazwa funkcji i napraw. W drugim wariancie ustaw disabled="false" na plus: opisz objaw.

**Wynik oczekiwany:** Po poprawce jeden click zwiększa 1 do 2; przy 5 przycisk zablokowany.

## Zadanie 5. Rozszerzenie dla kończących wcześniej

Dodaj opcjonalną dostawę za 8 zł. Przycisk ma ją naprzemiennie włączać i wyłączać, a stan początkowy to brak dostawy. Kwota ma aktualizować się na podstawie tego stanu. Dla dwóch sztuk po 12 zł oczekuj 24 zł bez dostawy i 32 zł z dostawą.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
