# Ćwiczenia: Angular: formularze ngModel, walidacja i moment zapisu

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

## Zadanie 1. Podgląd przez ngModel

Dodaj FormsModule do importu TS i imports. Pole imię początkowo puste, podgląd zmienia się podczas pisania. Jest wewnątrz form i ma name. Wpisz Anna, potem wyczyść.

**Wynik oczekiwany:** Podgląd aktualizuje się z każdym wpisanym znakiem.

## Zadanie 2. Formularz produktu i walidacja

Dodaj cenę number|null, select z wartościami papier i pisanie, checkbox dostępny. Zapisz przez ngSubmit. Cena minimum 0, nazwa po trim niepusta, przy błędzie komunikat bez zapisu. Podgląd działa na żywo. Button disabled przez f.invalid nie zastępuje sprawdzenia spacji w metodzie.

**Wynik oczekiwany:** Notes 0 jest poprawny; brak ceny i nazwa ze spacji są błędne.

## Zadanie 3. Rezerwacja z podsumowaniem po zatwierdzeniu

Samodzielnie wykonaj Bootstrap form. Imię puste, liczba miejsc 1 (całkowita 1-4), kurs Python (80 zł) albo JavaScript (100 zł), laptop domyślnie wyłączony (20 zł za całą rezerwację). Formularz ma podgląd kosztu na żywo i tabelę ostatnio zatwierdzonej rezerwacji. Tabela początkowo nie istnieje. Zmiana pól po zapisie zmienia podgląd, ale nie starą tabelę. Reset przywraca pola początkowe i usuwa tabelę. Same spacje odrzucone.

**Wynik oczekiwany:** Anna,2,JavaScript,laptop daje 220; zmiana miejsc na 3: podgląd 320, tabela 220 aż do zapisu.

## Zadanie 4. Podsumowanie powiązane z bieżącym polem

W tabeli zastąp r.kwota przez kwota. Zmień liczbę po zatwierdzeniu i wskaż naruszone wymaganie. Przywróć r.kwota. W drugiej próbie usuń name z jednego ngModel w form.

**Wynik oczekiwany:** Po poprawce tabela przechowuje zatwierdzoną kwotę, kontrolka jest zarejestrowana.

## Zadanie 5. Rozszerzenie dla kończących wcześniej

Dodaj checkbox `Faktura` i pole NIP. Stan początkowy: faktura wyłączona, NIP pusty i nieaktywny. Po włączeniu faktury wymagaj dokładnie 10 cyfr NIP, bez sprawdzania sumy kontrolnej. Sprawdź: brak faktury i pusty NIP - poprawne; faktura i 9 cyfr - błąd; faktura i 10 cyfr - poprawne.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
