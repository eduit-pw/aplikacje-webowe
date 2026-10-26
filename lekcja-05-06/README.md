# jQuery: DOM, zdarzenia i proste animacje

Otwórz plik HTML w przeglądarce. Wyniki i błędy skryptu sprawdzaj w F12. Biblioteki i obrazy są lokalne.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Powitanie i klasa CSS | 15 minut, prowadzone

**Pliki:** [zadanie1/index.html](zadanie1/index.html).

**Polecenie:**

1. Uzupełnij starter panelu. „Powitaj” pobiera imię z `#imie`, usuwa skrajne spacje i wpisuje do `#wynik` tekst `Witaj, imię!`; dla pustego pola wpisuje „Podaj imię.”. „Wyróżnij wynik” przełącza klasę `wyrozniony`; ponowne kliknięcie usuwa wyróżnienie. Dane użytkownika mają być wyświetlone dosłownie, nawet jeśli przypominają tag HTML.
2. Początkowy tekst wyniku: „Jeszcze brak powitania.”. Nie przeładowuj strony.

**Oczekiwany wynik - przykład:** Imię „ Ola ” daje Witaj, Ola!; drugie kliknięcie Wyróżnij usuwa wyróżnienie.

**Sprawdź również:** Puste imię daje Podaj imię. Tekst przypominający HTML pozostaje dosłownym tekstem.

## Zadanie 2. Dodawanie, usuwanie i animacja listy | 18 minut, wspólne

**Pliki:** [zadanie2/index.html](zadanie2/index.html).

**Polecenie:**

1. Uzupełnij starter listy. „Dodaj” tworzy element `li` z wpisaną, przyciętą treścią i przyciskiem „Usuń”. Pusta treść nie dodaje elementu i ustawia „Wpisz treść zadania.”.
2. Sukces czyści pole i ustawia „Dodano zadanie.”. Tekst użytkownika wyświetlaj dosłownie. „Usuń” usuwa tylko własny element - również taki, który powstał po uruchomieniu strony.
3. Przycisk „Pokaż / ukryj listę” przełącza widoczność za pomocą `fadeToggle(200)`. Przed kolejną animacją zakończ poprzednią i usuń jej kolejkę przez `stop(true,true)`.
4. Po zakończeniu animacji zaktualizuj `aria-expanded` przycisku na `true` dla widocznej listy i `false` dla ukrytej. Nie resetuj listy przy jej ukrywaniu.

**Oczekiwany wynik - przykład:** Wpisanie Nowe i Dodaj tworzy jeden nowy wiersz; Usuń usuwa tylko ten wiersz.

**Sprawdź również:** Puste pole nie dodaje zadania. Dodaj i usuń element utworzony po załadowaniu strony. Sprawdź ukrycie i przywrócenie listy.

## Zadanie 3. Wskaźnik z dokładnymi progami | 25 minut, samodzielne

**Pliki:** [zadanie3/index.html](zadanie3/index.html).

**Polecenie:**

1. W starterze Wskaźnik postępu obsłuż kliknięcie Oceń postęp. Wynik zmieniaj dopiero po kliknięciu.
2. Pobierz przyciętą nazwę oraz procent. Wymagaj niepustej nazwy i liczby całkowitej 0-100; puste pole procentu jest błędem.
3. Przy błędzie ustaw komunikat Podaj nazwę i całkowity postęp od 0 do 100., status Brak oceny. i usuń klasy starej oceny.
4. Dla poprawnych danych wybierz Niski poniżej 20, Średni od 20 do 75 włącznie, Wysoki powyżej 75.
5. Ustaw wyłącznie właściwą klasę: niski, sredni albo wysoki. Wyczyść poprzedni komunikat błędu.
6. Wyświetl nazwę i wynik w formacie nazwa: procent% - opis. Nazwę pokazuj dosłownie jako tekst. Użyj przygotowanego CSS.
7. Treść wpisaną przez użytkownika wyświetlaj jako tekst, aby nie interpretować jej jako HTML.

**Oczekiwany wynik - przykład:** Nazwa Projekt i postęp 20: Projekt: 20% - Średni, aktywna wyłącznie klasa sredni.

**Sprawdź również:** Sprawdź 0,19,20,75,76,100 oraz -1,101,20.5, puste pole i pustą nazwę.

<details><summary>Wskazówka</summary>

Uruchom najmniejszy działający fragment. Sprawdź jeden rekord lub jedną akcję, a potem dodawaj kolejne wymagania.

</details>

## Zadanie 4. Diagnoza wskaźnika | 15 minut, diagnoza

**Pliki:** [zadanie4/index.html](zadanie4/index.html).

**Polecenie:**

1. Fragment w pliku startowym próbuje spełnić wymagania zadania 3, lecz ich nie spełnia. Na kopii startera ustal i udokumentuj przyczyny: złe statusy dla 20 i 75; traktowanie pustego procentu jak zera i brak walidacji; kumulowanie klas; interpretowanie nazwy jako HTML.
2. Brakuje też opisu statusu i poprawnego komunikatu błędu.

**Oczekiwany wynik - przykład:** Po poprawce 20 i 75 należą do zakresu Średni; pusty procent daje błąd.

**Sprawdź również:** W próbie granicznej sprawdź obie granice. We własnej użyj nazwy przypominającej HTML i zmień ocenę, obserwując klasy.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Punkt wyjścia:** własna, działająca część podstawowa wskazana w poleceniu.

Wybierz wariant opisany poniżej albo własny dodatek: Dodaj przycisk czyszczenia listy z czytelnym komunikatem. Zachowaj działanie części podstawowej.

**Polecenie:**

1. Rozbuduj wskaźnik o `#liczniki`, początkowo „Poprawne: 0, błędne: 0”. Każde kliknięcie zwiększa dokładnie jeden licznik, według wyniku walidacji.
2. Zmiana pola bez kliknięcia nie zmienia liczników. Nie usuwaj wymagań zadania 3.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: Lista przeczytanych pozycji

**Pliki:** [domowe/index.html](domowe/index.html).

**Cel naprawy:** Przycisk Oznacz przełącza klasę przeczytane na pozycji. Licznik podaje liczbę oznaczonych elementów. Treść pozostaje widoczna po kliknięciu.

**Polecenie:**

1. Uruchom lub skompiluj błędną wersję i porównaj jej zachowanie z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: Dwa kliknięcia tej samej pozycji, różne pozycje i zachowanie ich tekstu. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
