# Angular: input, output i odpowiedzialność komponentów

Projekt Angular 20 standalone jest przygotowany. Po npm install uruchom npx ng serve i otwórz podany adres. Dla zadania N skopiuj pliki startery/zadanieN do projektu z zachowaniem ścieżek. Używaj własnych rozwiązań z wcześniejszych zadań tam, gdzie polecenie je rozwija.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Dane rodzica w karcie | 15 minut, prowadzone

**Pliki:** [startery/zadanie1/src/app/karta.ts](startery/zadanie1/src/app/karta.ts), [startery/zadanie1/src/app/app.ts](startery/zadanie1/src/app/app.ts).

**Dane i kontekst:** Rodzic ma produkt ID 1, Notes, cena 12. Importy oraz szablon komponentu Karta są w starterze.

**Polecenie:**

1. Uzupełnij wymagane wejście input.required<Produkt>() w komponencie Karta.
2. Przekaż produkt z rodzica przez wiązanie [produkt].
3. Wyświetl w karcie nazwę i cenę otrzymanego produktu.
4. Zmień nazwę w danych rodzica i sprawdź zmianę w dziecku.

**Oczekiwany wynik - przykład:** Dziecko wyświetla Notes i cenę 12 z danych rodzica.

**Sprawdź również:** Zmień nazwę przekazaną przez rodzica i sprawdź widok dziecka.

## Zadanie 2. Zdarzenie w górę | 18 minut, wspólne

**Pliki:** [startery/zadanie2/src/app/karta.ts](startery/zadanie2/src/app/karta.ts), [startery/zadanie2/src/app/app.ts](startery/zadanie2/src/app/app.ts).

**Polecenie:**

1. Dodaj w Karcie output<number> usunieto, przycisk emituje ID. Rodzic odbiera $event i na razie pokazuje Ostatnia akcja:1.
2. Rodzic posiada stan, dziecko zgłasza zamiar.

**Oczekiwany wynik - przykład:** Kliknięcie przycisku dziecka daje w rodzicu Ostatnia akcja:1.

**Sprawdź również:** Sprawdź emitowany ID i odbiór $event w rodzicu.

## Zadanie 3. Lista kart z usuwaniem i wyczyszczeniem | 25 minut, samodzielne

**Pliki:** [startery/zadanie3/src/app/karta.ts](startery/zadanie3/src/app/karta.ts), [startery/zadanie3/src/app/app.ts](startery/zadanie3/src/app/app.ts), [startery/zadanie3/src/app/app.html](startery/zadanie3/src/app/app.html), [startery/zadanie3/src/app/app.css](startery/zadanie3/src/app/app.css).

**Dane i kontekst:** Dane rodzica: ID 1 Notes/12, ID 2 Długopis/5, ID 3 Teczka/8.

**Polecenie:**

1. W rodzicu przygotuj listę produktów i wyświetl komponenty Karta przez @for z trwałym ID.
2. Każdej karcie przekaż jeden produkt. Dziecko pokazuje nazwę i cenę.
3. Przycisk dziecka emituje usunieto z ID własnego produktu.
4. Rodzic odbiera zdarzenie i usuwa wyłącznie wskazany rekord.
5. Dodaj Wyczyść w rodzicu i komunikat Brak produktów dla pustej listy.
6. Zachowaj odpowiedzialności: dziecko nie dostaje całej tablicy i nie modyfikuje input. Sprawdź usunięcie rekordu środkowego.
7. Rodzic zarządza danymi, a dziecko przekazuje zdarzenie opisujące działanie użytkownika.

**Oczekiwany wynik - przykład:** Usunięcie Długopisu pozostawia Notes i Teczkę; Wyczyść daje Brak produktów.

**Sprawdź również:** Dziecko dostaje jeden produkt i nie zmienia wejścia; rodzic zmienia tablicę.

<details><summary>Wskazówka</summary>

Uruchom najmniejszy działający fragment. Sprawdź jeden rekord lub jedną akcję, a potem dodawaj kolejne wymagania.

</details>

## Zadanie 4. Diagnoza: odczyt wejścia | 15 minut, diagnoza

**Pliki:** [startery/zadanie4/src/app/app.ts](startery/zadanie4/src/app/app.ts).

**Polecenie:**

1. Komponent ma wyświetlać Robotyka. Napraw odczyt input.
2. Sprawdź także inną nazwę przekazaną przez rodzica.

**Oczekiwany wynik - przykład:** Komponent pokazuje Robotyka, a po zmianie wejścia nową nazwę.

**Sprawdź również:** Sprawdź odczyt wartości input oraz drugą nazwę od rodzica.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Punkt wyjścia:** własna, działająca część podstawowa wskazana w poleceniu.

Wybierz wariant opisany poniżej albo własny dodatek: Dodaj zdarzenie wybrania produktu i pokaż wybór w rodzicu. Zachowaj działanie części podstawowej.

**Polecenie:**

1. Dodaj zdarzenie wyboru karty. Rodzic pokazuje wybrane ID, ale nie usuwa rekordu.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: Usuwanie karty z poziomu rodzica

**Pliki:** [domowe/app.ts](domowe/app.ts).

**Cel naprawy:** Dziecko dostaje rekord i emituje jego ID. Kliknięcie Usuń przy ID 22 pozostawia tylko ID 11.

**Polecenie:**

1. Uruchom lub skompiluj błędną wersję i porównaj jej zachowanie z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: Usunięcie ID 22 i zachowanie rekordu ID 11. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
