# Ćwiczenia: TypeScript: typy proste i `tsconfig.json`

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

## Zadanie 1. Metryka produktu

Utwórz `src/zadanie1.ts`. Zapisz produkt o nazwie `Zeszyt`, cenie `12.5` i dostępności `true`, używając jawnych typów `string`, `number`, `boolean`. Dodaj rabat `0.2` z typem wywnioskowanym przez kompilator. Napisz funkcję `cenaPoRabacie(cena: number, rabat: number): number`. Wypisz dokładnie `Zeszyt: 10 zł, dostępny: tak`. Skompiluj projekt i uruchom wygenerowany plik JS. Na próbę zamień cenę na tekst `'12.5'`, zobacz błąd kompilatora, a następnie przywróć liczbę.

**Oddawany rezultat:** `src/zadanie1.ts`, `tsconfig.json`, wynik uruchomienia oraz zanotowana informacja, dlaczego zapis `const cena: number = '12.5'` nie jest poprawny.

## Zadanie 2. Wyniki próbnego testu

Utwórz `src/zadanie2.ts`. Wyniki czterech osób wynoszą `[15, 20, 5, 20]` punktów. Utwórz tablicę `number[]`, funkcję `obliczSrednia(wyniki: number[]): number` oraz zmienną logiczną określającą, czy średnia wynosi co najmniej 12 punktów. Policz, ile wyników wynosi co najmniej 18 punktów. Wypisz w jednej linii JSON `{"srednia":15,"zaliczono":true,"wysokieWyniki":2}`. Pusta tablica ma dawać średnią `0` bez dzielenia przez zero.

**Oddawany rezultat:** `src/zadanie2.ts` i wynik programu.

## Zadanie 3. Miniarkusz: rachunek zakupów

**Autorska sytuacja:** Kasjer ma trzy produkty: długopis, zeszyt i teczkę. Ceny jednostkowe to `[3, 8.5, 12]`, a liczby zamówionych sztuk `[2, 3, 1]`. Przy kwocie przed rabatem wynoszącej co najmniej 40 zł klient otrzymuje 10% rabatu. Oblicz rachunek jako dane JSON. Jest to ćwiczenie typów prostych i funkcji, bez połączenia z bazą.

**Wymagania do odhaczenia:**

1. Użyj `string[]` dla nazw, `number[]` dla cen oraz ilości; zmienną `promocja` typu `boolean` ustaw na podstawie kwoty.
2. Napisz funkcję `obliczRazem(ceny: number[], ilosci: number[]): number`; jeśli długości tablic się różnią, zgłoś błąd opisujący przyczynę.
3. Sprawdź, czy ilości są dodatnimi liczbami całkowitymi oraz czy ceny są dodatnimi, skończonymi liczbami; w razie błędu przerwij obliczenie komunikatem. TypeScript sprawdza **typy**, a ten warunek sprawdza **wartości**.
4. Poprawny rachunek wypisz jako `{"sztuki":6,"razemPrzedRabatem":43.5,"rabatProcent":10,"doZaplaty":39.15,"promocja":true}`. Wynik kwoty zaokrąglij do dwóch miejsc po przecinku, reprezentowanych w JSON jako liczba.
5. Projekt kompiluje się poleceniem `npx tsc`; `node src/zadanie3.js` wykonuje skompilowany kod. Przy różnych długościach tablic program zgłasza sensowny błąd zamiast wypisywać `NaN`.

**Oddawany rezultat:** `src/zadanie3.ts`, działający wynik i informacja o próbie z błędnymi danymi.

## Zadanie 4. Typ poprawny, wartość spoza zakresu

Utwórz `src/naprawa16.ts` z ceną `12`, rabatem `120` typu `number` i obliczeniem `cena * (1 - rabat / 100)`. Przewidź, dlaczego kompilator akceptuje typy, mimo że wynik jest ujemny. Dodaj walidację: rabat ma być skończoną liczbą z zakresu 0-100. Sprawdź `0`, `100`, `120` i `NaN`. Oczekuj odpowiednio kwot `12`, `0` oraz odrzucenia dwóch błędnych danych. Zapisz różnicę między sprawdzaniem typu a sprawdzaniem zakresu.

## Zadanie 5. Dla chętnych: kontrola wielkości rabatu

Rozbuduj zadanie 3: napisz funkcję `zastosujRabat(kwota: number, rabat: number): number`. Ma zwracać kwotę z rabatem (zaokrągloną do dwóch miejsc), ale odrzucać rabat spoza zakresu `0-100` oraz ujemną lub niefinitywną kwotę. Użyj jej do wyznaczenia `doZaplaty`. Wywołanie z `zastosujRabat(100, 120)` ma rzucać błąd; typ `number` sam nie ogranicza zakresu.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
