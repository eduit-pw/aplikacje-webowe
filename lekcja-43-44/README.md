# Ćwiczenia: Angular: @if, przełączniki i filtrowanie

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

## Zadanie 1. Widok zależny od boolean

Utwórz dostępny=true, przycisk przełączający i @if/@else z tekstem Dostępny albo Niedostępny. Przewidź tekst po dwóch kliknięciach.

**Wynik oczekiwany:** Dostępny, Niedostępny, Dostępny.

## Zadanie 2. Checkbox a value

Odczytaj stan checkboxa przez #filtr.checked w zdarzeniu change. Ma pokazywać panel Szczegóły tylko po zaznaczeniu. Bez ngModel; użyj @if. Porównaj usunięcie elementu z DOM z [hidden].

**Wynik oczekiwany:** Start bez panelu, po zaznaczeniu panel, po odznaczeniu znika.

## Zadanie 3. Filtrowanie kilkoma przełącznikami

Nowe dane: ID 1 Las kategoria natura, ID 2 Morze natura, ID 3 Miasto architektura. Oba przełączniki kategorii początkowo zaznaczone. Ich wybór ma sumować kategorie (OR), a nie wymagać, by zdjęcie należało do obydwu. Brak zaznaczonych kategorii daje Brak pasujących zdjęć. Przyciski Pobierz zwiększają licznik zdjęcia; licznik zachowuje się po ukryciu i ponownym pokazaniu kategorii. Skopiuj obrazy do `public/obrazy` zgodnie z instrukcją przygotowania.

**Wynik oczekiwany:** Start 3; tylko natura 2; tylko architektura 1; brak 0. Liczniki wracają ze zdjęciem.

## Zadanie 4. Filtr niszczy dane źródłowe

Zastąp źródło wynikiem filtra: this.zdjecia = this.zdjecia.filter(...). Wyłącz naturę i spróbuj włączyć ponownie. Wyjaśnij utratę rekordów, przywróć dane i użyj get widoczne z zadania 3.

**Wynik oczekiwany:** Po przywróceniu źródła i poprawce ukryte zdjęcia wracają.

## Zadanie 5. Rozszerzenie dla kończących wcześniej

Dodaj przełącznik `Tylko pobrane`, początkowo wyłączony. Po włączeniu widoczne są tylko zdjęcia z licznikiem większym od zera, które jednocześnie należą do wybranej kategorii. Kategorie nadal łączą się przez OR, a warunek pobrania przez AND. Sprawdź pusty wynik i ponowne pokazanie wszystkich zdjęć po wyłączeniu przełącznika.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
