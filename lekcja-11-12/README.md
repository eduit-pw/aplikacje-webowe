# Node.js: środowisko, REPL, asynchroniczność i npm

Node.js i npm. W folderze lekcji wykonaj npm install, potem node nazwa.js. Używamy CommonJS.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Środowisko, REPL i pierwszy pakiet | 15 minut, prowadzone

**Pliki:** [srodowisko.js](srodowisko.js).

**Polecenie:**

1. Sprawdź w terminalu wersje przez node -v i npm -v. Wejdź do REPL poleceniem node.
2. Utwórz const ceny = [12,18,12]. W osobnych wierszach sprawdź ceny.filter(cena => cena > 12), ceny.length i process.versions.v8. Wyjdź poleceniem .exit.
3. W folderze lekcji zainstaluj przygotowane zależności przez npm install i sprawdź npm ls lodash. Offline skorzystaj z projektu wcześniej przygotowanego przez nauczyciela.
4. Uzupełnij srodowisko.js: wypisz rzeczywistą wersję Node.js i V8, poprzedzając je etykietami Node: oraz V8:.
5. Pobierz unikalne ceny przez _.uniq. Wypisz tablicę z etykietą Unikalne ceny: i jej długość z etykietą Liczba:. Dla [12,18,12] wynik to [12,18] i 2.
6. Uruchom node srodowisko.js. Zmień wejście na [5,5,9,11] i sprawdź wynik. Wskaż package.json, lockfile i node_modules oraz krótko wyjaśnij ich role.

**Oczekiwany wynik - przykład:** Dla [12,18,12] unikalne ceny to [12,18], liczba 2; wersje Node.js i V8 pochodzą ze środowiska.

**Sprawdź również:** Dla [5,5,9,11] oczekuj [5,9,11] i 3. Wskaż package.json, lockfile i node_modules.

## Zadanie 2. Kolejność wykonania i przejście do `await` | 18 minut, wspólne

**Pliki:** [status.js](status.js), [kolejnosc.js](kolejnosc.js).

**Polecenie:**

1. Otwórz przygotowany kolejnosc.js i zapisz przewidywaną kolejność komunikatów w komentarzu przed pierwszym uruchomieniem.
2. Uruchom node kolejnosc.js. Porównaj START, KONIEC, PROMISE i TIMER ze swoim przewidywaniem.
3. Otwórz starter status.js. W funkcji main poczekaj na wynik pobierzStatus() i zapisz go w zmiennej status.
4. Wypisz Status: oraz uzyskany wynik między komunikatami A i B. Nie zmieniaj komunikatu C poza main.
5. Przewidź kolejność A, C, Status: gotowe, B, a następnie sprawdź ją przez node status.js. Wyjaśnij, co zwraca pobierzStatus() przed zakończeniem operacji.

**Oczekiwany wynik - przykład:** kolejnosc.js: START, KONIEC, PROMISE, TIMER. status.js: A, C, Status: gotowe, B.

**Sprawdź również:** Zapisz przewidywanie przed uruchomieniem i wskaż miejsce oczekiwania na Promise.

## Zadanie 3. Samodzielnie: kolejka wydruków | 25 minut, samodzielne

**Pliki:** [kolejka.js](kolejka.js).

**Polecenie:**

1. W kolejka.js wykorzystaj przygotowane zestawy A, B, C oraz funkcje pobierzZgloszenia i obsluz. Napisz async main(daneWejsciowe).
2. W main wypisz START i poczekaj na dane zwrócone przez pobierzZgloszenia.
3. Usuń powtórzenia według id, zachowując pierwszy obiekt, a następnie pozostaw typ druk. Zachowaj kolejność zgłoszeń. Możesz użyć _.uniqBy(dane, 'id').
4. Wypisz Przyjęto: N. Obsłuż każde pozostałe zgłoszenie kolejno, czekając na wynik obsluz i wypisując zwrócony komunikat.
5. Po obsłużeniu całej kolejki wypisz Zakończono: N. Obie liczby wyznacz z danych. Przy braku wydruków obie wynoszą 0 i nie ma komunikatów Gotowe.
6. Bezpośrednio po wywołaniu main, poza tą funkcją, wypisz Można przyjmować kolejne zadania. Ten komunikat ma pojawić się po START, ale przed przyjęciem i obsługą kolejki.
7. Uruchom osobno zestawy A, B i C, zmieniając argument wywołania. Dodaj nad main krótki komentarz opisujący parametr i zwracaną Promise.
8. Czekaj na wynik operacji asynchronicznej, zanim użyjesz go w dalszych obliczeniach.

**Oczekiwany wynik - przykład:** START → Można przyjmować kolejne zadania. → Przyjęto: 2 → Gotowe: D-1 → Gotowe: D-3 → Zakończono: 2.

**Sprawdź również:** Sprawdź zestawy A, B oraz pusty C. Operacje obsługuj kolejno, zachowując kolejność ID.

<details><summary>Wskazówka</summary>

Uruchom najmniejszy działający fragment. Sprawdź jeden rekord lub jedną akcję, a potem dodawaj kolejne wymagania.

</details>

## Zadanie 4. Znajdź błąd, przetestuj i udokumentuj | 15 minut, diagnoza

**Pliki:** [naprawa.js](naprawa.js).

**Polecenie:**

1. Otwórz naprawa.js. W komentarzu przewidź wynik błędnej wersji, która ma wypisywać START, Gotowe: D-7, KONIEC.
2. Uruchom program. Znajdź powód, dla którego main nie otrzymuje oczekiwanego komunikatu z funkcji obsluz.
3. Popraw przekazywanie wyniku operacji asynchronicznej i ponownie uruchom program.
4. Wykonaj trzy próby kolejki z zadania 3: zestaw A, pusty C i własny niepusty zestaw zawierający wyłącznie skany. Sprawdź liczbę komunikatów Gotowe i kolejność wypisywania. Nie mierz czasu w milisekundach.

**Oczekiwany wynik - przykład:** START → Gotowe: D-7 → KONIEC.

**Sprawdź również:** W testy.md sprawdź kolejkę A, pusty C i własny niepusty zestaw samych skanów.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Punkt wyjścia:** własna, działająca część podstawowa wskazana w poleceniu.

Wybierz wariant opisany poniżej albo własny dodatek: Zaprojektuj własną kolejkę opóźnionych operacji. Zachowaj działanie części podstawowej.

**Polecenie:**

1. Rozszerzenie wykonuj po sprawdzeniu części obowiązkowej.
2. W osobnym `blad.js` zasymuluj odrzucenie Promise z komunikatem `Brak połączenia`. Funkcja `main` ma oczekiwać na operację.
3. Po odrzuceniu program ma wypisać `Błąd: Brak połączenia`, ustawić niezerowy kod zakończenia i nie wypisać `Gotowe`. Nie buduj prawdziwego połączenia sieciowego.
4. Wskazówka API: `Promise.reject(new Error('tekst'))` zwraca odrzuconą Promise. W tym zadaniu wywołaj ją wewnątrz funkcji pobierającej dane, a tę funkcję wywołaj z `main`.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: Status zamówienia

**Pliki:** [domowe/review.js](domowe/review.js).

**Cel naprawy:** Program ma wypisać START, następnie Status: gotowe, a na końcu KONIEC. Funkcja pobierz zwraca wynik opóźnionej operacji.

**Polecenie:**

1. Uruchom lub skompiluj błędną wersję i porównaj jej zachowanie z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: Kolejność komunikatów i zwrócony status po zakończeniu operacji. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
