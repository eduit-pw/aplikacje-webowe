# Ćwiczenia: TypeScript: unie typów, aliasy i interfejsy

## Przygotowanie

W nowym katalogu zainstaluj kompilator i utwórz konfigurację:

```bash
npm init -y
npm install --save-dev typescript@5.9.3
npx tsc --init
```

Utwórz katalog `src` i pliki wskazane w zadaniach. Korzystaj z domyślnej konfiguracji TypeScript 5.9.3: JavaScript powstaje obok plików TypeScript. Kompiluj i uruchamiaj kolejno:

```bash
npx tsc
node src/zadanie1.js
```

Dla kolejnych zadań podaj właściwą nazwę pliku JS. Jeśli konfiguracja już istnieje, nie wykonuj ponownie `--init`. Przy globalnym kompilatorze możesz użyć `tsc` zamiast `npx tsc`. Po błędzie popraw kod i ponów kompilację przed uruchomieniem JS. Nie przenoś tu konfiguracji z Angulara.

## Zadanie 1. Dwa formaty identyfikatora

Napisz `src/zadanie1.ts`. Identyfikator uczestnika jest liczbą (`125`) albo napisem (`' ab-7 '`). Zdefiniuj alias `IdUczestnika` jako unię typów. Funkcja `przygotujId(id: IdUczestnika): string` dla liczby zwraca napis `NR-125`, a dla napisu usuwa spacje z obu końców i zwraca `KOD-AB-7`. Użyj `typeof` przed operacjami na napisie. Wypisz wynik obu wywołań w dwóch osobnych liniach. Zamień próbnie `id.trim()` na bezwarunkowe wywołanie i zobacz błąd kompilatora; następnie przywróć poprawny kod.

**Oddawany rezultat:** `src/zadanie1.ts` i dwa wiersze wyniku.

## Zadanie 2. Katalog kursów

Utwórz `src/zadanie2.ts`. Interfejs `Kurs` ma wymagane pola `readonly kod: string`, `nazwa: string` i `godziny: number` oraz opcjonalne `prowadzacy?: string`. Zapisz dwa kursy: `{ kod: 'TS01', nazwa: 'TypeScript', godziny: 12, prowadzacy: 'Ala' }` oraz `{ kod: 'JS01', nazwa: 'JavaScript', godziny: 8 }`. Funkcja `opisKursu(kurs: Kurs): string` wypisuje kod, nazwę, liczbę godzin i prowadzącego; gdy go brak, używa napisu `brak`. Wypisz dwie linie opisów. Dodaj próbnie w pętli przypisanie `kurs.kod = 'NOWY'`, zaobserwuj błąd, a następnie usuń tę linię.

**Oddawany rezultat:** `src/zadanie2.ts` i dwie linie wyniku.

## Zadanie 3. Miniarkusz: raport zgłoszeń

**Autorska sytuacja:** sekretariat otrzymał cztery zgłoszenia na warsztaty. Identyfikator bywa liczbą lub napisem, status może mieć tylko trzy ustalone wartości, a adres e-mail jest opcjonalny. Przygotuj raport w jednej linii JSON.

**Dane:**

| id | imie | punkty | status | email |
|---|---|---:|---|---|
| `101` | `Ada` | `85` | `przyjete` | `ada@example.org` |
| `' b-2 '` | `Ola` | `40` | `nowe` | brak |
| `' c-3 '` | `Jan` | `72` | `przyjete` | brak |
| `104` | `Ewa` | `20` | `odrzucone` | `ewa@example.org` |

**Wymagania do odhaczenia:**

1. Zdefiniuj `type IdZgloszenia = number | string` i `type StatusZgloszenia = 'nowe' | 'przyjete' | 'odrzucone'`.
2. Zdefiniuj `interface Zgloszenie` z polami `readonly id`, `imie`, `punkty`, `status` i opcjonalnym `email`. Utwórz tablicę `Zgloszenie[]` zgodną z danymi.
3. Funkcja `tekstId(id: IdZgloszenia): string` zamienia każdą wartość na napis; dla napisu usuwa białe znaki na końcach i zamienia litery na wielkie. Nie wywołuj `.trim()` na liczbie.
4. Funkcja `raport(zgloszenia: Zgloszenie[])` wybiera tylko status `przyjete` i zwraca obiekt `{ przyjete: 2, idPrzyjetych: ['101', 'C-3'], sredniaPunktow: 78.5 }`. Dla pustej listy przyjętych średnia ma wynosić `0`.
5. Przed obliczeniem raportu sprawdź, czy `punkty` każdego zgłoszenia są liczbą całkowitą od `0` do `100` i czy `imie` nie składa się z samych spacji. W razie błędu zgłoś `Error` z czytelną przyczyną. Wypisz obiekt jako JSON w jednym wierszu.

**Oddawany rezultat:** `src/zadanie3.ts`, wynik poprawny i wynik próby po tymczasowej zmianie `punkty` Ewy na `120`.

## Zadanie 4. Unia bez zawężenia

Utwórz `src/naprawa17.ts`:

```ts
function etykieta(id: string | number): string {
  return id.toUpperCase();
}
```

Odczytaj błąd kompilatora. Dodaj zawężanie typu przez `typeof`: dla liczby `42` funkcja ma zwracać `ID-42`, a dla napisu `ab` wynik `AB`. Sprawdź oba wywołania i udokumentuj poprawkę.

## Zadanie 5. Dla chętnych: opis stanu wyniku

Utwórz osobny `src/zadanie4.ts`: alias `Wynik` ma dopuszczać tylko dwa warianty obiektu: `{ ok: true, kod: string }` albo `{ ok: false, blad: string }`. Funkcja `opisWyniku(wynik: Wynik): string` dla sukcesu wypisuje kod, a dla błędu powód. Jest to dodatkowy przykład unii obiektów; wspólne pole `ok` pozwala TypeScriptowi zawęzić typ.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
