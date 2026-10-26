# Stanowisko pracy, BHP i uruchomienie ES6+

Otwórz plik HTML w przeglądarce. Wyniki i błędy skryptu sprawdzaj w F12. Biblioteki i obrazy są lokalne.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Stanowisko i reakcja na problem | 15 minut, prowadzone

**Polecenie:**

1. Sprawdź ustawienie stanowiska, dostęp do przejścia i stan przewodów. Wskaż regulamin i drogę ewakuacji.
2. Ustnie wyjaśnij reakcję na uszkodzony przewód, napój przy klawiaturze oraz odbicia światła na ekranie. Nie wykonuj samodzielnych napraw.

**Oczekiwany wynik - przykład:** Stanowisko przygotowane; potrafisz wskazać drogę ewakuacji i właściwą reakcję na uszkodzony przewód.

**Sprawdź również:** Sprawdź przewody, przejście i odbicia światła.

## Zadanie 2. Trzy pliki i pierwszy wynik | 18 minut, wspólne

**Pliki:** [zadanie2/app.js](zadanie2/app.js), [zadanie2/index.html](zadanie2/index.html), [zadanie2/styl.css](zadanie2/styl.css).

**Polecenie:**

1. Utwórz folder `lekcja-01-02/zadanie2/` z `index.html`, `styl.css` i `app.js`. HTML ma język polski, UTF-8, tytuł „Stanowisko ES6+”, nagłówek „Pracownia webowa” i akapit „Wyniki obliczeń sprawdź w konsoli.”.
2. Podepnij CSS oraz JS jako pliki lokalne. CSS: krój systemowy, margines 24 px, kolor nagłówka `#174a7e`.
3. W JS zapisz grupę „IV TP” jako stałą, licznik `wykonane` początkowo 2 jako zmienną i zwiększ go o 1. Ceny „12” i ilości „3” są tekstami: wypisz koszt 36 zł po konwersji.
4. W konsoli mają być kolejno: `Grupa: IV TP`, `Wykonane: 3`, `Koszt: 36 zł`, a potem typ wejścia i po konwersji: `string number`. Przed uruchomieniem przewidź wynik `"12" + "3"`.

**Oczekiwany wynik - przykład:** Grupa: IV TP; Wykonane: 3; Koszt: 36 zł; typy: string number.

**Sprawdź również:** Porównaj wynik dodawania napisów z wynikiem mnożenia liczb.

## Zadanie 3. Raport zakupów | 25 minut, samodzielne

**Pliki:** [zadanie3/app.js](zadanie3/app.js).

**Dane i kontekst:** Dane w starterze: Zeszyt, cena jako tekst "8", ilość jako tekst "5", budżet jako liczba 50.

**Polecenie:**

1. Uruchom własny app.js przez stronę z zadanie3. Wynik pokazuj w konsoli.
2. Przekształć tekstowe dane liczbowe i oblicz koszt zakupu oraz pozostałą kwotę.
3. Gdy pozostała kwota jest nieujemna, wybierz status W budżecie; w przeciwnym razie Przekroczono budżet.
4. Wyświetl cztery wiersze: Produkt, Koszt, Pozostało i Status. Użyj const dla wartości nieprzypisywanych ponownie oraz literałów szablonowych.
5. Sprawdź ilość 7, a następnie ilość 5 i budżet 40. Przywróć dane podstawowe. Krótko wyjaśnij konwersję tekstu w liczbę. Dane są poprawnymi stałymi; formularza jeszcze nie tworzysz.
6. Używaj const dla wartości, których ponownie nie przypisujesz, i nazw opisujących ich znaczenie.

**Oczekiwany wynik - przykład:** Produkt: Zeszyt; Koszt: 40 zł; Pozostało: 10 zł; Status: W budżecie.

**Sprawdź również:** Ilość 7: koszt 56 i przekroczony budżet. Budżet 40 przy ilości 5: pozostało 0 i zakup mieści się w budżecie.

<details><summary>Wskazówka</summary>

Uruchom najmniejszy działający fragment. Sprawdź jeden rekord lub jedną akcję, a potem dodawaj kolejne wymagania.

</details>

## Zadanie 4. Dlaczego wynik nie pojawia się lub jest błędny? | 15 minut, diagnoza

**Pliki:** [zadanie4/app.js](zadanie4/app.js), [zadanie4/index.html](zadanie4/index.html).

**Dane i kontekst:** Otwórz zadanie4/index.html. Raport ma pokazywać koszt 17 zł.

**Polecenie:**

1. Sprawdź w konsoli, dlaczego skrypt nie uruchamia się po otwarciu strony.
2. Popraw odwołanie do istniejącego pliku JavaScript.
3. Uruchom program i sprawdź, dlaczego dodaje teksty zamiast liczb.
4. Popraw obliczenie ceny i dostawy. Zachowaj dane wejściowe jako napisy.

**Oczekiwany wynik - przykład:** Po naprawie strona uruchamia skrypt, a raport pokazuje Do zapłaty: 17 zł.

**Sprawdź również:** Sprawdź brak błędu ładowania w konsoli i poprawność konwersji obu napisów.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Punkt wyjścia:** własna, działająca część podstawowa wskazana w poleceniu.

Wybierz wariant opisany poniżej albo własny dodatek: Zmień raport na zestawienie wydatków własnego klubu lub wydarzenia. Zachowaj działanie części podstawowej.

**Polecenie:**

1. Rozszerz raport: cena ma być skończoną liczbą nieujemną, ilość nieujemną liczbą całkowitą; oba teksty muszą być niepuste po usunięciu spacji. Dla błędnego wejścia wypisz „Niepoprawne dane”, zamiast kosztu.
2. Testy ilości: „abc”, pusty tekst, „2.5”, „0”.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: Kasa turnieju

**Pliki:** [domowe/review.js](domowe/review.js).

**Cel naprawy:** Program oblicza koszt trzech biletów po 20 zł i dostawy 5 zł. Wynik: 65 zł, pozostaje 15 zł z budżetu 80. Sprawdź także koszt równy budżetowi.

**Polecenie:**

1. Uruchom lub skompiluj błędną wersję i porównaj jej zachowanie z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: Koszt równy budżetowi, przekroczony budżet i zwykły zakup. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
