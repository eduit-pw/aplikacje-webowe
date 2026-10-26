# Wspólna budowa API Express + MongoDB: od połączenia do CRUD

Działający MongoDB na mongodb://127.0.0.1:27017. W folderze lekcji: npm install, potem node api.js. Nie uruchamiaj równocześnie dwóch serwerów na tym samym porcie.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Połączenie i odczyt, wspólnie | 15 minut, prowadzone

**Pliki:** [api.js](api.js).

**Polecenie:**

1. Uruchom aplikację dopiero po poprawnym połączeniu. GET /api/notatki zwraca 200 i tablicę, początkowo [].
2. GET /api/notatki/:id zwraca dokument lub 404. Niepoprawny zapis ID daje 400.
3. ID z URL jest tekstem: zaakceptuj dokładnie 24 znaki szesnastkowe i utwórz ObjectId.
4. Wskaż w szkielecie miejsce na `MongoClient`, `connect`, wybór bazy i kolekcji, a następnie przekazanie kolekcji do funkcji budującej trasy. Wyjaśnij, że parametr funkcji wskazuje tę samą kolekcję, z której korzysta każde żądanie.
5. Samodzielnie zmień ścieżkę i komunikat GET, sprawdź wynik i przywróć wersję podstawową przed kolejnym zadaniem.

**Oczekiwany wynik - przykład:** Pusta kolekcja: GET /api/notatki zwraca 200 i []; nieznany poprawny ID daje 404.

**Sprawdź również:** Sprawdź błędny zapis ID i brak połączenia podczas startu.

## Zadanie 2. Dodawanie, wspólnie | 18 minut, wspólne

**Pliki:** [api.js](api.js).

**Polecenie:**

1. POST /api/notatki przyjmuje `{tytul}`. Tytuł po trim ma 1-60 znaków.
2. Serwer ustawia `ukonczona:false`, zapisuje dokument i zwraca 201 wraz z rzeczywistym `_id`. Pusty, brakujący albo nienapisowy tytuł daje 400.
3. Nie przyjmuj `_id` ani ukonczona z ciała żądania jako pól nowego dokumentu.
4. Wyślij `{"tytul":" Powtórka "}`. Pokaż odpowiedź, odszukaj dokument w Compassie, wykonaj GET po otrzymanym ID.
5. Samodzielnie dodaj drugą notatkę. Zatrzymaj i uruchom API ponownie: dokumenty pozostają.
6. Wyjaśnij różnicę względem tablicy w pamięci ze sprawdzianu.

**Oczekiwany wynik - przykład:** POST {"tytul":" Powtórka "}: 201, tytuł Powtórka, ukonczona:false i rzeczywisty _id.

**Sprawdź również:** Sprawdź pusty tytuł, spacje, zły typ oraz zachowanie dokumentów po restarcie.

## Zadanie 3. Aktualizacja z pomocą, usuwanie samodzielne | 25 minut, wspólna praca i samodzielna zmiana

**Pliki:** [api.js](api.js).

**Polecenie:**

1. Kontynuuj wspólnie zbudowane API notatek. W PATCH /api/notatki/:id przyjmuj zmianę ukonczona wyłącznie typu boolean.
2. Sprawdź zapis ID: dokładnie 24 znaki szesnastkowe. Niepoprawny ID lub typ danych daje 400, nieznany poprawny ID 404.
3. Uzupełnij szkielet aktualizacji przez $set i sprawdzenie matchedCount. Po sukcesie zwróć 200 i bieżący dokument; ponowne ustawienie true nadal daje 200.
4. Samodzielnie dodaj DELETE /api/notatki/:id. Usuń wyłącznie wskazany dokument; dobierz metodę i filtr według poznanych przykładów i dokumentacji.
5. Niepoprawny ID daje 400, brak dokumentu 404, poprawne usunięcie 204 bez treści. Powtórne usunięcie daje 404. Nie używaj pustego filtra ani deleteMany.
6. Sprawdź aktualizację i usuwanie na dwóch różnych notatkach, kontrolując, że druga notatka pozostaje bez zmian.
7. Rozpoznawaj istnienie aktualizowanego dokumentu przez matchedCount; brak zmiany wartości nie oznacza braku dokumentu.

**Oczekiwany wynik - przykład:** PATCH true dwa razy: oba 200; DELETE:204; powtórny DELETE:404.

**Sprawdź również:** Zmieniaj jeden dokument. Sprawdź błędny ID, brak dokumentu i ukończenie jako tekst.

<details><summary>Wskazówka</summary>

Przy aktualizacji odróżnij znalezienie dokumentu od faktycznej zmiany jego wartości.

</details>

## Zadanie 4. Testy i diagnoza | 15 minut, diagnoza

**Polecenie:**

1. Wykonaj POST -> GET -> PATCH true -> PATCH true -> DELETE -> GET. Ostatni GET daje 404, a Compass potwierdza brak tylko usuniętego rekordu.
2. Spróbuj tytułu ze spacji, `ukonczona:"true"`, złego ID i błędnego składniowo JSON. Ten ostatni ma dać 400 JSON.
3. Błąd bazy po starcie ma dać 500 JSON; nie ujawniaj klientowi danych połączenia. Gdy początkowe połączenie nie działa, port nie powinien zostać otwarty.
4. Na kopii rozwiązania sprawdź błąd `modifiedCount === 0` użyty do rozpoznawania braku dokumentu: dwukrotnie ustaw true. Przed uruchomieniem przewidź rezultat, następnie popraw warunek i zapisz powód.

**Oczekiwany wynik - przykład:** Po naprawie powtórny PATCH true nadal daje 200; GET po DELETE daje 404.

**Sprawdź również:** Wykonaj pełną sekwencję POST,GET,PATCH,PATCH,DELETE,GET oraz próby błędnych danych i awarii bazy.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Punkt wyjścia:** własna, działająca część podstawowa wskazana w poleceniu.

Wybierz wariant opisany poniżej albo własny dodatek: Dodaj odczytowy filtr ukończonych notatek. Zachowaj działanie części podstawowej.

**Polecenie:**

1. Dodaj GET /api/statystyka zwracające liczbę notatek. Wynik ma pochodzić z kolekcji, nie ze stałej w kodzie.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: PATCH bez fałszywego 404

**Pliki:** [domowe/review.js](domowe/review.js).

**Cel naprawy:** W aplikacji notatek zastąp obsługę PATCH fragmentem z review.js. Popraw walidację ukończenia, identyfikator i interpretację wyniku aktualizacji. Dwukrotne ustawienie true ma dać 200.

Fragment zastępuje jedną trasę wewnątrz utworzAplikacje(notatki); korzysta z istniejącego app i ObjectId. Nie uruchamiaj go jako osobnego serwera.

**Polecenie:**

1. Uruchom lub skompiluj błędną wersję i porównaj jej zachowanie z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: Dwa ustawienia true pod rząd, nieznany ID i ukończenie jako napis. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
