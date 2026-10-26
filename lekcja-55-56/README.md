# Angular: routing SPA, HttpClient i integracja z API

Projekt Angular 20 standalone jest przygotowany. Po npm install uruchom npx ng serve i otwórz podany adres. Dla zadania N skopiuj pliki startery/zadanieN do projektu z zachowaniem ścieżek. Używaj własnych rozwiązań z wcześniejszych zadań tam, gdzie polecenie je rozwija.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Dwa adresy i RouterOutlet | 15 minut, prowadzone

**Pliki:** [startery/zadanie1/src/app/app.ts](startery/zadanie1/src/app/app.ts), [startery/zadanie1/src/app/app.config.ts](startery/zadanie1/src/app/app.config.ts), [startery/zadanie1/src/app/app.routes.ts](startery/zadanie1/src/app/app.routes.ts), [startery/zadanie1/src/app/informacje.ts](startery/zadanie1/src/app/informacje.ts), [startery/zadanie1/src/app/oferta.ts](startery/zadanie1/src/app/oferta.ts), [startery/zadanie1/src/app/app.html](startery/zadanie1/src/app/app.html), [startery/zadanie1/src/app/app.css](startery/zadanie1/src/app/app.css).

**Polecenie:**

1. Utwórz dwa widoki Oferta i Informacje. Menu routerLink, miejsce na widok router-outlet.
2. Adres pusty kieruje na ofertę; nieznany także na ofertę. Zachowaj providery istniejącej konfiguracji, dodaj Router.

**Oczekiwany wynik - przykład:** Menu przełącza Oferta i Informacje; pusty oraz nieznany adres kierują na ofertę.

**Sprawdź również:** Sprawdź adresy, router-outlet i brak ręcznej podmiany DOM.

## Zadanie 2. GET przez proxy | 18 minut, wspólne

**Pliki:** [startery/zadanie2/backend/api.js](startery/zadanie2/backend/api.js), [startery/zadanie2/src/app/oferta.ts](startery/zadanie2/src/app/oferta.ts), [startery/zadanie2/proxy.conf.json](startery/zadanie2/proxy.conf.json).

**Polecenie:**

1. Dodaj provideHttpClient oraz Oferta z pobieraniem danych. Przygotuj api.js i proxy.conf.json.
2. Najpierw sprawdź JSON pod localhost:3000/api/produkty, potem uruchom Angular z proxy. Przed subscribe przewidź, czy samo get wysyła żądanie.

**Oczekiwany wynik - przykład:** Oferta pokazuje Notes 12 i Długopis 5; żądanie GET jest widoczne w Network.

**Sprawdź również:** Najpierw sprawdź backend na porcie 3000, potem frontend z proxy i moment wysłania żądania.

## Zadanie 3. Samodzielne API kursów i trzy stany widoku | 25 minut, samodzielne

**Pliki:** [startery/zadanie3/backend/api.js](startery/zadanie3/backend/api.js), [startery/zadanie3/src/app/app.ts](startery/zadanie3/src/app/app.ts), [startery/zadanie3/src/app/app.config.ts](startery/zadanie3/src/app/app.config.ts), [startery/zadanie3/src/app/app.routes.ts](startery/zadanie3/src/app/app.routes.ts), [startery/zadanie3/src/app/informacje.ts](startery/zadanie3/src/app/informacje.ts), [startery/zadanie3/src/app/oferta.ts](startery/zadanie3/src/app/oferta.ts), [startery/zadanie3/proxy.conf.json](startery/zadanie3/proxy.conf.json), [startery/zadanie3/src/app/app.html](startery/zadanie3/src/app/app.html), [startery/zadanie3/src/app/app.css](startery/zadanie3/src/app/app.css).

**Dane i kontekst:** Dane API /api/kursy: Python ID 1/cena 80, JavaScript ID 2/100, C# ID 3/120. Szkielet backendu, konfiguracja i proxy są w starterze.

**Polecenie:**

1. Zaimplementuj endpoint kursów w API, a następnie pobieranie tych danych w widoku Oferta. Zachowaj menu i routing.
2. Pokaż Ładowanie podczas oczekiwania na odpowiedź.
3. Po sukcesie pokaż listę kursów albo Brak kursów dla pustej tablicy.
4. Po błędzie pokaż Nie udało się pobrać danych. Usuń starą listę i zakończ stan ładowania.
5. Dodaj Odśwież z blokadą podczas żądania. Po zakończeniu każdej próby przycisk ponownie działa.
6. Sprawdź dane, pustą tablicę, zatrzymany backend i ponowienie po przywróceniu API.
7. Pokaż użytkownikowi ładowanie, wynik albo błąd i pozwól ponowić próbę.

**Oczekiwany wynik - przykład:** Poprawna odpowiedź:3 kursy; []:Brak kursów; brak serwera:Nie udało się pobrać danych.

**Sprawdź również:** Sprawdź ładowanie, blokadę Odśwież, błąd bez starej listy i udane ponowienie po uruchomieniu API.

<details><summary>Wskazówka</summary>

Uruchom najmniejszy działający fragment. Sprawdź jeden rekord lub jedną akcję, a potem dodawaj kolejne wymagania.

</details>

## Zadanie 4. Diagnoza: wildcard przechwytuje menu | 15 minut, diagnoza

**Pliki:** [startery/zadanie4/src/app/app.ts](startery/zadanie4/src/app/app.ts), [startery/zadanie4/src/app/app.config.ts](startery/zadanie4/src/app/app.config.ts).

**Polecenie:**

1. Menu otwiera dwie różne strony. Nieznany adres kieruje na ofertę.
2. Napraw kolejność tras.

**Oczekiwany wynik - przykład:** Menu pokazuje dwie różne strony; nieznana ścieżka prowadzi na ofertę.

**Sprawdź również:** Sprawdź obie trasy i wildcard po zmianie kolejności definicji.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Punkt wyjścia:** własna, działająca część podstawowa wskazana w poleceniu.

Wybierz wariant opisany poniżej albo własny dodatek: Dodaj liczbę rekordów ostatniej udanej odpowiedzi i czyść ją przy błędzie. Zachowaj działanie części podstawowej.

**Polecenie:**

1. Zasymuluj błąd API po 500 ms. Widok pokazuje ładowanie, potem błąd i odblokowuje Odśwież.
2. Następnie przywróć poprawną odpowiedź.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: Odświeżenie kursów po awarii

**Pliki:** [domowe/app.ts](domowe/app.ts).

**Cel naprawy:** Komponent pobiera /api/kursy z backendu lekcji 28 przez proxy. Początkowo pokazuje dane, a po zatrzymaniu backendu błąd i kończy ładowanie. Przycisk pozwala ponowić próbę.

W projekcie pozostają provideHttpClient, routing i proxy z zadania 3. Podmień tylko src/app/app.ts.

**Polecenie:**

1. Uruchom lub skompiluj błędną wersję i porównaj jej zachowanie z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: Sukces,błąd po zatrzymaniu backendu i ponowienie po jego uruchomieniu. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
