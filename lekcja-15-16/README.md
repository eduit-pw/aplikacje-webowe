# Ćwiczenia: JSON i wbudowany serwer HTTP w Node.js

## Przygotowanie

Wymagany jest Node.js. Korzystaj z CommonJS (`require`); moduły `node:*` są wbudowane i nie wymagają instalacji. Każde zadanie wykonuj w osobnym podkatalogu, np. `zadanie1`. Uruchamiaj przez `node nazwa.js`; serwer zatrzymuj klawiszami Ctrl+C.

## Zadanie 1. Dostępne stanowiska - JSON do JSON

W katalogu `zadanie1` utwórz podkatalog `dane` i plik `stanowiska.json` z podaną niżej zawartością. Napisz `filtruj.js`, który asynchronicznie odczytuje plik, parsuje JSON, wybiera tylko stanowiska z polem `dostepne: true` i zapisuje do `out/dostepne.json` obiekt z polami `liczba` oraz `stanowiska` (tablica przefiltrowanych obiektów). Zapis ma być czytelny (wcięcie dwóch spacji). W terminalu wypisz `Zapisano 2 dostępne stanowiska.` dopiero po zapisie. Program ma działać także uruchomiony z katalogu nadrzędnego.

**Dane wejściowe: `zadanie1/dane/stanowiska.json`:**

```json
[
  { "id": 1, "sala": "204", "dostepne": true },
  { "id": 2, "sala": "205", "dostepne": false },
  { "id": 3, "sala": "206", "dostepne": true }
]
```

**Oddawany rezultat:** `filtruj.js`, plik wejściowy i wygenerowany `out/dostepne.json`. **Sprawdź:** `true` nie jest napisem; w wyniku są tylko id 1 i 3; `liczba` jest liczbą 2; drugi przebieg nie powiela danych.

## Zadanie 2. Pierwszy serwer HTTP

Utwórz `zadanie2/server.js`. Serwer ma działać lokalnie na porcie `3038` i obsługiwać trzy przypadki: `GET /` → status `200`, typ `text/plain; charset=utf-8`, treść `Serwer działa`; `GET /status` → status `200`, typ JSON, obiekt `{"status":"ok"}`; każdy inny adres GET → status `404`, typ JSON, `{"error":"Nie znaleziono"}`. Każda odpowiedź musi się zakończyć. Sprawdź kody i nagłówki w terminalu.

**Oddawany rezultat:** `server.js` i zapis wyników trzech żądań. **Sprawdź:** czy `curl -i` pokazuje 200 / 200 / 404, czy odpowiedź `/status` da się sparsować jako JSON, czy program nadal obsługuje następne żądanie.

## Zadanie 3. Miniarkusz: serwer katalogu kursów

W `zadanie3/dane/kursy.json` zapisz podane poniżej trzy obiekty. Utwórz serwer `server.js` działający lokalnie na porcie `3038`. Program ma **asynchronicznie odczytać i sparsować plik przed otwarciem portu**; w razie błędu danych wypisać błąd i zakończyć działanie kodem innym niż zero.

```json
[
  { "id": 1, "nazwa": "Python", "miejsca": 8 },
  { "id": 2, "nazwa": "JavaScript", "miejsca": 5 },
  { "id": 3, "nazwa": "SQL", "miejsca": 6 }
]
```

**Wymagania do odhaczenia:**

1. `GET /api/kursy` zwraca `200` i tablicę trzech kursów jako JSON.
2. `GET /api/kursy?id=2` zwraca `200` i **jeden obiekt** kursu JavaScript, nie tablicę. `id=99` zwraca `404` i `{"error":"Nie ma kursu"}`.
3. `GET /api/kursy?id=abc` (również `id=0` lub pusty `id=`) zwraca `400` i `{"error":"Niepoprawne id"}`.
4. Nieznana ścieżka GET zwraca `404` i `{"error":"Nie znaleziono"}`. Żądanie z metodą inną niż GET zwraca `405`, nagłówek `Allow: GET` i `{"error":"Metoda niedozwolona"}`.
5. Wszystkie odpowiedzi mają nagłówek `Content-Type: application/json; charset=utf-8`; po każdym żądaniu da się wysłać następne, a błędny plik JSON nie uruchamia serwera.

**Oddawany rezultat:** `server.js`, `dane/kursy.json` i zrzut kontroli statusów dla pięciu przypadków (w tym przynajmniej jednego błędu). Po każdej próbie zatrzymaj serwer przez `Ctrl+C`; przed uruchomieniem zadania 3 zatrzymaj serwer zadania 2, bo używają tego samego portu.

## Zadanie 4. Diagnoza: JSON poprawny składniowo, dane błędne

W osobnym pliku sprawdź poniższy fragment dla trzech wartości `tekst`: `'{"cena":12}'`, `'{"cena":"abc"}'` oraz `'nie JSON'`.

```js
const dane = JSON.parse(tekst);
console.log(dane.cena * 2);
```

Przed uruchomieniem przewidź wyniki. Dodaj osobno obsługę błędu formatu JSON i walidację danych: cena ma być skończoną liczbą nieujemną. Zaproponuj i sprawdź próby z ceną `0` oraz `-1`. Udokumentuj różnicę między błędem składni JSON a błędną wartością pola.

## Zadanie 5. Dla chętnych: liczba kursów

Rozszerz serwer z zadania 3 o `GET /api/liczba`, które zwraca `200` i `{"liczba":3}` (wartość obliczona z tablicy, nie wpisana na stałe). Pozostałe adresy i kody mają zachować opisane działanie.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
