# Ćwiczenia: TypeScript: klasy, konstruktory, dostęp i dziedziczenie

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

## Zadanie 1. Dwa obiekty produktu

Utwórz klasę Produkt z readonly id, public nazwa i prywatną ceną. Konstruktor przyjmuje te trzy dane. Metoda opis zwraca Nazwa: cena zł. Stwórz Notes 12 zł i Długopis 5 zł. Metoda zmienCene odrzuca cenę ujemną i nieskończoną; po zmianie Notes na 10 zł cena Długopisu pozostaje 5. Napisz przewidywanie przed wyświetleniem obu opisów.

**Wynik oczekiwany:** Notes: 10 zł; Długopis: 5 zł.

## Zadanie 2. Koszt produktu z dostawą

Napisz osobny plik `src/zadanie2.ts`. Klasa Produkt ma protected cena i koszt() zwracające cenę. Klasa ProduktWysylkowy dodaje dostawę, wywołuje super i nadpisuje koszt(). Notes 12 zł z dostawą 8 zł ma koszt 20. Dodaj zwykły produkt 5 zł i policz sumę kosztów obydwu obiektów w tablicy Produkt[].

**Wynik oczekiwany:** [20,5] i suma 25.

## Zadanie 3. Samodzielna wycena biletów

Nowy kontekst: Bilet ma nazwa i protected cena, metoda kwota. BiletUlgowy ma procent z zakresu 0-100, odrzuca wartości poza nim i nadpisuje kwota. Zwykły bilet 40 zł, ulgowy 40 zł z rabatem 25%, ulgowy 20 zł z rabatem 50%. Wypisz kwoty i sumę, bez wpisywania wyniku. Konstruktor bazowy odrzuca ujemne/nieskończone ceny. Sprawdź osobno rabat 0,100,-1.

**Wynik oczekiwany:** [40,30,10], suma 80.

## Zadanie 4. this przed super

W kopii BiletUlgowy wpisz przed super instrukcję this.procent = procent. Zapisz przewidywanie, skompiluj i przeczytaj błąd. Usuń tę instrukcję, pozostaw super na początku. Następnie porównaj private i protected: spróbuj odczytać this.cena w podklasie, gdy pole bazowe jest private.

**Wynik oczekiwany:** Po poprawce kompilacja przechodzi, wynik 30.

## Zadanie 5. Rozszerzenie dla kończących wcześniej

Zdefiniuj interfejs `Wycenialny` z metodą `kwota(): number`. Klasa `Bilet` ma go implementować. Sprawdź, że kwoty biletów nadal wynoszą `40`, `30`, `10`. Wyjaśnij, co sprawdza interfejs i dlaczego sam nie oblicza ceny.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
