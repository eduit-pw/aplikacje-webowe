# Bootstrap: kontener, siatka i responsywność

Otwórz plik HTML w przeglądarce. Wyniki i błędy skryptu sprawdzaj w F12. Biblioteki i obrazy są lokalne.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Trzy bloki informacji | 15 minut, prowadzone

**Pliki:** [zadanie1/index.html](zadanie1/index.html).

**Polecenie:**

1. Zbuduj stronę z tytułem i nagłówkiem „Pracownia webowa”. Pod nagłówkiem trzy bloki w kolejności: HTML - „Struktura strony.”; CSS - „Wygląd strony.”; JavaScript - „Zachowanie strony.”.
2. Każdy blok ma nagłówek i akapit, obramowanie i wewnętrzny odstęp klasy `p-3`; odstęp między blokami `g-3`. Treść mieści się w `container` z pionowym odstępem `py-4`.
3. Poniżej 768 px: jeden blok na wiersz. Od 768 do 991 px: dwa, trzeci w następnym wierszu po lewej.
4. Od 992 px: trzy w wierszu. Nie ustawiaj własnych szerokości w px.
5. Przed kodowaniem zapisz przewidywaną liczbę bloków w pierwszym wierszu przy 767,768,991,992 px.

**Oczekiwany wynik - przykład:** Przy 767 px jeden blok w pierwszym wierszu; przy 768 px dwa; przy 992 px trzy.

**Sprawdź również:** Porównaj 767/768 i 991/992 px. Nie ustawiaj własnych szerokości w pikselach.

## Zadanie 2. Treść główna i panel boczny | 18 minut, wspólne

**Pliki:** [zadanie2/index.html](zadanie2/index.html).

**Polecenie:**

1. Zbuduj nową stronę, tytuł i h1 „Plan dnia”, podtytuł „Uczymy się przez praktykę.” jako `lead`. Wszystko w `container py-4`.
2. Pod nagłówkiem wiersz `g-4`: główna sekcja „Zajęcia” z listą numerowaną ES6+, jQuery, Bootstrap oraz panel boczny „Informacje” z tekstem „Pracownia: sala 12. Początek: 8:00.”.
3. Każdy z tych dwóch obszarów ma wewnętrzne pudełko `bg-light border p-3`.
4. Poniżej 992 px oba obszary zajmują pełną szerokość: Zajęcia wyżej, Informacje niżej. Od 992 px Zajęcia zajmują 8/12, Informacje 4/12 jednego wiersza.
5. Stopka pod nimi: „Technikum programistyczne”, odstęp `mt-4`, górna linia `border-top`, odstęp `pt-3`. Użyj `main` i `aside` zgodnie z rolą; bez własnych media queries.

**Oczekiwany wynik - przykład:** Przy szerokości od 992 px Zajęcia zajmują 8/12, Informacje 4/12; poniżej są jeden pod drugim.

**Sprawdź również:** Sprawdź kolejność treści, stopkę i brak poziomego przewijania.

## Zadanie 3. Oferta kursów | 25 minut, samodzielne

**Pliki:** [zadanie3/index.html](zadanie3/index.html).

**Polecenie:**

1. W pliku zadanie3/index.html przygotuj polski dokument UTF-8 z viewport. Tytuł i h1: Oferta kursów; podtytuł lead: Wybierz kierunek nauki.
2. Użyj container py-4 i odstępu mb-4 pod nagłówkiem. Dodaj sekcje Python, JavaScript, Bazy danych w tej kolejności.
3. Wpisz odpowiednio opisy: Poznaj podstawy programowania.; Twórz interaktywne strony.; Projektuj i odczytuj dane.
4. Zbuduj siatkę: jedna sekcja w wierszu poniżej 768 px, dwie od 768 px, trzy od 992 px. Trzecia sekcja na tablecie zaczyna kolejny wiersz po lewej. Użyj g-4.
5. W każdej kolumnie umieść osobne pudełko border rounded p-3 h-100, nagłówek h2 z klasą h4 i akapit mb-0. Komponent card poznasz później.
6. Dodaj stopkę mt-4 border-top pt-3: nagłówek Kontakt jako h2 z klasą h5 i akapit Sekretariat: sala 12. z mb-0. Sprawdź brak poziomego przewijania przy 390 px.
7. Oddziel kolumnę siatki od pudełka z obramowaniem i odstępem wewnętrznym.

**Oczekiwany wynik - przykład:** Telefon: trzy sekcje jedna pod drugą; tablet: dwie i trzecia po lewej; duży ekran: trzy obok siebie.

**Sprawdź również:** Sprawdź 390,767,768,991,992 px oraz komplet podanych tekstów.

<details><summary>Wskazówka</summary>

Uruchom najmniejszy działający fragment. Sprawdź jeden rekord lub jedną akcję, a potem dodawaj kolejne wymagania.

</details>

## Zadanie 4. Naprawa responsywności i odstępów | 15 minut, diagnoza

**Pliki:** [zadanie4/index.html](zadanie4/index.html).

**Polecenie:**

1. Skrócony przykład w starterze ma pokazywać trzy nazwy kursów: jeden blok poniżej 768 px, dwa od 768 px, trzy od 992 px. Widoczne pudełka mają mieć obramowanie, `p-3` i przerwy wynikające z `g-4`.
2. Nie dodawaj opisów ani stopki - to skrócony test siatki, a nie ponowne zadanie 3.
3. Wskaż trzy problemy: brak viewport meta, stałe `col-4` na wszystkich szerokościach oraz obramowanie na kolumnach powodujące, że powierzchnie stykają się mimo gutterów. Napraw i sprawdź 767/768 oraz 991/992 px; zrób także test telefonu 390 px w trybie emulacji urządzenia.
4. Brak viewport meta badaj w emulacji telefonu - na zwykłym desktopie nie musi się ujawnić.

**Oczekiwany wynik - przykład:** Po naprawie bloki mają układ 1/2/3 i widoczne odstępy między obramowaniami.

**Sprawdź również:** Zbadaj granice breakpointów; brak viewport oceń także w emulacji telefonu 390 px.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Punkt wyjścia:** własna, działająca część podstawowa wskazana w poleceniu.

Wybierz wariant opisany poniżej albo własny dodatek: Zaprojektuj inny układ tej samej treści na telefonie i dużym ekranie. Zachowaj działanie części podstawowej.

**Polecenie:**

1. Na kopii zadania 3 zmień tylko siatkę: poniżej 768 px po jednym kursie; od 768 px Python i JavaScript po połowie pierwszego wiersza, Bazy danych na pełną szerokość drugiego. Ten układ ma pozostać także od 992 px.
2. Zachowaj całą treść i odstępy. Wyjaśnij, dlaczego pozostawienie `col-lg-4` ze starej wersji zepsuje wariant.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: Plan wystawy

**Pliki:** [domowe/index.html](domowe/index.html).

**Cel naprawy:** Trzy sale mają układ 1/2/3 kolumn: telefon/md/lg. Każde pudełko ma własny odstęp wewnętrzny, a wiersz gutter g-3. Sprawdź 390, 768 i 992 px.

**Polecenie:**

1. Uruchom lub skompiluj błędną wersję i porównaj jej zachowanie z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: Szerokości 390,768,992 px i przerwy pomiędzy pudełkami. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
