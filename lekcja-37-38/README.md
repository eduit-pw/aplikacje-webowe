# TypeScript: klasy, konstruktory, dostęp i dziedziczenie

W folderze lekcji wykonaj npm install. Kompiluj każdy plik osobno: npx tsc src/zadanie1.ts --target ES2022 --module commonjs --outDir dist, potem node dist/zadanie1.js. Dla następnego zadania zmień nazwę pliku; dla diagnozy użyj src/naprawa.ts, dla pracy domowej domowe/review.ts.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Dwa obiekty produktu | 15 minut, prowadzone

**Pliki:** [src/zadanie1.ts](src/zadanie1.ts).

**Polecenie:**

1. Utwórz klasę Produkt z readonly id, public nazwa i prywatną ceną. Konstruktor przyjmuje te trzy dane.
2. Metoda opis zwraca Nazwa: cena zł. Stwórz Notes 12 zł i Długopis 5 zł.
3. Metoda zmienCene odrzuca cenę ujemną i nieskończoną; po zmianie Notes na 10 zł cena Długopisu pozostaje 5. Napisz przewidywanie przed wyświetleniem obu opisów.

**Oczekiwany wynik - przykład:** Po zmianie ceny: Notes: 10 zł; Długopis: 5 zł.

**Sprawdź również:** Zmiana jednego obiektu nie zmienia drugiego; ujemna i nieskończona cena są odrzucone.

## Zadanie 2. Koszt produktu z dostawą | 18 minut, wspólne

**Pliki:** [src/zadanie2.ts](src/zadanie2.ts).

**Polecenie:**

1. Napisz src/zadanie2.ts. Klasa Produkt ma protected cena i koszt() zwracające cenę.
2. Klasa ProduktWysylkowy dodaje dostawę, wywołuje super i nadpisuje koszt(). Notes 12 zł z dostawą 8 zł ma koszt 20.
3. Dodaj zwykły produkt 5 zł i policz sumę kosztów obydwu obiektów w tablicy Produkt[].

**Oczekiwany wynik - przykład:** Koszty [20,5], suma 25.

**Sprawdź również:** Porównaj metodę bazową i nadpisaną oraz wywołanie super w konstruktorze.

## Zadanie 3. Samodzielna wycena biletów | 25 minut, samodzielne

**Pliki:** [src/zadanie3.ts](src/zadanie3.ts).

**Polecenie:**

1. Utwórz Bilet z nazwą i protected cena oraz metodą kwota. Konstruktor odrzuca cenę ujemną i nieskończoną.
2. Utwórz BiletUlgowy dziedziczący z Bilet. Konstruktor przyjmuje procent rabatu 0-100 i odrzuca wartości spoza zakresu.
3. Nadpisz kwota tak, aby uwzględniała rabat. Poprawnie wywołaj konstruktor bazowy.
4. Przygotuj zwykły bilet 40 zł, ulgowy 40 zł z rabatem 25% i ulgowy 20 zł z rabatem 50%.
5. Wyświetl kwoty i ich sumę, obliczając je przez metody obiektów.
6. Sprawdź rabat 0,100 i -1 oraz niepoprawną cenę, nie usuwając walidacji ze wspólnej klasy.
7. Zmieniaj stan obiektu przez metody pilnujące jego poprawności.

**Oczekiwany wynik - przykład:** Kwoty [40,30,10], suma 80.

**Sprawdź również:** Rabat 0 i 100 jest poprawny; -1 odrzucony. Sprawdź cenę ujemną i nieskończoną.

<details><summary>Wskazówka</summary>

Uruchom najmniejszy działający fragment. Sprawdź jeden rekord lub jedną akcję, a potem dodawaj kolejne wymagania.

</details>

## Zadanie 4. this przed super | 15 minut, diagnoza

**Pliki:** [src/naprawa.ts](src/naprawa.ts).

**Polecenie:**

1. W kopii BiletUlgowy wpisz przed super instrukcję this.procent = procent. Zapisz przewidywanie, skompiluj i przeczytaj błąd.
2. Usuń tę instrukcję, pozostaw super na początku. Następnie porównaj private i protected: spróbuj odczytać this.cena w podklasie, gdy pole bazowe jest private.

**Oczekiwany wynik - przykład:** Po poprawce kompilacja przechodzi, ulgowy bilet kosztuje 30.

**Sprawdź również:** Porównaj this przed super oraz dostęp do pola private i protected.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Punkt wyjścia:** własna, działająca część podstawowa wskazana w poleceniu.

Wybierz wariant opisany poniżej albo własny dodatek: Dodaj nową klasę pochodną z własną, prostą regułą wyceny. Zachowaj działanie części podstawowej.

**Polecenie:**

1. Dodaj interfejs Wycenialny z metodą kwota():number i zastosuj go do Bilet. Wyniki wycen pozostają 40, 30 i 10.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: Portfel z chronionym saldem

**Pliki:** [domowe/review.ts](domowe/review.ts).

**Cel naprawy:** Wpłata 40 i wypłata 15 dają saldo 25. Wypłata całego salda jest dozwolona. Wpłata wartości ujemnej ma być odrzucona.

**Polecenie:**

1. Uruchom lub skompiluj błędną wersję i porównaj jej zachowanie z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: Wpłata 40,wypłata 15,wypłata całego salda i ujemna wpłata. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
