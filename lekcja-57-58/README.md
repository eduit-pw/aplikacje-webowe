# Ćwiczenia: Sprawdzian praktyczny: Angular, galeria i formularz

## Przygotowanie

Pracuj w projekcie Angular 20.3 z komponentami standalone i plikami `src/app/app.ts`, `app.html`, `app.css`. Zachowaj konfigurację wygenerowaną w lekcjach 37-38, w tym obsługę Zone.js. Otwórz terminal w katalogu aplikacji.

```bash
npx ng serve
```

Otwórz adres podany w terminalu. Kompilację sprawdzaj poleceniem `npx ng build`. Serwer zatrzymuj przez Ctrl+C. Do osobnych ćwiczeń korzystaj z kopii własnego czystego projektu; nie nadpisuj wcześniejszych rozwiązań.

Jeśli zadanie wymaga Bootstrapa, skopiuj `vendor/bootstrap.min.css` z lekcji 09-10 do `src/vendor/bootstrap.min.css`, a w `src/styles.css` dodaj:

```css
@import "./vendor/bootstrap.min.css";
```

Potrzebne obrazy z folderu `obrazy` lekcji 09-10 skopiuj do `public/obrazy` projektu Angular. Odwołuj się do nich jako `obrazy/nazwa.svg`.

## Zadanie 1. Galeria według specyfikacji

Strona Katalog kursów. Dane ID 1 Angular,frontend,angular.svg,pobrania 0; ID 2 React,frontend,react.svg,pobrania 0; ID 3 Express,backend,express.svg,pobrania 0. Karty Bootstrap mają obraz z alt, nazwę, licznik i przycisk Pobierz. Układ jedna kolumna poniżej 768 px, dwie od 768 px. Dane w tablicy obiektów, @for i trwałe ID. Wykorzystaj obrazy skopiowane do `public/obrazy`. Nie wpisuj kart ręcznie.

## Zadanie 2. Filtry i niezależny stan

Dwa checkboxy Frontend/Backend początkowo zaznaczone. Wybrane kategorie sumują się (OR). Wyłączenie obu daje Brak pasujących kursów. Pobierz zwiększa licznik wyłącznie danej karty i oznacza szkolną symulację akcji. Stan zachowuje się po ukryciu i pokazaniu kategorii. Nie kasuj danych przy filtrowaniu.

## Zadanie 3. Zapis na kurs

Formularz z imieniem początkowo pustym, listą wszystkich kursów z pustym wyborem początkowym, zgodą początkowo odznaczoną. Zapisz jest zablokowany bez zgody. Metoda również sprawdza zgodę, imię po trim i rzeczywiście istniejący kurs. Po zapisie pokaż Ostatni zapis: imię - kurs. Edycja pól nie zmienia zatwierdzonego podsumowania do następnego poprawnego zapisu. Błędny zapis zachowuje wcześniejsze poprawne podsumowanie i pokazuje komunikat. Reset formularza usuwa podsumowanie i przywraca pola, **nie zeruje liczników galerii ani filtrów**. Zastosuj FormsModule i ngModel. Nie potrzebujesz backendu.

## Zadanie 4. Testy i oddanie

Sprawdź cztery kombinacje filtrów, niezależność liczników, powrót ukrytej kategorii, poprawny zapis, same spacje, brak wyboru, brak zgody, zmianę po zapisie i reset. Wybierz trzy najważniejsze próby do dokumentacja.md, wykonaj aktualny zrzut i oddaj projekt. Uruchomienie bez błędu nie zastępuje testu zachowania. Nie dodawaj mechanizmów, które zmieniają wymagane wartości początkowe.

## Zadanie 5. Rozszerzenie dla kończących wcześniej

Po oddaniu części obowiązkowej dodaj sortowanie widocznych kursów rosnąco po nazwie. Sortuj kopię danych i zachowaj ID oraz liczniki. Sprawdź sortowanie po zmianie filtrów i po zwiększeniu liczników.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
