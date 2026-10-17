# Ćwiczenia: MongoDB: dokumenty, kolekcje i MongoDB Compass

## Przygotowanie

Uruchom lokalny serwer MongoDB i połącz się z nim w MongoDB Compass (domyślnie `mongodb://127.0.0.1:27017`). Pliki JSON zapisuj w UTF-8. Przy wspólnym serwerze użyj bazy przypisanej przez nauczyciela.

## Zadanie 1. Załóż bazę i zaimportuj kursy

W MongoDB Compass utwórz bazę `inf04_t13` z pierwszą kolekcją `kursy`. Zapisz poniższe dane do pliku `kursy.json` w kodowaniu UTF-8. Zaimportuj plik jako JSON. Sprawdź liczbę dokumentów, typ `godziny` i pola `_id`. **Dane importuj tylko raz**; powtórny import do tej samej kolekcji bez jawnych `_id` utworzy dodatkowe dokumenty.

**Dane wejściowe `kursy.json` (skopiuj całą tablicę):**

```json
[
  {
    "kod": "JS01",
    "nazwa": "JavaScript od podstaw",
    "dzial": "web",
    "poziom": "podstawowy",
    "godziny": 12,
    "tagi": ["js", "web"],
    "prowadzacy": { "imie": "Ala", "miasto": "Kraków" }
  },
  {
    "kod": "PY01",
    "nazwa": "Python i API",
    "dzial": "backend",
    "poziom": "podstawowy",
    "godziny": 15,
    "tagi": ["python", "api"],
    "prowadzacy": { "imie": "Bartek", "miasto": "Gliwice" }
  },
  {
    "kod": "EX01",
    "nazwa": "Express zaawansowany",
    "dzial": "backend",
    "poziom": "zaawansowany",
    "godziny": 20,
    "tagi": ["js", "api"],
    "prowadzacy": { "imie": "Ala", "miasto": "Gliwice" }
  },
  {
    "kod": "DB01",
    "nazwa": "Podstawy MongoDB",
    "dzial": "baza",
    "poziom": "podstawowy",
    "godziny": 10,
    "tagi": ["mongodb", "baza"],
    "prowadzacy": { "imie": "Celina", "miasto": "Kraków" }
  },
  {
    "kod": "RE01",
    "nazwa": "React w praktyce",
    "dzial": "web",
    "poziom": "zaawansowany",
    "godziny": 18,
    "tagi": ["react", "web"],
    "prowadzacy": { "imie": "Bartek", "miasto": "Gliwice" }
  }
]
```

**Kroki:** połącz się z serwerem → wybierz **Create Database** → wpisz `inf04_t13` i pierwszą kolekcję `kursy` → wejdź w kolekcję → **Add Data → Import JSON or CSV file** → wybierz `kursy.json`, typ JSON → **Import**. W razie ponownego uruchomienia ćwiczenia pracuj na nowej, pustej kolekcji wyraźnie wskazanej przez nauczyciela; nie importuj drugi raz do już zapełnionej.

**Oczekiwany wynik:** dokładnie **5 dokumentów**. Każdy ma pole `_id` (wygenerowany `ObjectId`; jego konkretny zapis jest inny na każdej instalacji), `kod` jako tekst, `godziny` jako liczbę, `tagi` jako tablicę oraz `prowadzacy` jako poddokument. Na przykład `JS01` ma 12 godzin, dwa tagi i prowadzącą Alę z Krakowa. Samo zapisanie pliku JSON na dysku **nie tworzy** jeszcze dokumentów w bazie: konieczny jest import.

**Oddawany rezultat:** plik `kursy.json` i zrzut kolekcji z pięcioma dokumentami.

## Zadanie 2. Zapytania w Compassie

Na kolekcji `inf04_t13.kursy` wykonaj pięć odczytów. Każdy filtr wpisz w polu **Filter** i uruchom przyciskiem **Find**. Zapisz otrzymane wartości `kod`. Przy piątym zapytaniu otwórz **Options**, wpisz dokumenty w polach **Sort** i **Project**, a potem uruchom zapytanie. Nie zmieniaj dokumentów.

| Próba | Wymaganie | Przykładowy Filter | Oczekiwane kody |
|---:|---|---|---|
| 1 | Kursy podstawowe. | `{ "poziom": "podstawowy" }` | `JS01`, `PY01`, `DB01` (bez zadanej kolejności). |
| 2 | Kursy z tagiem `web`. | `{ "tagi": "web" }` | `JS01`, `RE01` (równość dopasowuje element tablicy). |
| 3 | Prowadzący z Gliwic. | `{ "prowadzacy.miasto": "Gliwice" }` | `PY01`, `EX01`, `RE01`. |
| 4 | Kursy trwające co najmniej 15 godzin. | `{ "godziny": { "$gte": 15 } }` | `PY01`, `EX01`, `RE01`. |
| 5 | Kursy zaawansowane, posortowane malejąco po godzinach, pokazujące tylko `kod` i `nazwa`. | `{ "poziom": "zaawansowany" }` | `EX01`, potem `RE01`. |

**Ustawienia dodatkowe dla próby 5:**

```text
Sort: { "godziny": -1 }
Project: { "_id": 0, "kod": 1, "nazwa": 1 }
```

W polach interfejsu wpisuj **tylko dokumenty z nawiasami klamrowymi**, bez słów `Sort:` i `Project:`. Projekcja usuwa z **widoku wyniku** `_id`, `poziom`, `godziny` i pozostałe pola. Nie usuwa ich z zapisanych dokumentów. Po filtrze 5 są dokładnie dwa wyniki, w kolejności `EX01` (20 godzin) i `RE01` (18 godzin); oba w widoku mają tylko `kod` i `nazwa`. Przy pozostałych filtrach brak określonego sortowania oznacza, że nie oceniamy kolejności wyników.

**Oddawany rezultat:** pięć filtrów i zapisane kody, zrzut próby 5 z ustawionymi **Filter**, **Sort** i **Project**.

## Zadanie 3. Miniarkusz: projekty i zagnieżdżone zadania

**Autorska sytuacja:** pracownia śledzi projekty kursantów. Każdy projekt ma opiekuna oraz kilka zadań, które zwykle oglądamy razem z projektem. Przygotuj dokumenty z tablicą poddokumentów, a potem znajdź projekty z zadaniem otwartym. To ćwiczenie modelowania i odczytu w Compassie; operacje CRUD z kodu aplikacji pojawią się w temacie 14.

**Wymagania:**

1. W bazie `inf04_t13` utwórz nową kolekcję `projekty`, wykorzystaj dołączony plik [projekty.json](projekty.json) i zaimportuj **raz** trzy dokumenty.
2. Każdy projekt ma `kod`, `tytul`, poddokument `opiekun` i tablicę poddokumentów `zadania`. Projekt `PR-3` jako jedyny ma dodatkowe pole `priorytet`.
3. W **Filter** znajdź projekty z otwartym zadaniem, filtrując `zadania.status`; powinny zostać `PR-1` i `PR-3`.
4. W **Filter** znajdź projekty opiekunki Ali (`opiekun.imie`); powinny zostać `PR-1` i `PR-3`.
5. W **Filter** znajdź dokumenty z istniejącym polem `priorytet`; powinien zostać tylko `PR-3`. Wyjaśnij, że brak pola w `PR-1` nie oznacza automatycznie wartości tekstowej `"brak"`.

## Zadanie 4. Diagnoza: Identyczne teksty, różne typy pól

W osobnej kolekcji `diagnostyka` umieść dokumenty `{"id":1,"cena":12}` oraz `{"id":2,"cena":"12"}`. Przewidź wyniki filtrów `{"cena":12}` i `{"cena":"12"}`, a następnie je sprawdź. Zmień cenę w drugim dokumencie na liczbę i powtórz filtry. Filtr liczbowy powinien teraz zwracać oba ID. Nie zmieniaj kolekcji `kursy`, potrzebnej w następnej lekcji.

## Zadanie 5. Dla chętnych: eksport wybranych dokumentów

W kolekcji `kursy` ustaw filtr `{ "poziom": "zaawansowany" }`. Użyj w Compassie funkcji **Export Data → Export query results** (nazwy pozycji mogą się różnić zależnie od wersji), wybierz JSON i zapisz plik `kursy_zaawansowane.json`. Otwórz plik i odczytaj wartości `kod`. Zwróć uwagę, że eksport JSON może używać zapisu Extended JSON dla typu `ObjectId`.

**Oczekiwany wynik:** w wyeksportowanym zbiorze znajdują się **dwa dokumenty**, `EX01` i `RE01`. Nie porównuj znak po znaku wartości wygenerowanego `_id`. Jeśli włączysz również projekcję z zadania 2, wyeksportowane pola mogą zostać ograniczone zgodnie z ustawieniami zapytania; dla prostego sprawdzenia pozostaw **Project** puste. Eksport zbioru nie jest kopią zapasową serwera.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
