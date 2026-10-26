# Express: ciasteczka i sesje

W folderze lekcji: npm install, potem node nazwa.js. Używamy CommonJS. Przed uruchomieniem kolejnego serwera zatrzymaj poprzedni przez Ctrl+C.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Preferencja wyglądu w cookie | 15 minut, prowadzone

**Pliki:** [zadanie1.js](zadanie1.js).

**Polecenie:**

1. Utwórz `zadanie1.js`. `POST /api/motyw/ciemny` i `POST /api/motyw/jasny` zapisują cookie `motyw` z wybraną wartością na 15 minut.
2. Stosuj `httpOnly: true`, `sameSite: 'lax'`, `secure: false` w lokalnym HTTP i `path: '/'`. `GET /api/motyw` zwraca `{"motyw":"jasny"}`, jeżeli cookie nie ma, a w pozostałych przypadkach aktualną dopuszczalną wartość.
3. `POST /api/motyw/usun` usuwa cookie i zwraca `{"motyw":"jasny"}`. Niepoprawny motyw daje 400.
4. Inne adresy dają 404.

**Oczekiwany wynik - przykład:** Po POST /api/motyw/ciemny kolejne GET pokazuje ciemny; po usunięciu jasny.

**Sprawdź również:** Sprawdź świeżego klienta, oba motywy, usunięcie oraz niepoprawny motyw.

## Zadanie 2. Licznik wejść w sesji | 18 minut, wspólne

**Pliki:** [zadanie2.js](zadanie2.js).

**Polecenie:**

1. Utwórz `zadanie2.js` z middleware `express-session`. `GET /api/licznik` zwiększa licznik bieżącej sesji o 1 i zwraca `{"wejscia":N}`.
2. `POST /api/reset` niszczy bieżącą sesję, usuwa cookie z identyfikatorem i zwraca `{"wyzerowano":true}`. Klient A i klient B mają niezależne liczniki.
3. Dla pierwszego żądania każdego klienta wynik wynosi 1. Pozostałe adresy: 404 JSON.
4. Ustaw `resave: false`, `saveUninitialized: false`, cookie na 15 minut oraz flagi cookie jak w zadaniu 1.

**Oczekiwany wynik - przykład:** Klient A:1,2; klient B:1; po resecie klient A znów zaczyna od 1.

**Sprawdź również:** Użyj osobnych profili lub plików cookies. Sprawdź opcje cookie i reset.

## Zadanie 3. Miniarkusz: koszyk i motyw | 25 minut, samodzielne

**Pliki:** [zadanie3.js](zadanie3.js).

**Dane i kontekst:** Produkty: długopis ID 1/cena 3 i zeszyt ID 2/cena 8. Koszyk należy do sesji, motyw jest osobnym cookie.

**Polecenie:**

1. GET /api/stan początkowo zwraca {"motyw":"jasny","koszyk":[],"suma":0}. Sesja powstaje dopiero po zmianie koszyka.
2. POST /api/motyw/:motyw dopuszcza jasny i ciemny, zapisuje cookie na 15 minut i zwraca {motyw}. Inna wartość daje 400 i Niepoprawny motyw.
3. POST /api/koszyk/:id dodaje jedną sztukę produktu z danych serwera i zwraca bieżący motyw, koszyk i sumę.
4. Błędny ID, w tym abc,0,02, daje 400 i Niepoprawne id. Poprawny nieznany ID daje 404 i Nie ma produktu. Błąd zachowuje koszyk.
5. POST /api/koszyk/wyczysc usuwa zawartość koszyka bieżącej sesji i pozostawia motyw. Zarejestruj trasę tak, aby tekst wyczysc nie trafił do obsługi ID.
6. Sprawdź dwa niezależne koszyki, ponowne dodawanie tych samych produktów i odpowiedź 404 JSON dla innych adresów.
7. Stan konkretnego klienta przechowuj w jego sesji, zamiast we wspólnej zmiennej globalnej.

**Oczekiwany wynik - przykład:** Zeszyt i długopis dają sumę 11; kolejny zeszyt 19.

**Sprawdź również:** Sprawdź dwa niezależne koszyki, złe ID, wyczyszczenie i zachowanie motywu.

<details><summary>Wskazówka</summary>

Uruchom najmniejszy działający fragment. Sprawdź jeden rekord lub jedną akcję, a potem dodawaj kolejne wymagania.

</details>

## Zadanie 4. Diagnoza: Wspólny licznik wszystkich użytkowników | 15 minut, diagnoza

**Pliki:** [naprawa.js](naprawa.js).

**Polecenie:**

1. Przeanalizuj globalne `let wizyty = 0` oraz handler zwiększający tę zmienną. Wymaganie: licznik osobny dla sesji.
2. Sprawdź dwa osobne profile przeglądarki, naprawia kod i wyjaśnia, dlaczego drugi klient nie zaczyna od 3. Nie używaj dwóch kart tego samego profilu jako testu dwóch sesji.

**Oczekiwany wynik - przykład:** Po poprawce A=1,A=2,B=1.

**Sprawdź również:** Testuj dwa niezależne profile, a nie dwie karty tego samego profilu.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Punkt wyjścia:** własna, działająca część podstawowa wskazana w poleceniu.

Wybierz wariant opisany poniżej albo własny dodatek: Dodaj zapamiętaną w cookie preferencję rozmiaru tekstu. Zachowaj działanie części podstawowej.

**Polecenie:**

1. Rozszerz zadanie 3 o `POST /api/koszyk/zamknij`: zniszcz całą sesję bieżącego klienta, usuń cookie `sid_inf04` i zwróć `{"zamknieto":true}`. Preferencja `motyw` w osobnym cookie pozostaje.
2. Po ponownym dodaniu zeszytu koszyk ma tylko jedną pozycję i sumę 8. Dodaj trasę **przed** `POST /api/koszyk/:id`, aby tekst `zamknij` nie został uznany za ID.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: Prywatny licznik odwiedzin

**Pliki:** [domowe/review.js](domowe/review.js).

**Cel naprawy:** GET /licznik ma zwracać kolejną liczbę wizyt w danej sesji. Klient A widzi 1,2; niezależny klient B zaczyna od 1.

**Polecenie:**

1. Uruchom lub skompiluj błędną wersję i porównaj jej zachowanie z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: Niezależne klienty A i B, A=1,A=2,B=1. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
