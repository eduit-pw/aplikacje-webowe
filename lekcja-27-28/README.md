# MongoDB: dokumenty, kolekcje i MongoDB Compass

Działający lokalny MongoDB i Compass; połączenie mongodb://127.0.0.1:27017. Bazę i kolekcje tworzymy w zadaniu 1.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Załóż bazę i zaimportuj kursy | 15 minut, prowadzone

**Pliki:** [diagnostyka.json](diagnostyka.json), [kursy.json](kursy.json), [projekty.json](projekty.json).

**Polecenie:**

1. W MongoDB Compass utwórz bazę `inf04_t14` z pierwszą kolekcją `kursy`. Zapisz przygotowane dane do pliku `kursy.json` w kodowaniu UTF-8.
2. Zaimportuj plik jako JSON. Sprawdź liczbę dokumentów, typ `godziny` i pola `_id`. **Dane importuj tylko raz**; powtórny import do tej samej kolekcji bez jawnych `_id` utworzy dodatkowe dokumenty.
3. połącz się z serwerem → wybierz **Create Database** → wpisz `inf04_t14` i pierwszą kolekcję `kursy` → wejdź w kolekcję → **Add Data → Import JSON or CSV file** → wybierz `kursy.json`, typ JSON → **Import**. W razie ponownego uruchomienia ćwiczenia pracuj na nowej, pustej kolekcji wyraźnie wskazanej przez nauczyciela; nie importuj drugi raz do już zapełnionej.

**Oczekiwany wynik - przykład:** Kolekcja kursy zawiera pięć dokumentów; godziny są liczbą, _id są nadane.

**Sprawdź również:** Porównaj liczbę po imporcie i nie importuj ponownie do zapełnionej kolekcji.

## Zadanie 2. Zapytania w Compassie | 18 minut, wspólne

**Pliki:** [diagnostyka.json](diagnostyka.json), [kursy.json](kursy.json), [projekty.json](projekty.json).

**Polecenie:**

1. Na kolekcji `inf04_t14.kursy` wykonaj pięć odczytów. Każdy filtr wpisz w polu **Filter** i uruchom przyciskiem **Find**.
2. Zapisz otrzymane wartości `kod`. Przy piątym zapytaniu otwórz **Options**, wpisz dokumenty w polach **Sort** i **Project**, a potem uruchom zapytanie.
3. Nie zmieniaj dokumentów.
4. | Próba | Wymaganie | Oczekiwane kody | |---:|---|---| | 1 | Kursy podstawowe. | `JS01`, `PY01`, `DB01` (bez zadanej kolejności). | | 2 | Kursy z tagiem `web`. | `JS01`, `RE01` (równość dopasowuje element tablicy). | | 3 | Prowadzący z Gliwic. | `PY01`, `EX01`, `RE01`. | | 4 | Kursy trwające co najmniej 15 godzin. | `PY01`, `EX01`, `RE01`. | | 5 | Kursy zaawansowane, posortowane malejąco po godzinach, pokazujące tylko `kod` i `nazwa`. | `EX01`, potem `RE01`. | Dla próby 5 dobierz Sort i Project. Nie zmieniaj zapisanych dokumentów.

**Oczekiwany wynik - przykład:** Kursy podstawowe: JS01,PY01,DB01; zaawansowane malejąco po godzinach: EX01,RE01.

**Sprawdź również:** Wykonaj wszystkie pięć zapytań z tabeli, kontrolując filtr, sortowanie i projekcję.

## Zadanie 3. Miniarkusz: projekty i zagnieżdżone zadania | 25 minut, samodzielne

**Pliki:** [diagnostyka.json](diagnostyka.json), [kursy.json](kursy.json), [projekty.json](projekty.json).

**Dane i kontekst:** Plik projekty.json jest przygotowany. Dokumenty zawierają opiekuna i tablicę zadań; tylko PR-3 ma pole priorytet.

**Polecenie:**

1. W bazie inf04_t14 utwórz kolekcję projekty i zaimportuj raz trzy przygotowane dokumenty.
2. Sprawdź strukturę jednego projektu: kod, tytul, opiekun i zadania. Wskaż poddokument oraz tablicę poddokumentów.
3. Dobierz filtr projektów mających otwarte zadanie, odwołując się do zadania.status.
4. Dobierz filtr projektów opiekunki Ali przez opiekun.imie.
5. Znajdź projekty z istniejącym polem priorytet. Wyjaśnij różnicę między brakiem pola i polem z napisem brak.
6. Porównaj otrzymane kody z oczekiwaniem. Odczyty wykonuj w Compassie; aplikację CRUD zbudujesz w temacie 15.
7. Sprawdzaj typ wartości pola; liczba i podobnie wyglądający napis mogą dawać różne wyniki filtrów.

**Oczekiwany wynik - przykład:** Otwarte zadanie: PR-1 i PR-3; opiekunka Ala: PR-1 i PR-3; pole priorytet: PR-3.

**Sprawdź również:** Porównaj tablicę poddokumentów, pole zagnieżdżone oraz brak pola w dokumencie.

<details><summary>Wskazówka</summary>

Uruchom najmniejszy działający fragment. Sprawdź jeden rekord lub jedną akcję, a potem dodawaj kolejne wymagania.

</details>

## Zadanie 4. Diagnoza: Identyczne teksty, różne typy pól | 15 minut, diagnoza

**Pliki:** [diagnostyka.json](diagnostyka.json), [kursy.json](kursy.json), [projekty.json](projekty.json).

**Polecenie:**

1. W osobnej kolekcji diagnostyka umieść {"id":1,"cena":12} i {"id":2,"cena":"12"}. Przed filtrowaniem przewidź wyniki {"cena":12} oraz {"cena":"12"}.
2. Następnie w Compass poprawia drugi dokument tak, by cena była liczbą, i powtarza filtry. Oczekuje obydwu ID w filtrze liczbowym.
3. Nie zmieniaj kolekcji kursy potrzebnej w tym temacie.

**Oczekiwany wynik - przykład:** Przed poprawką filtr liczbowy wybiera ID 1, tekstowy ID 2. Po poprawce liczbowy wybiera oba.

**Sprawdź również:** Powtórz oba filtry po zmianie typu. Kolekcja kursy pozostaje bez zmian.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Pliki:** [diagnostyka.json](diagnostyka.json), [kursy.json](kursy.json), [projekty.json](projekty.json).

Wybierz wariant opisany poniżej albo własny dodatek: Zaproponuj własne zapytanie po poznanych polach i opisz oczekiwane dokumenty. Zachowaj działanie części podstawowej.

**Polecenie:**

1. W kolekcji `kursy` ustaw filtr `{ "poziom": "zaawansowany" }`. Użyj w Compassie funkcji **Export Data → Export query results** (nazwy pozycji mogą się różnić zależnie od wersji), wybierz JSON i zapisz plik `kursy_zaawansowane.json`.
2. Otwórz plik i odczytaj wartości `kod`. Zwróć uwagę, że eksport JSON może używać zapisu Extended JSON dla typu `ObjectId`.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: Przegląd filtrów projektu

**Pliki:** [domowe/review.js](domowe/review.js), [diagnostyka.json](diagnostyka.json), [kursy.json](kursy.json), [projekty.json](projekty.json).

**Cel naprawy:** Popraw trzy filtry i uruchom je osobno w Compassie na kolekcji projekty z zadania 3. Szukamy projektu z zadaniem otwartym, projektów Ali i projektów z polem priorytet.

**Polecenie:**

1. Uruchom każdy filtr w Compassie na kolekcji projekty i porównaj wynik z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: Każdy z trzech filtrów osobno na kolekcji projekty. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
