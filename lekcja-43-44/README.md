# Angular: @if, przełączniki i filtrowanie

Projekt Angular 20 standalone jest przygotowany. Po npm install uruchom npx ng serve i otwórz podany adres. Dla zadania N skopiuj pliki startery/zadanieN do projektu z zachowaniem ścieżek. Używaj własnych rozwiązań z wcześniejszych zadań tam, gdzie polecenie je rozwija.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Widok zależny od boolean | 15 minut, prowadzone

**Pliki:** [startery/zadanie1/src/app/app.ts](startery/zadanie1/src/app/app.ts).

**Polecenie:**

1. Utwórz dostępny=true, przycisk przełączający i @if/@else z tekstem Dostępny albo Niedostępny. Przewidź tekst po dwóch kliknięciach.

**Oczekiwany wynik - przykład:** Dostępny → Niedostępny → Dostępny.

**Sprawdź również:** Sprawdź stan początkowy i dwa kliknięcia.

## Zadanie 2. Checkbox a value | 18 minut, wspólne

**Pliki:** [startery/zadanie2/src/app/app.ts](startery/zadanie2/src/app/app.ts).

**Polecenie:**

1. Odczytaj stan checkboxa przez #filtr.checked w zdarzeniu change. Ma pokazywać panel Szczegóły tylko po zaznaczeniu.
2. Bez ngModel; użyj @if. Porównaj usunięcie elementu z DOM z [hidden].

**Oczekiwany wynik - przykład:** Początkowo brak panelu Szczegóły; zaznaczenie pokazuje, odznaczenie usuwa panel.

**Sprawdź również:** Sprawdź checked, zdarzenie change i obecność elementu w DOM.

## Zadanie 3. Filtrowanie kilkoma przełącznikami | 25 minut, samodzielne

**Pliki:** [startery/zadanie3/src/app/app.ts](startery/zadanie3/src/app/app.ts), [startery/zadanie3/src/app/app.html](startery/zadanie3/src/app/app.html), [startery/zadanie3/src/app/app.css](startery/zadanie3/src/app/app.css).

**Dane i kontekst:** Dane: ID 1 Las/natura, ID 2 Morze/natura, ID 3 Miasto/architektura. Obrazy są w public/obrazy.

**Polecenie:**

1. Dodaj przełączniki Natura i Architektura, początkowo zaznaczone. Odczytuj stan przez checked.
2. Pokaż zdjęcia z dowolnej zaznaczonej kategorii, łącząc kategorie przez OR.
3. Gdy nie zaznaczono żadnej lub wynik jest pusty, pokaż Brak pasujących zdjęć.
4. Zachowaj pełną tablicę źródłową podczas filtrowania.
5. Dodaj Pobierz, zwiększające licznik wyłącznie danego zdjęcia. Ukrycie i ponowne pokazanie kategorii zachowuje licznik.
6. Sprawdź cztery kombinacje przełączników oraz powrót wcześniej ukrytego zdjęcia.
7. Filtruj widok, zachowując pełne dane źródłowe.

**Oczekiwany wynik - przykład:** Obie kategorie:3 zdjęcia; natura:2; architektura:1; żadne:0.

**Sprawdź również:** Zwiększ licznik, ukryj kategorię i pokaż ponownie. Licznik pozostaje przy zdjęciu.

<details><summary>Wskazówka</summary>

Uruchom najmniejszy działający fragment. Sprawdź jeden rekord lub jedną akcję, a potem dodawaj kolejne wymagania.

</details>

## Zadanie 4. Diagnoza: filtr gubi źródło | 15 minut, diagnoza

**Pliki:** [startery/zadanie4/src/app/app.ts](startery/zadanie4/src/app/app.ts).

**Polecenie:**

1. Po pierwszym kliknięciu zostaje A, po drugim wracają A i B. Napraw utratę danych po wyłączeniu filtra.

**Oczekiwany wynik - przykład:** Pierwsze kliknięcie pozostawia A, drugie przywraca A i B.

**Sprawdź również:** Powtórz przełączanie kilka razy i sprawdź zachowanie danych źródłowych.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Punkt wyjścia:** własna, działająca część podstawowa wskazana w poleceniu.

Wybierz wariant opisany poniżej albo własny dodatek: Dodaj informację, ile zdjęć pasuje do aktualnego filtra. Zachowaj działanie części podstawowej.

**Polecenie:**

1. Dodaj Tylko pobrane. Kategorie łącz przez OR, a warunek pobrań z wynikiem przez AND.
2. Bez pobranych zdjęć widok jest pusty.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: Filtry atrakcji

**Pliki:** [domowe/app.ts](domowe/app.ts).

**Cel naprawy:** Niezależnie włączamy kategorie park i muzeum. Zaznaczenie obu pokazuje dwa wpisy, wyłączenie obu komunikat Brak. Źródło musi przetrwać filtrowanie.

**Polecenie:**

1. Uruchom lub skompiluj błędną wersję i porównaj jej zachowanie z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: Cztery kombinacje kategorii i przywrócenie danych po zmianie filtra. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
