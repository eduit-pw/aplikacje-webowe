# Trening: dokumenty MongoDB i API

Powtórz typy pól, filtrowanie, zapis i odczyt dokumentów oraz interpretowanie odpowiedzi bazy. Pracuj na bazie trening_odczytow, niezależnej od wcześniejszych ćwiczeń. W folderze wykonaj npm install, a przed uruchomieniem API włącz lokalny serwer MongoDB.

## 1. Obserwacja dokumentów w Compassie

Dane: [odczyty.json](dane/odczyty.json).

1. Utwórz kolekcję odczyty i zaimportuj trzy dokumenty tylko raz.
2. Znajdź aktywne czujniki; oczekuj P-21 i P-22. Następnie znajdź temperatury większe niż 20; oczekuj P-22 i P-23.
3. Zmień temperaturę P-21 na 23, zachowując typ number, i powtórz drugi odczyt.
4. Dodaj ręcznie dokument testowy, potem usuń tylko ten dokument. Wskaż różnicę pomiędzy jego kodem i _id.

## 2. Odczyt i zapis przez aplikację

Starter: [api.js](api.js). Port 3116. Bazę i kolekcję wybiera przygotowany kod połączenia.

1. Dodaj GET /api/odczyty zwracające wszystkie dokumenty.
2. Dodaj GET /api/odczyty/:id. Poprawne ID ma 24 znaki szesnastkowe; zły zapis daje 400, a brak dokumentu 404.
3. Dodaj POST /api/odczyty z polami kod i temperatura. Kod po trim jest niepusty, temperatura jest liczbą od -20 do 80 włącznie. Serwer ustawia aktywny:true.
4. Zapisuj tylko dopuszczone pola. Sukces daje 201 i dokument z rzeczywistym _id; błędne dane 400. Ponowny GET ma pokazać nowy odczyt.
5. Sprawdź temperatury -20,80,-21,81 i tekst "23", pusty kod, błędny ID i nieznany poprawny ID.

## 3. Przewidź efekt aktualizacji

Na testowym dokumencie w osobnym skrypcie wykonaj updateOne z filtrem po _id i $set ustawiającym tę samą temperaturę dwukrotnie. Przed próbą przewidź matchedCount i modifiedCount. Wyjaśnij, dlaczego niezmieniona wartość nie oznacza braku rekordu. Wskaż, jak ograniczyć deleteOne do jednego dokumentu. Korzystaj z własnego testowego _id.

Własne ulepszenie: przygotuj filtr odczytów w wybranym przedziale temperatur. Sprawdź próbę pustego wyniku. Nie wprowadzaj nowych bibliotek.
