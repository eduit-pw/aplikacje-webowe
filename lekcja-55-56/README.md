# Ćwiczenia: Angular: routing SPA, HttpClient i integracja z API

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

Backend do zadania 2 znajduje się w `backend/api.js`. W katalogu `backend` wykonaj `npm install`, a następnie `node api.js`. Plik `proxy.conf.json` skopiuj do katalogu głównego projektu Angular i uruchom frontend przez `npx ng serve --proxy-config proxy.conf.json`.

## Zadanie 1. Dwa adresy i RouterOutlet

Utwórz dwa widoki Oferta i Informacje. Menu routerLink, miejsce na widok router-outlet. Adres pusty kieruje na ofertę; nieznany także na ofertę. Zachowaj providery istniejącej konfiguracji, dodaj Router.

**Wynik oczekiwany:** Menu zmienia adres i treść widoku bez ręcznej podmiany DOM.

## Zadanie 2. GET przez proxy

Dodaj provideHttpClient oraz Oferta z pobieraniem danych. Przygotuj api.js i proxy.conf.json. Najpierw sprawdź JSON pod localhost:3000/api/produkty, potem uruchom Angular z proxy. Przed subscribe przewidź, czy samo get wysyła żądanie.

**Wynik oczekiwany:** Widoczne Notes 12 i Długopis 5; GET w Network.

## Zadanie 3. Samodzielne API kursów i trzy stany widoku

Nowe dane /api/kursy: ID 1 Python cena 80, ID 2 JavaScript 100, ID 3 C# 120. Widok Oferta pobiera kursy zamiast produktów, menu zachowane. Ma Ładowanie, błąd, listę albo Brak kursów. Dodaj Odśwież z blokadą podczas ładowania. Przy błędzie nie wyświetlaj starej listy jako udanej odpowiedzi. Przećwicz ponowienie po przywróceniu backendu. Wykorzystaj dołączony `backend/szkielet.js` i konfigurację proxy. Endpoint i obsługę odpowiedzi napisz samodzielnie. Przed uruchomieniem zatrzymaj serwer zadania 2.

**Wynik oczekiwany:** Lista 3, [] daje Brak kursów, brak serwera daje Nie udało się pobrać danych.

## Zadanie 4. Trasa wildcard albo brak subscribe

Umieść trasę `**` na początku i sprawdź menu. Następnie przywróć kolejność i usuń subscribe z GET. W Network sprawdź, czy żądanie istnieje. Napraw każdą usterkę osobno.

**Wynik oczekiwany:** Po naprawie menu działa i żądanie kończy stan ładowania.

## Zadanie 5. Rozszerzenie dla kończących wcześniej

Przygotuj lokalny wariant awarii: endpoint ma zwracać błąd HTTP 500 po 500 ms. Sprawdź, czy frontend pokazuje komunikat błędu i kończy stan ładowania. Następnie przywróć poprawną odpowiedź endpointu i ponów pobieranie.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
