# Node.js: ścieżki i asynchroniczne operacje na plikach

Node.js, CommonJS. Uruchamiaj node ścieżka/do/pliku.js. Moduły wbudowane nie wymagają instalacji.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Ścieżka i dwa zapisy | 15 minut, prowadzone

**Pliki:** [zadanie1/sciezki.js](zadanie1/sciezki.js).

**Polecenie:**

1. W zadanie1/sciezki.js zbuduj ścieżkę do wynik.txt obok skryptu.
2. Wypisz nazwę pliku, rozszerzenie i katalog przy użyciu modułu path.
3. W pierwszym komentarzu przewidź zawartość po dwóch zapisach.
4. Zapisz Pierwszy zapis, następnie Drugi zapis. Użyj writeFile i poczekaj na zakończenie każdego zapisu.
5. Uruchom skrypt także z folderu nadrzędnego i sprawdź ten sam plik wynikowy.

**Oczekiwany wynik - przykład:** wynik.txt zawiera wyłącznie Drugi zapis.

**Sprawdź również:** Uruchom skrypt z jego folderu i z folderu nadrzędnego. Sprawdź nazwę, rozszerzenie i katalog.

## Zadanie 2. Czy urządzenie zgłosiło gotowość? | 18 minut, wspólne

**Pliki:** [zadanie2/gotowosc.js](zadanie2/gotowosc.js), [zadanie2/dane/gotowe.flag](zadanie2/dane/gotowe.flag).

**Dane i kontekst:** Urządzenie sygnalizuje gotowość samą obecnością pliku zadanie2/dane/gotowe.flag.

**Polecenie:**

1. Napisz asynchroniczną funkcję czyIstnieje(plik), która sprawdza dostępność ścieżki przez fs.access i zwraca boolean.
2. Dla błędu ENOENT zwróć false, a inne błędy przekaż dalej. Nie odczytuj zawartości pliku.
3. W gotowosc.js zbuduj ścieżkę względem folderu skryptu i poczekaj na wynik funkcji.
4. Wypisz Sygnał gotowości: TAK albo Sygnał gotowości: NIE.
5. Zmień nazwę gotowe.flag na gotowe.old, sprawdź wynik, a następnie przywróć nazwę i uruchom z innego katalogu.

**Oczekiwany wynik - przykład:** Istniejący gotowe.flag: Sygnał gotowości: TAK; brak ścieżki: Sygnał gotowości: NIE.

**Sprawdź również:** Zmień nazwę pliku, sprawdź brak sygnału, przywróć nazwę. Odróżnij ENOENT od innych błędów.

## Zadanie 3. Rejestr alarmów temperatury | 25 minut, samodzielne

**Pliki:** [zadanie3/alarmy.js](zadanie3/alarmy.js).

**Dane i kontekst:** Dane pomiarów są przygotowane w zadanie3/alarmy.js. Alarm występuje od 30°C włącznie.

**Polecenie:**

1. Napisz wybierzAlarmy(dane, prog=30), zwracającą wybrane pomiary bez operacji na plikach.
2. Sprawdź wynik funkcji dla przygotowanych danych, temperatur 29 i 30 oraz pustej tablicy.
3. W main utwórz zadanie3/out, jeśli nie istnieje. Zbuduj ścieżkę do alarmy.log względem skryptu.
4. Dopisz wyłącznie alarmy, po jednym wierszu id;temperatura. Poczekaj na każdy zapis i zachowaj wcześniejsze wiersze.
5. Wyświetl Dopisano alarmów: N, obliczając N z bieżącej partii danych. Nie odczytuj logu do liczenia tych alarmów.
6. Przy braku alarmów wypisz 0 i nie zmieniaj logu; jeśli go nie było, nie musisz tworzyć pliku.
7. Nad funkcją dodaj JSDoc opisujący parametry i zwracany wynik. Sprawdź ponowne uruchomienie programu.
8. Buduj ścieżki do własnych plików względem katalogu skryptu.

**Oczekiwany wynik - przykład:** Pierwszy zapis logu: A1;32 oraz A3;30. Terminal: Dopisano alarmów: 2.

**Sprawdź również:** Drugi start dopisuje te same dwa wpisy. Dla 29 brak alarmu, dla 30 jest alarm. Pusta tablica nie zmienia logu.

<details><summary>Wskazówka</summary>

Sprawdź najpierw wynik funkcji dla temperatur 29 i 30. Potem dobierz zapis, który zachowuje wcześniejsze wiersze.

</details>

## Zadanie 4. Dlaczego czytnik nie działa? | 15 minut, diagnoza

**Pliki:** [naprawa.js](naprawa.js), [dane/tekst.txt](dane/tekst.txt).

**Polecenie:**

1. Otwórz przygotowany naprawa.js oraz dane/tekst.txt z tekstem Zażółć gęślą w UTF-8.
2. Uruchom błędny program i odczytaj komunikat w terminalu.
3. Wyjaśnij, dlaczego wynik readFile w tej wersji nie zachowuje się jak oczekiwany tekst.
4. Popraw odczyt i sprawdź polskie znaki, pusty plik oraz uruchomienie z innego katalogu.

**Oczekiwany wynik - przykład:** Program wypisuje Zażółć gęślą, bez zniekształceń.

**Sprawdź również:** Sprawdź polskie znaki, pusty plik oraz uruchomienie z innego katalogu.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Pliki:** [zadanie5/robocze/sesja.tmp](zadanie5/robocze/sesja.tmp), [zadanie5/robocze/podglad.tmp](zadanie5/robocze/podglad.tmp), [zadanie5/robocze/notatki.txt](zadanie5/robocze/notatki.txt).

Wybierz wariant opisany poniżej albo własny dodatek: Dodaj osobny log pomiarów bez alarmu, zachowując oryginalny log alarmów. Zachowaj działanie części podstawowej.

**Polecenie:**

1. W `zadanie5/robocze` przygotuj trzy zwykłe pliki: `sesja.tmp`, `podglad.tmp` i `notatki.txt`. Ich treść jest dowolna.
2. Skrypt `zadanie5/porzadki.js` ma pobrać listę nazw, usunąć wyłącznie pliki z rozszerzeniem `.tmp` w tym folderze i wypisać liczbę usuniętych plików. Bez przeszukiwania podfolderów.
3. Pierwsza próba: usunięte dwa pliki, `notatki.txt` pozostaje. Druga próba: usuniętych zero.
4. Sprawdź również uruchomienie z innego katalogu.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: napraw kopię biletu

**Pliki:** [domowe/kopia.js](domowe/kopia.js), [domowe/dane/bilet.txt](domowe/dane/bilet.txt).

**Cel naprawy:** Plik domowe/dane/bilet.txt zawiera polskie znaki w UTF-8. Program ma utworzyć identyczną kopię w domowe/out/bilet_kopia.txt. Kolejne uruchomienie odświeża jedną kopię. Program działa także uruchomiony z katalogu nadrzędnego.

**Polecenie:**

1. Uruchom lub skompiluj błędną wersję i porównaj jej zachowanie z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: Polskie znaki, dwa uruchomienia i uruchomienie z innego katalogu. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
