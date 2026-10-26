# Powtórzenie: Node.js i Express

Utrwal operacje na plikach, asynchroniczność, JSON, parametry żądania, walidację i stan sesji. Ćwiczenia służą treningowi poznanych umiejętności. W folderze wykonaj npm install. Zatrzymuj poprzedni serwer przed kolejnym uruchomieniem.

## 1. Komunikat z dwóch plików

Pliki: [komunikat.js](komunikat.js), [pierwsza.txt](dane/pierwsza.txt), [druga.txt](dane/druga.txt).

1. Odczytaj oba pliki asynchronicznie w UTF-8, względem katalogu skryptu.
2. Połącz teksty w podanej kolejności, po jednym wierszu; usuń skrajne białe znaki przed połączeniem.
3. Utwórz out, jeśli nie istnieje, i zapisz out/komunikat.txt, odświeżając jego zawartość.
4. Dopiero po zapisie pokaż Komunikat gotowy. Obsłuż błąd pliku.

Oczekuj dwóch wierszy: Otwarcie pracowni: 08:00. oraz Dyżur: Łukasz. Sprawdź drugi start, polskie znaki, pusty drugi plik i uruchomienie z innego katalogu.

## 2. API prostych obliczeń

Starter: [api.js](api.js). Uruchom node api.js; port 3113.

1. Dodaj GET /api/dlugosc/:metry. Metry są skończoną liczbą nieujemną. Opcjonalna jednostka to cm albo mm, domyślnie cm.
2. Zwróć JSON {wartosc,jednostka}. Dla /api/dlugosc/1.5?jednostka=mm oczekuj {"wartosc":1500,"jednostka":"mm"}.
3. Odrzuć ujemne lub nieliczbowe metry, pustą albo nieznaną jednostkę i powtórzony parametr jednostka, kodem 400.
4. Dodaj POST /api/dodaj z JSON-em {a,b}. Obie wartości i wynik muszą być skończonymi liczbami. Sukces daje 200 i {wynik}; złe dane 400. Nie zapisuj historii obliczeń.
5. Sprawdź 0 metrów, brak jednostki, -1,abc, jednostka=, powtórzenie parametru oraz dodawanie 2 i 3. Nieznany adres daje 404.

## 3. Preferencja konkretnego klienta

1. W tym samym API dodaj GET /api/uklad, zwracające {uklad}; wartość domyślna to pelny.
2. POST /api/uklad przyjmuje pelny lub kompaktowy i zapisuje wybór w sesji. Inna wartość daje 400.
3. Sprawdź dwóch klientów z oddzielnymi plikami cookies: zmiana u A nie wpływa na B. Nie używaj dwóch kart jednego profilu.

Po treningu wyjaśnij różnicę między req.params i req.query oraz między danymi procesu i sesji. Własne ulepszenie: dodaj inny przelicznik z poznaną walidacją.
