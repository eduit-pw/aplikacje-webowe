# Angular: uruchomienie projektu, interpolacja i zdarzenia

Projekt Angular 20 standalone jest przygotowany. Po npm install uruchom npx ng serve i otwórz podany adres. Dla zadania N skopiuj pliki startery/zadanieN do projektu z zachowaniem ścieżek. Używaj własnych rozwiązań z wcześniejszych zadań tam, gdzie polecenie je rozwija.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Uruchom i wyświetl dane, wspólnie | 15 minut, prowadzone

**Pliki:** [startery/zadanie1/src/app/app.ts](startery/zadanie1/src/app/app.ts).

**Polecenie:**

1. Znajdź main.ts, app.config.ts, app.ts, app.html i app.css. Wskaż, który plik zawiera klasę, który widok, który styl.
2. Uruchom serwer. W App ustaw nazwę Notes, cenę 12 i liczbę sztuk 1; pokaż je oraz iloczyn w widoku.
3. Zmień cenę na 15 i przewidź zmianę wyniku; potem przywróć 12. Tytuł strony w h1: Karta zamówienia.

**Oczekiwany wynik - przykład:** Karta zamówienia pokazuje Notes, cenę 12, sztuki 1 i kwotę 12.

**Sprawdź również:** Cena 15 zmienia wynik na 15; po sprawdzeniu przywróć 12.

## Zadanie 2. Licznik, z malejącą pomocą | 18 minut, wspólne

**Pliki:** [startery/zadanie2/src/app/app.ts](startery/zadanie2/src/app/app.ts).

**Polecenie:**

1. Dodaj Plus i Minus zmieniające liczbę sztuk od 1 do 5. Przy granicach zablokuj odpowiedni przycisk i sprawdzaj granice także w metodach.
2. Metodę plus wykonaj wspólnie z nauczycielem, a minus i wiązanie disabled dopisz samodzielnie. Sprawdź 1 ->2 ->3 ->2 ->1; poniżej 1 i powyżej 5 stan się nie zmienia.
3. Wyjaśnij różnicę `[disabled]="warunek"` i `disabled="false"`.

**Oczekiwany wynik - przykład:** Sekwencja Plus,Plus,Minus,Minus: 1,2,3,2,1.

**Sprawdź również:** Przy 1 nie schodź niżej, przy 5 nie zwiększaj. Granice sprawdza także metoda.

## Zadanie 3. Karta zamówienia, samodzielnie | 25 minut, samodzielne

**Pliki:** [startery/zadanie3/src/app/app.ts](startery/zadanie3/src/app/app.ts), [startery/zadanie3/src/app/app.css](startery/zadanie3/src/app/app.css), [startery/zadanie3/src/app/app.html](startery/zadanie3/src/app/app.html).

**Polecenie:**

1. Na własnym kodzie z poprzedniego etapu zbuduj Bootstrap card: nazwa produktu, cena, liczba sztuk, kwota i przyciski licznika.
2. Dodaj pole tekstowe z referencją #nazwaPole oraz przycisk Zmień nazwę. Formularzy ngModel jeszcze nie używasz.
3. Po kliknięciu przytnij nazwę i ustaw ją w danych komponentu.
4. Same spacje dają komunikat Podaj nazwę i zachowują poprzednią nazwę.
5. Reset przywraca Notes i 1 sztukę, czyści pole nazwy i komunikat błędu. Zachowaj ograniczenie sztuk od 1 do 5.
6. Sprawdź zmianę nazwy, błędną nazwę, obie granice licznika i Reset.
7. Sprawdzaj granice także w metodzie; blokada przycisku jest dodatkową informacją dla użytkownika.

**Oczekiwany wynik - przykład:** Po zmianie nazwy karta pokazuje przyciętą nazwę; Reset przywraca Notes i 1 sztukę.

**Sprawdź również:** Same spacje zachowują poprzednią nazwę i pokazują błąd; Reset czyści pole i błąd.

<details><summary>Wskazówka</summary>

Uruchom najmniejszy działający fragment. Sprawdź jeden rekord lub jedną akcję, a potem dodawaj kolejne wymagania.

</details>

## Zadanie 4. Dlaczego kliknięcie nie działa? | 15 minut, diagnoza

**Punkt wyjścia:** przygotowany projekt Angular i własny kod z poprzedniego etapu.

**Polecenie:**

1. Na kopii zmień `(click)="plus()"` na `(click)="plus"`. Przewidź efekt, sprawdź i popraw.
2. W drugim wariancie ustaw `disabled="false"` na Plus; opisz, dlaczego przycisk jest zablokowany. Po naprawie wróć do prawidłowego warunku.
3. Sprawdź także nazwy metod i terminal kompilacji.

**Oczekiwany wynik - przykład:** Po poprawce kliknięcie Plus zwiększa stan, a disabled zależy od warunku.

**Sprawdź również:** Porównaj wywołanie plus() z samą nazwą plus oraz wiązanie właściwości z atrybutem tekstowym.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Punkt wyjścia:** własna, działająca część podstawowa wskazana w poleceniu.

Wybierz wariant opisany poniżej albo własny dodatek: Dodaj przycisk wyboru innego produktu ze stałymi danymi. Zachowaj działanie części podstawowej.

**Polecenie:**

1. Dodaj przełączaną przyciskiem dostawę za 8 zł, początkowo wyłączoną. Kwota uwzględnia jej stan.
2. Dla dwóch sztuk: 24 bez dostawy i 32 z dostawą. Reset przywraca brak dostawy.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: Liczba porcji

**Pliki:** [domowe/app.ts](domowe/app.ts).

**Cel naprawy:** Licznik porcji zaczyna od 1, pozwala zwiększać i zmniejszać do minimum 1. Przycisk Minus jest blokowany przy minimum.

**Polecenie:**

1. Uruchom lub skompiluj błędną wersję i porównaj jej zachowanie z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: Początkowa 1,dwa zwiększenia i zmniejszanie do minimum. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
