# Ćwiczenia: Node.js: ścieżki i asynchroniczne operacje na plikach

## Przygotowanie

Wymagany jest Node.js. Korzystaj z CommonJS (`require`); moduły `node:*` są wbudowane i nie wymagają instalacji. Każde zadanie wykonuj w osobnym podkatalogu, np. `zadanie1`. Uruchamiaj przez `node nazwa.js`; serwer zatrzymuj klawiszami Ctrl+C.

## Zadanie 1. Inspektor ścieżki

Utwórz `sciezki.js`. Przyjmij, że interesuje nas plik `dane/wyniki.txt` położony w katalogu `dane` obok skryptu. Oblicz ścieżkę bezwzględną bez ręcznego wpisywania separatora. Wypisz dokładnie: `Nazwa pliku: wyniki.txt`, `Rozszerzenie: .txt` oraz `Ścieżka bezwzględna: tak` (wyznaczoną na podstawie rzeczywistej ścieżki). Dodatkowo wypisz samą obliczoną ścieżkę. W tym zadaniu **nie twórz** pliku; sprawdź, czy program mimo to działa.

**Oddawany rezultat:** `zadanie1/sciezki.js`, zrzut z `node sciezki.js` i odpowiedź: „Czy `path.join` utworzył katalog `dane`?”.

## Zadanie 2. Dziennik pracowni

Przygotuj `dziennik.js`. Program ma sam utworzyć katalog `dane`, zapisać w `dane/notatka.txt` wiersz `Start zajęć`, dopisać drugi wiersz `Ćwiczymy Node.js`, odczytać plik jako tekst UTF-8 i wypisać jego zawartość. Dwa wpisy mają znaleźć się w **dwóch osobnych wierszach**. Uruchom program dwukrotnie: po drugim uruchomieniu zawartość ma wciąż składać się z dokładnie dwóch wierszy. Przy błędzie zapisu/odczytu pokaż komunikat i ustaw niezerowy kod zakończenia.

**Oddawany rezultat:** `zadanie2/dziennik.js` i powstały `zadanie2/dane/notatka.txt`.

## Zadanie 3. Miniarkusz: raport wyników uczniów

**Sytuacja (autorskie ćwiczenie).** Otrzymujesz plik tekstowy `dane/wyniki.txt` o zawartości pokazanej niżej. Każdy niepusty wiersz zawiera imię i liczbę punktów oddzielone średnikiem.

```text
Ala;8
Bartek;5
Celina;10
Daniel;7
```

**Wymagania do sprawdzenia:**

1. Program `raport.js` odczytuje `dane/wyniki.txt` asynchronicznie w UTF-8 ze ścieżki zbudowanej względem katalogu skryptu.
2. Ignoruje puste wiersze (w tym końcowy znak nowej linii) i oblicza liczbę uczniów oraz średnią z jednym miejscem po kropce.
3. Wskazuje imię i punkty osoby z najwyższym wynikiem oraz liczy osoby, które uzyskały **co najmniej 7** punktów.
4. Tworzy katalog `out`, zapisuje wynik do `out/raport.txt`, a w terminalu wypisuje `Zapisano raport: raport.txt` dopiero po zakończeniu zapisu. Uruchomienie z innego katalogu roboczego ma dać ten sam wynik.
5. Jeśli plik wejściowy nie istnieje, program wyświetla `Brak pliku wejściowego: wyniki.txt`, nie tworzy pustego raportu i kończy się kodem różnym od zera.

**Oddawany rezultat:** `zadanie3/raport.js`, `zadanie3/dane/wyniki.txt`, wygenerowany `zadanie3/out/raport.txt` oraz zrzut działania i zrzut przypadku braku wejścia.

## Zadanie 4. Diagnoza: Ścieżka zależna od terminala

Otwórz `naprawa.js` i plik `dane/tekst.txt`. Najpierw uruchom skrypt z folderu lekcji przez `node naprawa.js`, a potem z katalogu nadrzędnego przez `node lekcja-13-14/naprawa.js`. Przed drugą próbą zapisz przewidywanie. Wyjaśnij różnicę wyników i popraw budowanie ścieżki, aby obie próby odczytały `Zażółć gęślą`. Nie wpisuj bezwzględnej ścieżki swojego komputera. Zapisz przyczynę, poprawkę i wyniki obu prób w `dokumentacja.md`.

## Zadanie 5. Dla chętnych: historia wygenerowanych raportów

Rozszerzenie wykonaj w istniejącym programie z zadania 3.

Rozbuduj zadanie 3: po zapisaniu `out/raport.txt` dopisz tę samą treść do `out/historia.txt`, a po niej wiersz `---`. Po dwóch uruchomieniach plik `raport.txt` ma zawierać **jeden** aktualny raport, a `historia.txt` ma zawierać **dwa** raporty rozdzielone wierszem `---`. Błąd dopisywania historii musi zostać obsłużony tak samo jak pozostałe błędy operacji na plikach.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
