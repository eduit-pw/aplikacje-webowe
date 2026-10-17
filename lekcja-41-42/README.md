# Ćwiczenia: Angular: listy, @for, track i @empty

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

## Zadanie 1. Lista i pusty wynik

Zdefiniuj produkty o ID 11 (Notes,12) i 22 (Długopis,5). Wyświetl nazwy i ceny przez @for z track p.id. Dodaj @empty z Brak produktów. Przed uruchomieniem przewidź liczbę wierszy. Potem podstaw pustą tablicę.

**Wynik oczekiwany:** Dwa wiersze, po [] jeden komunikat Brak produktów.

## Zadanie 2. Tabela i usuwanie po ID

Kontynuuj na dwóch rekordach. Wyświetl tabelę: numer od 1, nazwa, cena, Usuń. Przycisk usuwa właściwy ID metodą filter. Pozostałe rekordy mają numerację bez luk. Oddziel indeks widoku od identyfikatora rekordu.

**Wynik oczekiwany:** Po usunięciu ID 11 pozostaje Długopis z numerem 1 i ID 22.

## Zadanie 3. Galeria z niezależnymi licznikami

Zbuduj galerię Bootstrap: {id:1,nazwa:Las,plik:las.svg,pobrania:0}, {id:2,nazwa:Morze,plik:morze.svg,pobrania:2}, {id:3,nazwa:Góry,plik:gory.svg,pobrania:0}. Skopiuj obrazy do `public/obrazy` zgodnie z instrukcją przygotowania. Karty w jednej kolumnie na telefonie, dwóch od md. Przyciski Pobierz zwiększają wyłącznie licznik danej karty; nazwa akcji jest szkolna, pliku nie trzeba faktycznie pobierać. Usuń kasuje właściwą kartę. Wyczyść listę oraz Brak zdjęć po pustej liście. Zdefiniuj interfejs `Zdjecie`.

**Wynik oczekiwany:** Start 0,2,0; dwa kliknięcia Las i jedno Góry dają 2,2,1.

## Zadanie 4. Powtarzający się klucz track

Ustaw drugiemu zdjęciu id=1. Zapisz dlaczego klucze przestają identyfikować rekord jednoznacznie. Sprawdź konsolę i przywróć 2. Nie rozwiązuj usterki użyciem indeksu, skoro rekordy mają trwałe ID.

**Wynik oczekiwany:** ID 1,2,3; operacja na jednym rekordzie nie zmienia dwóch kart.

## Zadanie 5. Rozszerzenie dla kończących wcześniej

Dodaj przycisk `Odwróć kolejność`, który odwraca kolejność zdjęć. Liczniki mają pozostać przy właściwych rekordach. Sprawdź to po pobraniu wybranego zdjęcia i kilkukrotnym odwróceniu listy. Zachowaj trwałe ID w `track`.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
