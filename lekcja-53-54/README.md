# Wspólne składanie aplikacji Angular: serwis, koszyk i podsumowanie

Projekt Angular 20 standalone jest przygotowany. Po npm install uruchom npx ng serve i otwórz podany adres. Dla zadania N skopiuj pliki startery/zadanieN do projektu z zachowaniem ścieżek. Używaj własnych rozwiązań z wcześniejszych zadań tam, gdzie polecenie je rozwija.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Stan w serwisie | 15 minut, prowadzone

**Pliki:** [startery/zadanie1/src/app/koszyk.service.ts](startery/zadanie1/src/app/koszyk.service.ts), [startery/zadanie1/src/app/app.ts](startery/zadanie1/src/app/app.ts).

**Polecenie:**

1. Utwórz KoszykService providedIn root, signal sztuki=0, dodaj i wyczysc. App pobiera serwis inject i steruje licznikiem.
2. Nie twórz go przez new. Najpierw wskaż właściciela stanu.

**Oczekiwany wynik - przykład:** 0 → 1 → 2 → 0 po dwóch dodaniach i wyczyszczeniu.

**Sprawdź również:** Wskaż właściciela stanu i sprawdź pobranie serwisu przez inject.

## Zadanie 2. Pipe formatuje, nie zmienia danych | 18 minut, wspólne

**Pliki:** [startery/zadanie2/src/app/app.ts](startery/zadanie2/src/app/app.ts), [startery/zadanie2/src/app/app.html](startery/zadanie2/src/app/app.html).

**Polecenie:**

1. W App nazwa=Notes, data=2026-10-04, kwota=17. Wyświetl uppercase, datę dd.MM.yyyy i currency PLN code 1.2-2.
2. Importuj wymagane pipes. Pokaż również nieprzekształconą nazwę.

**Oczekiwany wynik - przykład:** NOTES, Notes, 04.10.2026 oraz kwota 17 z kodem PLN i dwiema cyframi części dziesiętnej.

**Sprawdź również:** Sprawdź, że pipe nie zmienia źródłowej nazwy ani kwoty.

## Zadanie 3. Dwa widoki koszyka: wspólnie, potem własna zmiana | 25 minut, wspólna praca i samodzielna zmiana

**Pliki:** [startery/zadanie3/src/app/koszyk.service.ts](startery/zadanie3/src/app/koszyk.service.ts), [startery/zadanie3/src/app/lista.ts](startery/zadanie3/src/app/lista.ts), [startery/zadanie3/src/app/podsumowanie.ts](startery/zadanie3/src/app/podsumowanie.ts), [startery/zadanie3/src/app/app.ts](startery/zadanie3/src/app/app.ts), [startery/zadanie3/src/app/app.html](startery/zadanie3/src/app/app.html), [startery/zadanie3/src/app/app.css](startery/zadanie3/src/app/app.css).

**Dane i kontekst:** Dane koszyka: Notes 12 zł ×1 i Długopis 5 zł ×1. Najpierw zbudujcie całą aplikację wspólnie, potem wykonaj samodzielną zmianę.

**Polecenie:**

1. Umieść listę koszyka w serwisie providedIn root. Dodaj operacje zwiększania sztuk, usuwania i czyszczenia oraz wyliczanie sumy.
2. Komponent Lista wyświetla pozycje i przyciski Dodaj oraz Usuń. Komponent Podsumowanie pokazuje sumę przez CurrencyPipe i Wyczyść.
3. Oba komponenty pobierają ten sam serwis; App wyświetla oba. Dodanie Notes nie zmienia Długopisu.
4. Sprawdź całą aplikację: start 17, dodanie Notes 29, usunięcie Długopisu 24, wyczyszczenie 0 i pusta lista.
5. Od świeżego startu wykonaj samodzielnie limit 3 sztuk jednego produktu. Zablokuj przycisk przy 3 i zabezpiecz metodę w serwisie.
6. Pokaż pierwszą próbę przed omówieniem. Dwa dodania Notes dają 41, trzecie pozostawia 41; dodanie Długopisu nadal działa.
7. Udostępnij wspólny stan przez jedną instancję serwisu.

**Oczekiwany wynik - przykład:** Start 17; dodanie Notes 29; usunięcie Długopisu 24; wyczyszczenie 0.

**Sprawdź również:** Osobno od świeżego startu: dwa dodania Notes dają 41, trzecie nie zmienia 41; inny produkt nadal działa.

<details><summary>Wskazówka</summary>

Sprawdź, czy oba komponenty pobierają tę samą instancję serwisu.

</details>

## Zadanie 4. Diagnoza: rozdzielony stan | 15 minut, diagnoza

**Pliki:** [startery/zadanie4/src/app/app.ts](startery/zadanie4/src/app/app.ts).

**Polecenie:**

1. Dodaj alert ma zwiększać licznik rodzica. Napraw lokalnego providera, który rozdziela stan.

**Oczekiwany wynik - przykład:** Dodaj alert zwiększa licznik widoczny u rodzica.

**Sprawdź również:** Sprawdź, że komponenty korzystają z tej samej instancji serwisu.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Punkt wyjścia:** własna, działająca część podstawowa wskazana w poleceniu.

Wybierz wariant opisany poniżej albo własny dodatek: Dodaj czytelny komunikat o osiągnięciu limitu sztuk. Zachowaj działanie części podstawowej.

**Polecenie:**

1. Dodaj trzeci komponent z datą zamówienia i sumą sztuk ze wspólnego serwisu. Start: 2 sztuki, po dodaniu Notes: 3, po wyczyszczeniu: 0.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: Wspólny licznik koszyka

**Pliki:** [domowe/app.ts](domowe/app.ts).

**Cel naprawy:** Dwa komponenty mają korzystać z jednej instancji serwisu. Dodaj zwiększa oba widoki i sumę o 12 zł. Wyczyść przywraca 0.

**Polecenie:**

1. Uruchom lub skompiluj błędną wersję i porównaj jej zachowanie z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: Zmiana w obu komponentach,kwota 12 zł za sztukę i czyszczenie. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
