# Ćwiczenia: responsywna siatka Bootstrapa

## Zadanie 1. Trzy bloki informacji

Zbuduj stronę z tytułem i nagłówkiem **Pracownia webowa**. Pod nagłówkiem umieść trzy bloki w podanej kolejności:

| Nagłówek | Treść akapitu |
|---|---|
| HTML | Struktura strony. |
| CSS | Wygląd strony. |
| JavaScript | Zachowanie strony. |

Każdy blok powinien zawierać nagłówek i akapit, obramowanie oraz wewnętrzny odstęp `p-3`. Ustaw odstęp między blokami za pomocą `g-3`. Całą treść umieść w `container` z pionowym odstępem `py-4`.

### Układ zależnie od szerokości

| Szerokość ekranu | Układ |
|---|---|
| Poniżej 768 px | Jeden blok w wierszu |
| Od 768 do 991 px | Dwa bloki w pierwszym wierszu; trzeci po lewej w kolejnym |
| Od 992 px | Trzy bloki w jednym wierszu |

Nie ustawiaj własnych szerokości w pikselach. **Przed kodowaniem** zapisz, ile bloków znajdzie się w pierwszym wierszu przy szerokościach: 767, 768, 991 i 992 px.

## Zadanie 2. Treść główna i panel boczny

Zbuduj nową stronę. Ustaw tytuł dokumentu i nagłówek `h1` na **Plan dnia**, a podtytuł **Uczymy się przez praktykę.** oznacz klasą `lead`. Umieść całość w `container py-4`.

Pod nagłówkiem dodaj wiersz z odstępem `g-4`, zawierający:

- sekcję główną **Zajęcia** z listą numerowaną: ES6+, jQuery, Bootstrap;
- panel boczny **Informacje** z tekstem: „Pracownia: sala 12. Początek: 8:00.”.

Każdy z tych obszarów umieść we własnym pudełku z klasami `bg-light border p-3`.

### Układ i stopka

- Poniżej 992 px oba obszary mają zajmować pełną szerokość. Sekcja **Zajęcia** powinna być nad panelem **Informacje**.
- Od 992 px sekcja **Zajęcia** ma zajmować 8/12, a panel **Informacje** 4/12 szerokości wiersza.
- Pod obszarami dodaj stopkę z tekstem „Technikum programistyczne”. Zastosuj `mt-4`, `border-top` i `pt-3`.
- Użyj elementów `main` i `aside` zgodnie z ich rolą. Nie twórz własnych media queries.

## Zadanie 3. Oferta kursów

W nowym pliku zbuduj ofertę szkoły. Ustaw tytuł dokumentu i nagłówek `h1` na **Oferta kursów**, a podtytuł **Wybierz kierunek nauki.** oznacz klasą `lead`.

Dodaj trzy sekcje w podanej kolejności i użyj dokładnie wskazanych tekstów:

| Nagłówek sekcji | Treść akapitu |
|---|---|
| Python | Poznaj podstawy programowania. |
| JavaScript | Twórz interaktywne strony. |
| Bazy danych | Projektuj i odczytuj dane. |

### Wymagania dotyczące układu

- Umieść treść w `container py-4`; nagłówek oddziel od oferty klasą `mb-4`.
- Poniżej 768 px wyświetlaj jedną sekcję w wierszu, od 768 px dwie, a od 992 px trzy. Przy szerokości tabletowej trzecia sekcja ma znaleźć się po lewej stronie nowego wiersza.
- Ustaw `g-4` na wierszu.
- Wewnątrz każdej kolumny dodaj pudełko z klasami `border rounded p-3 h-100`.
- Nagłówek każdej sekcji ma być elementem `h2`, stylizowanym jak `h4`. Akapit ma mieć klasę `mb-0`.
- Nie używaj komponentu `card`.

### Stopka i testy

Pod ofertą dodaj stopkę z `mt-4`, `border-top` i `pt-3`. Umieść w niej nagłówek `h2` **Kontakt**, stylizowany jak `h5`, oraz akapit „Sekretariat: sala 12.” z klasą `mb-0`.

Sprawdź, czy przy szerokości 390 px nie pojawia się poziomy pasek przewijania. Wszystkie wymagane teksty są podane w tym zadaniu — nie dodawaj tekstów odgadywanych z rozwiązania. Przygotuj tabelę testów dla sześciu szerokości podanych w ściądze.

## Zadanie 4. Naprawa responsywności i odstępów

Skrócony przykład ma pokazywać trzy nazwy kursów: jeden blok poniżej 768 px, dwa od 768 px i trzy od 992 px. Widoczne pudełka powinny mieć obramowanie, `p-3` i odstępy wynikające z `g-4`.

Nie dodawaj opisów ani stopki. To skrócony test siatki, a nie ponowne wykonanie zadania 3.

### Znajdź i popraw problemy

Wskaż trzy problemy:

1. Brak metadanej viewport.
2. Stała klasa `col-4` na wszystkich szerokościach.
3. Obramowanie na kolumnach, przez które powierzchnie stykają się mimo gutterów.

Napraw problemy i sprawdź szerokości 767, 768, 991 oraz 992 px. Wykonaj też test telefonu przy 390 px w trybie emulacji urządzenia. W pliku `testy.md` wyjaśnij, co robi każda poprawka.

Brak metadanej viewport sprawdzaj w emulacji telefonu — na zwykłym desktopie problem może nie być widoczny.

## Zadanie 5. Nowy wariant siatki

Na kopii zadania 3 zmień **tylko siatkę**:

- Poniżej 768 px wyświetlaj po jednym kursie w wierszu.
- Od 768 px umieść Python i JavaScript po połowie pierwszego wiersza, a Bazy danych na pełną szerokość w drugim wierszu.
- Zachowaj ten układ również od 992 px.

Zachowaj całą treść i odstępy. Wyjaśnij, dlaczego pozostawienie `col-lg-4` ze starej wersji zepsuje nowy wariant.
