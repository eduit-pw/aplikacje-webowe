# Ćwiczenia: Próba rezultatów webowych: integracja, testy i oddanie projektu

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

Dołączone pliki są infrastrukturą: `backend/api.cjs`, `backend/package.json`, `proxy.conf.json` i `src/app/app.config.ts`. W folderze `backend` wykonaj `npm install` i `node api.cjs`. Konfigurację proxy skopiuj do głównego katalogu własnego frontendu, a `app.config.ts` do jego `src/app`. Komponent `App`, widok i style wykonaj samodzielnie.

## Zadanie 1. Analiza specyfikacji i start

Przed kodowaniem wypisz wymagania w tabeli: wymaganie, plik/metoda, sposób sprawdzenia. API GET /api/rezerwacje zwraca listę; POST przyjmuje {imie,miejsca}, miejsc całkowite 1-4, imię po trim niepuste. Endpoint działa na 3000. Frontend używa proxy, działa na 4200. Przygotowany backend uruchom `node api.cjs`, frontend `npx ng serve --proxy-config proxy.conf.json`. Na początku musi pojawić się ładowanie, potem lista lub pusty komunikat. Własne reguły nie mogą zmienić wymaganych danych.

## Zadanie 2. Aplikacja według wymagań

Nagłówek Rezerwacje pracowni. Bootstrap form: imię puste, miejsca 1. Zapisz wysyła dane do API dopiero po poprawnej walidacji. Podczas zapisu blokuje przycisk i pola, aby uniknąć przypadkowego podwójnego wysłania. Poprawny POST daje komunikat Zapisano, dodaje rekord zwrócony przez serwer do listy i przywraca pola początkowe. Lista w tabeli pokazuje imię i miejsca, computed sumę miejsc. Nie przypisuj sam ID zwróconego rekordu. Przy błędzie wyświetl komunikat, zwolnij blokadę, zachowaj dane formularza. Ładowanie, błąd i poprawny pusty wynik mają różne znaczenie. Aplikacja po odświeżeniu odczytuje stan z API.

## Zadanie 3. Testy typowe, graniczne i błędne

Nowy start backendu: lista[], suma 0. Zapis Anna 2 →lista 1,suma 2. Bartek 1 →lista 2,suma 3. Odśwież przeglądarkę bez restartu backendu →te same rekordy. Próby miejsc 0,5,1.5 i null oraz białego imienia →brak POST z poprawnymi danymi, komunikat walidacji. Miejsca 4 poprawne. Zatrzymaj API i wykonaj poprawny zapis →błąd sieci, dane zachowane, przycisk ponownie dostępny. Przy ponownym starcie API lista pamięci zostaje wyzerowana; odśwież stronę, zanim porównasz stan. Nie używaj starego zrzutu jako dowodu ostatniej wersji.

## Zadanie 4. Dokumentacja i kompletne oddanie

Szkolna specyfikacja oddania: folder lekcja-59-60 zawiera frontend z konfiguracją/manifestami i zasobami, backend/api.cjs z manifestami oraz dokumentacja.md i dowody/typowy.png, dowody/graniczny.png, dowody/bledny.png. Dokumentacja: faktyczne wersje narzędzi odczytane na stanowisku, polecenia startu, trzy testy z wynikami, jeden opis naprawy. Komentarz przy metodzie zapisz opisuje cel, dane wejściowe i skutki; nie kopiuj numerów kryteriów z innego arkusza. Archiwum lekcja-59-60.zip bez node_modules, cache, dist i danych wrażliwych. 

Przed końcem rozpakuj ZIP do innego folderu, sprawdź obecność plików i aktualność źródeł/zrzutów. Zależności odtwarzaj z przygotowanego zestawu; nie usuwaj jedynej lokalnej kopii przez npm ci bez dostępu do pakietów. Na rzeczywistym egzaminie nazwy, zawartość i forma dokumentacji wynikają z otrzymanego arkusza, nie z tej szkolnej specyfikacji.

## Zadanie 5. Rozszerzenie dla kończących wcześniej

Po próbie dodaj przycisk czyszczący formularz bez wysyłania żądania HTTP. Ma przywracać puste imię, 1 miejsce i usuwać komunikaty. Podczas zapisywania przycisk jest zablokowany. Lista rezerwacji i suma miejsc pozostają bez zmian.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
