# Ćwiczenia: Angular: utworzenie projektu i komponenty standalone

## Przygotowanie

Utwórz projekt:

```bash
npx @angular/cli@20.3 new katalog --standalone --routing=false --style=css --ssr=false --defaults
cd katalog
npx ng serve
```

Zachowaj wygenerowaną konfigurację i obsługę Zone.js. Korzystaj z plików `src/app/app.ts`, `app.html`, `app.css`. Kompilację sprawdzaj przez `npx ng build`.

Jeśli zadanie wymaga Bootstrapa, skopiuj `vendor/bootstrap.min.css` z lekcji 09-10 do `src/vendor/bootstrap.min.css`, a w `src/styles.css` dodaj:

```css
@import "./vendor/bootstrap.min.css";
```

Potrzebne obrazy z folderu `obrazy` lekcji 09-10 skopiuj do `public/obrazy` projektu Angular. Odwołuj się do nich jako `obrazy/nazwa.svg`.

## Zadanie 1. Uruchom i znajdź pliki

Uruchom projekt katalog, znajdź main.ts, app.ts, app.html i app.css. Zastąp szablon stroną z nagłówkiem Pracownia webowa i akapitem Projekt uruchomiony. Dodaj ramkę CSS. Przed zmianą wskaż, który plik wpłynie na tekst, a który na wygląd.

**Wynik oczekiwany:** Tekst i zielona ramka widoczne po zapisaniu, kompilacja bez błędów.

## Zadanie 2. Samodzielny komponent stopki

Utwórz stopka.ts i komponent standalone ze selektorem app-stopka. Ma wyświetlać Stopka pracowni. Zaimportuj go do App i umieść na końcu widoku. Nie dodawaj pliku TS do index.html skryptem.

**Wynik oczekiwany:** Nagłówek i dokładnie jedna stopka.

## Zadanie 3. Wizytówka szkolnej pracowni

W nowej kopii projektu wykonaj stronę: nagłówek Laboratorium 4 TI; komponent app-informacja z tekstem Zajęcia praktyczne; komponent app-kontakt z tekstem Kontakt: sala 12. W widoku rodzica umieść informację dwa razy, kontakt raz. Informacja ma niebieską ramkę, kontakt własny mały tekst. Bez interpolacji i zdarzeń, które będą w temacie 20.

**Wynik oczekiwany:** Dwie ramki informacyjne i jeden kontakt.

## Zadanie 4. Selector lub imports

W kopii zadania 3 zmień app-informacja na app-info bez zmiany selektora. Zapisz hipotezę, odczytaj pierwszy błąd i napraw. Następnie usuń Informacja z imports, zachowując import TS. Wyjaśnij różnicę obu problemów.

**Wynik oczekiwany:** Przy poprawnym HTML oraz imports: [Informacja, Kontakt] z zadania 3 aplikacja działa.

## Zadanie 5. Rozszerzenie dla kończących wcześniej

Dodaj komponent standalone o selektorze `app-regulamin` z tekstem `Pracuj na swojej kopii.`. Umieść go w widoku aplikacji. Samodzielnie wskaż wszystkie miejsca potrzebne do połączenia rodzica i dziecka.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
