# Ćwiczenia: Angular: enum, @switch, dynamiczne klasy i style

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

## Zadanie 1. Status wybiera komunikat

Utwórz enum Status o wartościach nowe,w-realizacji,gotowe. Udostępnij enum jako pole Status w klasie. Stan początkowy Nowe, przyciski zmieniają status. @switch wybiera Oczekuje, Pracujemy albo Gotowe do odbioru.

**Wynik oczekiwany:** Oczekuje, po rozpoczęciu Pracujemy, po zakończeniu Gotowe do odbioru.

## Zadanie 2. Klasy i style z danych

Utwórz dostępny=true i rozmiar 18. Element korzysta z ngClass: dostepny lub brak; ngStyle font-size.px z rozmiar i color z dostępności. Zaimportuj NgClass oraz NgStyle. W przełączniku zmieniaj boolean.

**Wynik oczekiwany:** Zmieniają się klasa, ramka i kolor; rozmiar 18 px.

## Zadanie 3. Panel zamówień ze stanami

Dane: ID 1 Notes ilość 2 Status.Nowe; ID 2 Teczka ilość 1 Status.WRealizacji; ID 3 Długopis ilość 3 Status.Gotowe. Karty renderowane @for. @switch pokazuje opis. Nowe żółte tło; WRealizacji niebieskie; Gotowe zielone. Użyj ngClass. Przycisk Dalej Nowe→WRealizacji→Gotowe, blokada na Gotowe. Metoda także pilnuje granicy. Reset pojedynczego zamówienia do Nowe. ngStyle szerokość paska:0%,50%,100%. Enum bez niebezpiecznego rzutowania na dowolny status.

**Wynik oczekiwany:** Trzy różne stany na starcie. Dwa Dalej dla Notes dają 100%; Teczka i Długopis bez zmiany.

## Zadanie 4. Klasa bez CSS albo dyrektywa bez importu

Usuń NgStyle z imports, pozostaw wiązanie w HTML. Odczytaj błąd i napraw. Potem usuń regułę CSS .gotowe: kompilacja przejdzie, ale naruszysz wymaganie wyglądu. Przywróć regułę.

**Wynik oczekiwany:** Po naprawie build przechodzi i karta Gotowe ma zielone tło.

## Zadanie 5. Rozszerzenie dla kończących wcześniej

Przekształć listę zamówień w sygnał. Dodaj `computed`, które wyznacza liczbę zamówień gotowych do odbioru. Zmiany statusów mają aktualizować listę i licznik bez ręcznego przeliczania. To zadanie dodatkowe; zachowaj wymagane zachowanie panelu.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
