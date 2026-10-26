# TypeScript: unie typów, aliasy i interfejsy

W folderze lekcji wykonaj npm install. Kompiluj każdy plik osobno: npx tsc src/zadanie1.ts --target ES2022 --module commonjs --outDir dist, potem node dist/zadanie1.js. Dla następnego zadania zmień nazwę pliku; dla diagnozy użyj src/naprawa.ts, dla pracy domowej domowe/review.ts.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Dwa formaty identyfikatora | 15 minut, prowadzone

**Pliki:** [src/zadanie1.ts](src/zadanie1.ts).

**Polecenie:**

1. Napisz `src/zadanie1.ts`. Identyfikator uczestnika jest liczbą (`125`) albo napisem (`' ab-7 '`).
2. Zdefiniuj alias `IdUczestnika` jako unię typów. Funkcja `przygotujId(id: IdUczestnika): string` dla liczby zwraca napis `NR-125`, a dla napisu usuwa spacje z obu końców i zwraca `KOD-AB-7`.
3. Użyj `typeof` przed operacjami na napisie. Wypisz wynik obu wywołań w dwóch osobnych liniach.
4. Zamień próbnie `id.trim()` na bezwarunkowe wywołanie i zobacz błąd kompilatora; następnie przywróć poprawny kod.

**Oczekiwany wynik - przykład:** Dla 125: NR-125; dla „ ab-7 ”: KOD-AB-7.

**Sprawdź również:** Sprawdź obie gałęzie unii. Próbną błędną metodę na liczbie usuń po odczytaniu komunikatu.

## Zadanie 2. Katalog kursów | 18 minut, wspólne

**Pliki:** [src/zadanie2.ts](src/zadanie2.ts).

**Polecenie:**

1. Utwórz `src/zadanie2.ts`. Interfejs `Kurs` ma wymagane pola `readonly kod: string`, `nazwa: string` i `godziny: number` oraz opcjonalne `prowadzacy?: string`.
2. Zapisz dwa kursy: `{ kod: 'TS01', nazwa: 'TypeScript', godziny: 12, prowadzacy: 'Ala' }` oraz `{ kod: 'JS01', nazwa: 'JavaScript', godziny: 8 }`. Funkcja `opisKursu(kurs: Kurs): string` wypisuje kod, nazwę, liczbę godzin i prowadzącego; gdy go brak, używa napisu `brak`.
3. Wypisz dwie linie opisów. Dodaj próbnie w pętli przypisanie `kurs.kod = 'NOWY'`, zaobserwuj błąd, a następnie usuń tę linię.

**Oczekiwany wynik - przykład:** Oba kursy mają opis, a kurs JS01 bez prowadzącego pokazuje brak.

**Sprawdź również:** Próba zmiany readonly kod ma dać błąd kompilacji; usuń ją po sprawdzeniu.

## Zadanie 3. Miniarkusz: raport zgłoszeń | 25 minut, samodzielne

**Pliki:** [src/zadanie3.ts](src/zadanie3.ts).

**Dane i kontekst:** W starterze są cztery zgłoszenia: Ada 85/przyjete, Ola 40/nowe, Jan 72/przyjete, Ewa 20/odrzucone, z identyfikatorami i opcjonalnymi e-mailami.

**Polecenie:**

1. Zdefiniuj IdZgloszenia jako number|string i StatusZgloszenia jako unię nowe,przyjete,odrzucone.
2. Zdefiniuj Zgloszenie z readonly id, imie, punkty, status i opcjonalnym email. Użyj tablicy Zgloszenie[].
3. Napisz tekstId(id):string. Liczbę zamień na napis, a napis przytnij i zamień jego litery na wielkie. Zawęź typ przed metodami string.
4. Sprawdź całkowite punkty 0-100 i niepuste imię po trim. Błąd ma zawierać czytelną przyczynę.
5. Napisz raport(zgloszenia), który zwraca liczbę przyjętych, ich identyfikatory i średnią punktów. Bez przyjętych średnia wynosi 0.
6. Wyświetl wynik jako jedną linię JSON. Zachowaj oryginalne zgłoszenia i sprawdź brak przyjętych.
7. Zawężaj unię przed użyciem metod właściwych dla konkretnego typu.

**Oczekiwany wynik - przykład:** {"przyjete":2,"idPrzyjetych":["101","C-3"],"sredniaPunktow":78.5}.

**Sprawdź również:** Brak przyjętych daje średnią 0. Sprawdź punkty 0,100,-1,101 i imię ze spacji.

<details><summary>Wskazówka</summary>

Uruchom najmniejszy działający fragment. Sprawdź jeden rekord lub jedną akcję, a potem dodawaj kolejne wymagania.

</details>

## Zadanie 4. Unia bez zawężenia | 15 minut, diagnoza

**Pliki:** [src/naprawa.ts](src/naprawa.ts).

**Polecenie:**

1. Przeanalizuj funkcję etykieta(id:string|number) wywołującą id.toUpperCase() bez sprawdzenia. Odczytaj błąd i dodaje typeof.
2. Dla liczby 42 ma zwrócić ID-42, dla napisu ab wynik AB.

**Oczekiwany wynik - przykład:** Dla liczby 42: ID-42; dla tekstu ab: AB.

**Sprawdź również:** Skompiluj obie gałęzie po dodaniu typeof i uruchom oba wywołania.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Punkt wyjścia:** własna, działająca część podstawowa wskazana w poleceniu.

Wybierz wariant opisany poniżej albo własny dodatek: Dodaj do raportu liczbę zgłoszeń w każdym poznanym statusie. Zachowaj działanie części podstawowej.

**Polecenie:**

1. Utwórz osobny `src/rozszerzenie.ts`: alias `Wynik` ma dopuszczać tylko dwa warianty obiektu: `{ ok: true, kod: string }` albo `{ ok: false, blad: string }`. Funkcja `opisWyniku(wynik: Wynik): string` dla sukcesu wypisuje kod, a dla błędu powód.
2. Jest to dodatkowy przykład unii obiektów; wspólne pole `ok` pozwala TypeScriptowi zawęzić typ.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: Identyfikator i kontakt

**Pliki:** [domowe/review.ts](domowe/review.ts).

**Cel naprawy:** Dla ID 7 i braku e-maila wynik to NR-7 / brak. Dla ID " ab-2 " i e-maila wynik to KOD-AB-2 / podany adres. Zawęź unię zamiast używać any.

**Polecenie:**

1. Uruchom lub skompiluj błędną wersję i porównaj jej zachowanie z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: ID liczbowe i tekstowe, podany e-mail i brak e-maila. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
