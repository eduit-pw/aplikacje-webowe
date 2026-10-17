# Ćwiczenia: Angular: serwisy, inject i formatowanie pipes

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

## Zadanie 1. Stan w serwisie

Utwórz KoszykService providedIn root, signal sztuki=0, dodaj i wyczysc. App pobiera serwis inject i steruje licznikiem. Nie twórz go przez new. Najpierw wskaż właściciela stanu.

**Wynik oczekiwany:** 0,1,2,0 po dwóch dodaniach i wyczyszczeniu.

## Zadanie 2. Pipe formatuje, nie zmienia danych

W App nazwa=Notes, data=2026-10-04, kwota=17. Wyświetl uppercase, datę dd.MM.yyyy i currency PLN code 1.2-2. Importuj wymagane pipes. Pokaż również nieprzekształconą nazwę.

**Wynik oczekiwany:** NOTES, Notes,04.10.2026, kwota 17 z kodemPLN i dwiema cyframi części dziesiętnej.

## Zadanie 3. Dwa widoki wspólnego koszyka

Samodzielnie utwórz serwis listy koszyka (dane Notes 12×1 i Długopis 5×1). Komponent Lista ma przyciski Dodaj oraz Usuń, komponent Podsumowanie wyświetla sumę przez CurrencyPipe i Wyczyść. Oba pobierają wspólny serwis root. App umieszcza oba komponenty. Dodanie Notes nie może zmienić Długopisu. Usunięcie ostatniej pozycji daje sumę 0 i pustą listę.

**Wynik oczekiwany:** Start 17, dodanie Notes 29, usunięcie Długopisu 24, wyczyszczenie 0.

## Zadanie 4. Dodatkowy provider tworzy lokalną usługę

Dodaj providers:[KoszykService] do dekoratora Lista. Kliknij Dodaj i porównaj licznik listy z podsumowaniem. Usuń ten lokalny provider i odśwież projekt, by odtworzyć stan początkowy.

**Wynik oczekiwany:** Lista i Podsumowanie korzystają z tego samego stanu, suma po dodaniu Notesu 29.

## Zadanie 5. Rozszerzenie dla kończących wcześniej

Dodaj trzeci komponent wyświetlający datę zamówienia i łączną liczbę sztuk. Korzystaj z tego samego serwisu co pozostałe komponenty. Liczbę sztuk wyznacz reaktywnie, a datę sformatuj przez `DatePipe`. Sprawdź: stan początkowy 2 sztuki, po dodaniu Notesu 3, po wyczyszczeniu 0.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
