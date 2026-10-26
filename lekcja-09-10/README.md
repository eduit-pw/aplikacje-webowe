# Bootstrap: formularze, przełączniki i karty

Otwórz plik HTML w przeglądarce. Wyniki i błędy skryptu sprawdzaj w F12. Biblioteki i obrazy są lokalne.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Pełny formularz zapisu | 15 minut, prowadzone

**Pliki:** [zadanie1/index.html](zadanie1/index.html).

**Polecenie:**

1. Tytuł strony i `h1`: `Zapis na warsztaty`.
2. Pola `Imię` (tekst) i `Adres e-mail` (`email`) są wymagane. Dodaj listę `Warsztat` z pustą opcją `Wybierz warsztat` i wyborami `Python`, `JavaScript`. Wybór warsztatu jest wymagany.
3. Zastosuj właściwe klasy Bootstrapa, etykiety i przełącznik `Wyślij przypomnienie`, początkowo zaznaczony.
4. Przyciski: `Zapisz` zatwierdza, `Wyczyść` resetuje. Pola nie mogą być zatwierdzone z pustym imieniem, samymi spacjami, niepoprawnym e-mailem albo bez warsztatu.
5. Po poprawnym zatwierdzeniu wyświetl `Zapisano: <imię>. Warsztat: <warsztat>. Przypomnienie: tak/nie.`. Imię ma być przycięte; strona nie przeładowuje się.
6. Edycja pól lub przełącznika usuwa stare potwierdzenie. Reset przywraca puste pola, pusty wybór, zaznaczone przypomnienie i usuwa komunikat oraz własny błąd imienia.

**Oczekiwany wynik - przykład:** Ala, ala@example.com, Python, zaznaczone przypomnienie: Zapisano: Ala. Warsztat: Python. Przypomnienie: tak.

**Sprawdź również:** Sprawdź same spacje, niepoprawny e-mail, brak warsztatu, zmianę pól po zapisie i reset.

## Zadanie 2. Karty z obrazami, filtrem i licznikami | 18 minut, wspólne

**Pliki:** [zadanie2/index.html](zadanie2/index.html).

**Polecenie:**

1. Strona ma nagłówek `Katalog kursów` i dwie karty: najpierw `Python` z opisem `Podstawy programowania. Tryb: stacjonarnie.`, potem `JavaScript` z opisem `Interaktywne strony. Tryb: online.`.
2. Każda karta ma właściwy lokalny obraz, opis alternatywny, tytuł, opis, `Polubienia: 0` i przycisk `Lubię to`. Użyj odpowiednich klas `.card-*`.
3. Poniżej 768 px karty są jedna pod drugą; od 768 px każda zajmuje połowę wiersza. Zachowaj odstępy i obrazy mieszczące się w kartach.
4. Przełącznik `Tylko online` jest początkowo wyłączony. Włączenie ukrywa całą kolumnę Python; JavaScript przesuwa się na początek i zachowuje połowę szerokości od 768 px. Wyłączenie przywraca obie karty.
5. Kliknięcie zwiększa licznik tylko danej karty o 1. Filtrowanie nie resetuje liczników. Zmiana napisu tytułu nie może zepsuć licznika.

**Oczekiwany wynik - przykład:** Dwa polubienia JavaScript i jedno Python dają odpowiednio 2 i 1.

**Sprawdź również:** Włącz i wyłącz filtr. Liczniki pozostają, a ukryta karta zwalnia miejsce. Sprawdź telefon i ekran od 768 px.

## Zadanie 3. Samodzielnie: rezerwacja i tabela | 25 minut, samodzielne

**Pliki:** [zadanie3/index.html](zadanie3/index.html).

**Polecenie:**

1. Przygotuj stronę Rezerwacja stanowiska z formularzem w karcie Formularz rezerwacji.
2. Dodaj wymagane imię, e-mail i select Stanowisko: pusty wybór Wybierz stanowisko, PC-1, PC-2. Imię po przycięciu musi być niepuste.
3. Dodaj zaznaczony przełącznik Bez dodatkowych uwag i zablokowane textarea Uwagi (opcjonalnie). Odznaczenie odblokowuje pole; ponowne zaznaczenie je blokuje i zachowuje wpisany tekst.
4. Dodaj przycisk Zarezerwuj. Po poprawnym zatwierdzeniu pokaż dane w tabeli Pole/Wartość z wierszami Imię, Adres e-mail, Stanowisko, Uwagi. Początkowo każda wartość to -.
5. Przy wyłączonych uwagach pokaż Brak uwag. Przy włączonych pokaż przycięty tekst, a dla pustego również Brak uwag.
6. Edycja pól nie zmienia zapisanej tabeli. Dopiero poprawne zatwierdzenie zastępuje podsumowanie; błędne zachowuje poprzednie.
7. Na telefonie tabela jest pod formularzem, od 768 px obie części są w równych kolumnach. Użyj card, table, table-striped i table-responsive. Dane pokazuj jako tekst, bez przeładowania strony i bez serwera.
8. Odróżniaj bieżący stan formularza od ostatniego zatwierdzonego wyniku.

**Oczekiwany wynik - przykład:** Ala, ala@example.com, PC-1, bez uwag: tabela zawiera te dane oraz Brak uwag.

**Sprawdź również:** Zmień pola bez zatwierdzenia: tabela zachowuje poprzedni zapis. Sprawdź uwagi włączone, wyłączone i puste.

<details><summary>Wskazówka</summary>

Uruchom najmniejszy działający fragment. Sprawdź jeden rekord lub jedną akcję, a potem dodawaj kolejne wymagania.

</details>

## Zadanie 4. Diagnoza: wartość a zaznaczenie | 15 minut, diagnoza

**Pliki:** [zadanie4/index.html](zadanie4/index.html).

**Polecenie:**

1. Przycisk Sprawdź ma wyświetlać tak tylko po zaznaczeniu przełącznika. Napraw odczyt stanu kontrolki.
2. Sprawdź kolejno: odznaczony, zaznaczony i ponownie odznaczony.

**Oczekiwany wynik - przykład:** Odznaczony przełącznik daje nie, zaznaczony tak, ponownie odznaczony nie.

**Sprawdź również:** Sprawdź stan checked niezależnie od tekstowej wartości value.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Punkt wyjścia:** własna, działająca część podstawowa wskazana w poleceniu.

Wybierz wariant opisany poniżej albo własny dodatek: Dodaj własny wariant karty lub czytelne potwierdzenie akcji. Zachowaj działanie części podstawowej.

**Polecenie:**

1. W nowej stronie dodaj przycisk otwierający modal Bootstrap. Tytuł modala: Przed zajęciami.
2. Treść: Zabierz własne pomysły. Sprzęt jest dostępny w pracowni.
3. Zamknięcie ma działać przez krzyżyk i przycisk Rozumiem. Użyj lokalnego skryptu bootstrap.bundle.min.js.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: Potwierdzenie wejściówki

**Pliki:** [domowe/index.html](domowe/index.html).

**Cel naprawy:** Formularz pokazuje potwierdzenie imienia i zaznaczenia zgody. Reset usuwa potwierdzenie. Zapisz działa także przez Enter.

**Polecenie:**

1. Uruchom lub skompiluj błędną wersję i porównaj jej zachowanie z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: Zapis przyciskiem i Enter, odznaczona zgoda oraz reset. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
