# Angular: signals, niezmienne aktualizacje i computed

Projekt Angular 20 standalone jest przygotowany. Po npm install uruchom npx ng serve i otwórz podany adres. Dla zadania N skopiuj pliki startery/zadanieN do projektu z zachowaniem ścieżek. Używaj własnych rozwiązań z wcześniejszych zadań tam, gdzie polecenie je rozwija.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Licznik jako signal | 15 minut, prowadzone

**Pliki:** [startery/zadanie1/src/app/app.ts](startery/zadanie1/src/app/app.ts).

**Polecenie:**

1. Utwórz signal(0). Plus korzysta z update, Reset z set.
2. Odczytaj przez sztuki() i przewidź wartość po plus,plus,reset.

**Oczekiwany wynik - przykład:** 0 → 1 → 2 → 0 po Plus,Plus,Reset.

**Sprawdź również:** Sprawdź odczyt sygnału oraz użycie update i set.

## Zadanie 2. Lista i computed | 18 minut, wspólne

**Pliki:** [startery/zadanie2/src/app/app.ts](startery/zadanie2/src/app/app.ts).

**Polecenie:**

1. Lista sygnału ma Notes 12, Długopis 5. computed liczy sumę cen. Usuń po ID tworząc nową tablicę.
2. Przed usunięciem Notes przewidź sumę.

**Oczekiwany wynik - przykład:** Suma 17; po usunięciu Notes 5; po ostatnim usunięciu 0.

**Sprawdź również:** Sprawdź obliczenie sumy po każdej zmianie listy.

## Zadanie 3. Lista rezerwacji z reaktywną sumą | 25 minut, samodzielne

**Pliki:** [startery/zadanie3/src/app/app.ts](startery/zadanie3/src/app/app.ts), [startery/zadanie3/src/app/app.html](startery/zadanie3/src/app/app.html), [startery/zadanie3/src/app/app.css](startery/zadanie3/src/app/app.css).

**Dane i kontekst:** Dane początkowe: Anna ID 1/2 miejsca i Bartek ID 2/1 miejsce. Cena miejsca wynosi 80 zł.

**Polecenie:**

1. Przechowuj listę rezerwacji w signal. Dodaj formularz imienia i liczby miejsc.
2. Dodawaj tylko niepuste imię po trim i całkowitą liczbę miejsc 1-4. Nadaj unikalne ID niezależne od długości tablicy.
3. Dodaj Usuń oraz Zwiększ dla wskazanego ID. Zwiększanie kończy się na 4 miejscach; metoda również pilnuje limitu.
4. Aktualizuj listę przez update, tworząc nową tablicę i nowy obiekt zmienianego rekordu.
5. Wyliczaj łączną liczbę miejsc i kwotę przez computed.
6. Dla pustej listy pokaż komunikat i sumy 0. Sprawdź usunięcie, późniejsze dodanie i brak powtarzających się ID.
7. Wyliczaj stan pochodny przez computed, a listę aktualizuj przez nową tablicę.

**Oczekiwany wynik - przykład:** Start:3 miejsca,240. Dodanie Celiny na 2:5,400. Usunięcie Anny:3,240.

**Sprawdź również:** Sprawdź limit 4, błędne imię i miejsca, puste dane oraz unikalność ID po usunięciu i dodaniu.

<details><summary>Wskazówka</summary>

Uruchom najmniejszy działający fragment. Sprawdź jeden rekord lub jedną akcję, a potem dodawaj kolejne wymagania.

</details>

## Zadanie 4. Diagnoza: jednorazowa suma | 15 minut, diagnoza

**Pliki:** [startery/zadanie4/src/app/app.ts](startery/zadanie4/src/app/app.ts).

**Polecenie:**

1. Start: 1 / 5, po kliknięciu 2 / 10. Napraw stan pochodny, który nie reaguje na zmianę liczby sztuk.

**Oczekiwany wynik - przykład:** Start 1 / 5; po kliknięciu 2 / 10.

**Sprawdź również:** Po kolejnych kliknięciach stan pochodny nadal odpowiada liczbie sztuk.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Punkt wyjścia:** własna, działająca część podstawowa wskazana w poleceniu.

Wybierz wariant opisany poniżej albo własny dodatek: Dodaj computed liczby rezerwacji obejmujących co najmniej dwa miejsca. Zachowaj działanie części podstawowej.

**Polecenie:**

1. Dodaj zmniejszanie liczby miejsc do minimum 1. Zmiana jednej rezerwacji nie wpływa na inne.
2. Cena miejsca to 80 zł.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: Reaktywna lista numerów

**Pliki:** [domowe/app.ts](domowe/app.ts).

**Cel naprawy:** Dodawanie zwiększa listę o jeden numer i odświeża licznik. Początkowo lista ma jeden wpis, po kliknięciu dwa.

**Polecenie:**

1. Uruchom lub skompiluj błędną wersję i porównaj jej zachowanie z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: Stan początkowy,dwa dodania i zgodność licznika z listą. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
