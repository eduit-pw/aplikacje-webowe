# Express: middleware, `next()` i pliki statyczne

W folderze lekcji: npm install, potem node nazwa.js. Używamy CommonJS. Przed uruchomieniem kolejnego serwera zatrzymaj poprzedni przez Ctrl+C.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Logger żądań | 15 minut, prowadzone

**Pliki:** [zadanie1.js](zadanie1.js).

**Polecenie:**

1. Utwórz `zadanie1.js`. Pierwszy middleware wypisuje w terminalu aktualną godzinę w formacie ISO, metodę i `req.originalUrl`, np. `GET /api/status?test=1`.
2. Następny middleware nadaje żądaniu pole `req.numer` - numer kolejnego żądania od uruchomienia serwera. Oba przekazują sterowanie przez `next()`.
3. Trasa `GET /api/status` odpowiada JSON-em `{"status":"ok","numer":1}` dla pierwszego żądania. Inny adres ma odpowiedź JSON `{"error":"Nie znaleziono"}` i kod 404.
4. Każde żądanie powinno być zalogowane; po dwóch żądaniach numer rośnie. Numeracja jest przechowywana tylko w pamięci i zeruje się po ponownym uruchomieniu serwera.

**Oczekiwany wynik - przykład:** Pierwsze GET /api/status: {"status":"ok","numer":1}; drugie ma numer 2.

**Sprawdź również:** Sprawdź metodę, datę i pełny adres w logu; restart zeruje numerację.

## Zadanie 2. Pliki statyczne | 18 minut, wspólne

**Pliki:** [zadanie2.js](zadanie2.js).

**Polecenie:**

1. Utwórz katalog `public` oraz pliki `index.html` i `style.css`. Strona ma zawierać tytuł „Pracownia INF.04”, nagłówek oraz odsyłacz do arkusza CSS.
2. Udostępnij oba pliki pod prefiksem `/static` przy pomocy **jednego** `express.static()`. Wejście na `/` ma przekierowywać na `/static/index.html`.
3. Nieznany plik ma dawać 404 w JSON. Użyj ścieżki absolutnej skonstruowanej z `__dirname`.

**Oczekiwany wynik - przykład:** GET / przekierowuje do /static/index.html; HTML i CSS są dostępne pod /static.

**Sprawdź również:** Uruchom z innego katalogu i sprawdź nieistniejący plik: 404 JSON.

## Zadanie 3. Miniarkusz: materiały pracowni | 25 minut, samodzielne

**Pliki:** [zadanie3.js](zadanie3.js).

**Dane i kontekst:** Strona z zadania 2 pozostaje dostępna publicznie. Nagłówek grupy służy do ćwiczenia przepływu żądania, bez uwierzytelniania.

**Polecenie:**

1. Dodaj globalny logger daty ISO, metody i req.originalUrl przed pozostałymi handlerami.
2. Udostępnij /static/index.html i /static/style.css z poprzedniego zadania. Nieznany plik ma przejść do odpowiedzi 404.
3. Przy GET /api/materialy sprawdź osobnym middleware nagłówek x-grupa. Przypisz go tylko do tej trasy.
4. Dla 4TP zwróć 200 i {"grupa":"4TP","materialy":["Node.js","Express","MongoDB"]}.
5. Brak lub inna wartość nagłówka daje 400 i {"error":"Niepoprawna grupa"}. W tej gałęzi zakończ odpowiedź.
6. Inne adresy dają 404 i {"error":"Nie znaleziono"}. Sprawdź logowanie strony i API oraz poprawne żądanie po błędnym.
7. Każda gałąź middleware kończy odpowiedź albo świadomie przekazuje sterowanie dalej.

**Oczekiwany wynik - przykład:** GET /api/materialy z x-grupa:4TP: 200 i grupa 4TP oraz trzy nazwy materiałów.

**Sprawdź również:** Bez nagłówka i z inną grupą: 400. Strona statyczna pozostaje dostępna; poprawne żądanie działa po błędnym.

<details><summary>Wskazówka</summary>

Uruchom najmniejszy działający fragment. Sprawdź jeden rekord lub jedną akcję, a potem dodawaj kolejne wymagania.

</details>

## Zadanie 4. Diagnoza: Żądanie pozostaje bez odpowiedzi | 15 minut, diagnoza

**Pliki:** [naprawa.js](naprawa.js).

**Polecenie:**

1. Przeanalizuj logger `app.use((req,res,next)=>{console.log(req.method);});` przed GET /ping. Przewidź efekt, obserwuje żądanie w Network, naprawia middleware i sprawdza GET /ping oraz nieznaną trasę.
2. Żądanie zawieszone anuluj, nie czekaj do końca lekcji.

**Oczekiwany wynik - przykład:** GET /ping po poprawce kończy się odpowiedzią zamiast pozostawać w oczekiwaniu.

**Sprawdź również:** Anuluj zawieszoną próbę, popraw przepływ, sprawdź /ping i nieznaną trasę.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Punkt wyjścia:** własna, działająca część podstawowa wskazana w poleceniu.

Wybierz wariant opisany poniżej albo własny dodatek: Dodaj własną stronę statyczną i odsyłacz do niej. Zachowaj działanie części podstawowej.

**Polecenie:**

1. Rozszerz **zadanie 3** o `GET /api/awaria`. Ta trasa wywołuje `next(new Error('Przykładowa awaria'))`.
2. Na końcu stosu middleware, **po obsłudze 404**, dodaj obsługę błędów zwracającą kod 500 i `{"error":"Błąd serwera"}`. Sprawdź, że `/api/awaria` daje 500, a `/inny-adres` nadal daje 404.
3. Treści błędu nie wysyłamy do klienta.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: Wizytówka serwowana przez Express

**Pliki:** [domowe/review.js](domowe/review.js).

**Cel naprawy:** GET /static/index.html udostępnia stronę z public, również po uruchomieniu z innego folderu. Nieznany adres daje 404.

**Polecenie:**

1. Uruchom lub skompiluj błędną wersję i porównaj jej zachowanie z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: Istniejący plik, inny katalog uruchomienia i nieznany adres. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
