# Angular: listy, @for, track i @empty

Projekt Angular 20 standalone jest przygotowany. Po npm install uruchom npx ng serve i otwórz podany adres. Dla zadania N skopiuj pliki startery/zadanieN do projektu z zachowaniem ścieżek. Używaj własnych rozwiązań z wcześniejszych zadań tam, gdzie polecenie je rozwija.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Lista i pusty wynik | 15 minut, prowadzone

**Pliki:** [startery/zadanie1/src/app/app.ts](startery/zadanie1/src/app/app.ts).

**Polecenie:**

1. Zdefiniuj produkty o ID 11 (Notes,12) i 22 (Długopis,5). Wyświetl nazwy i ceny przez @for z track p.id.
2. Dodaj @empty z Brak produktów. Przed uruchomieniem przewidź liczbę wierszy.
3. Potem podstaw pustą tablicę.

**Oczekiwany wynik - przykład:** Notes i Długopis w dwóch wierszach; po [] komunikat Brak produktów.

**Sprawdź również:** Sprawdź listę dwóch elementów i pustą listę.

## Zadanie 2. Tabela i usuwanie po ID | 18 minut, wspólne

**Pliki:** [startery/zadanie2/src/app/app.ts](startery/zadanie2/src/app/app.ts).

**Polecenie:**

1. Kontynuuj na dwóch rekordach. Wyświetl tabelę: numer od 1, nazwa, cena, Usuń.
2. Przycisk usuwa właściwy ID metodą filter. Pozostałe rekordy mają numerację bez luk.
3. Oddziel indeks widoku od identyfikatora rekordu.

**Oczekiwany wynik - przykład:** Po usunięciu ID 11 pozostaje Długopis z numerem 1 i ID 22.

**Sprawdź również:** Usuń pierwszy i ostatni rekord; numer porządkowy nie jest ID.

## Zadanie 3. Galeria z niezależnymi licznikami | 25 minut, samodzielne

**Pliki:** [startery/zadanie3/src/app/app.ts](startery/zadanie3/src/app/app.ts), [startery/zadanie3/src/app/app.html](startery/zadanie3/src/app/app.html), [startery/zadanie3/src/app/app.css](startery/zadanie3/src/app/app.css).

**Dane i kontekst:** Dane: ID 1 Las/las.svg/0 pobrań, ID 2 Morze/morze.svg/2, ID 3 Góry/gory.svg/0. Obrazy są w public/obrazy.

**Polecenie:**

1. Zdefiniuj interface Zdjecie i tablicę obiektów zgodną z danymi.
2. Wyświetl karty przez @for z track po trwałym ID. Każda karta pokazuje obraz, nazwę i licznik.
3. Zbuduj jedną kolumnę na telefonie i dwie od md, korzystając z Bootstrapa.
4. Pobierz zwiększa wyłącznie licznik wskazanej karty. Jest to symulacja, bez pobierania rzeczywistego pliku.
5. Usuń kasuje wyłącznie kartę o wskazanym ID. Wyczyść listę usuwa wszystkie karty.
6. Dla pustej listy pokaż Brak zdjęć. Sprawdź niezależność liczników i usuwanie środkowej karty.
7. Używaj trwałego ID rekordu niezależnego od numeru wiersza w widoku.

**Oczekiwany wynik - przykład:** Liczniki 0,2,0; dwa kliknięcia Las i jedno Góry dają 2,2,1.

**Sprawdź również:** Usuń środkową kartę, wyczyść listę i sprawdź pusty stan oraz układ 1/2 kolumn.

<details><summary>Wskazówka</summary>

Uruchom najmniejszy działający fragment. Sprawdź jeden rekord lub jedną akcję, a potem dodawaj kolejne wymagania.

</details>

## Zadanie 4. Diagnoza: tożsamość rekordu | 15 minut, diagnoza

**Pliki:** [startery/zadanie4/src/app/app.ts](startery/zadanie4/src/app/app.ts).

**Polecenie:**

1. Dwa rekordy mają wyświetlać A i B. Napraw problem z kluczem śledzenia widoczny w konsoli.
2. Zachowaj track po trwałym ID.

**Oczekiwany wynik - przykład:** Widać A i B, konsola nie zgłasza powtarzającego się klucza śledzenia.

**Sprawdź również:** Sprawdź unikalność trwałych ID i zachowanie po zmianie kolejności.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Punkt wyjścia:** własna, działająca część podstawowa wskazana w poleceniu.

Wybierz wariant opisany poniżej albo własny dodatek: Dodaj łączną liczbę pobrań wszystkich zdjęć. Zachowaj działanie części podstawowej.

**Polecenie:**

1. Dodaj przycisk Odwróć kolejność. Liczniki pobrań pozostają przy właściwych zdjęciach.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: Lista startowa zawodników

**Pliki:** [domowe/app.ts](domowe/app.ts).

**Cel naprawy:** Wyświetl numer porządkowy od 1, imię i przycisk usunięcia. Usuwamy po ID 11 lub 22, a nie po pozycji w tablicy.

**Polecenie:**

1. Uruchom lub skompiluj błędną wersję i porównaj jej zachowanie z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: Usunięcie pierwszego i drugiego ID oraz numeracja od 1. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
