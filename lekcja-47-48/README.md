# Angular: formularze ngModel, walidacja i moment zapisu

Projekt Angular 20 standalone jest przygotowany. Po npm install uruchom npx ng serve i otwórz podany adres. Dla zadania N skopiuj pliki startery/zadanieN do projektu z zachowaniem ścieżek. Używaj własnych rozwiązań z wcześniejszych zadań tam, gdzie polecenie je rozwija.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Podgląd przez ngModel | 15 minut, prowadzone

**Pliki:** [startery/zadanie1/src/app/app.ts](startery/zadanie1/src/app/app.ts).

**Polecenie:**

1. Dodaj FormsModule do importu TS i imports. Pole imię początkowo puste, podgląd zmienia się podczas pisania.
2. Jest wewnątrz form i ma name. Wpisz Anna, potem wyczyść.

**Oczekiwany wynik - przykład:** Wpisywanie Anna zmienia podgląd z każdym znakiem; wyczyszczenie usuwa tekst.

**Sprawdź również:** Sprawdź import FormsModule, name kontrolki i wiązanie dwukierunkowe.

## Zadanie 2. Formularz produktu i walidacja | 18 minut, wspólne

**Pliki:** [startery/zadanie2/src/app/app.ts](startery/zadanie2/src/app/app.ts), [startery/zadanie2/src/app/app.html](startery/zadanie2/src/app/app.html).

**Polecenie:**

1. Dodaj cenę number|null, select z wartościami papier i pisanie, checkbox dostępny. Zapisz przez ngSubmit.
2. Cena minimum 0, nazwa po trim niepusta, przy błędzie komunikat bez zapisu. Podgląd działa na żywo.
3. Button disabled przez f.invalid nie zastępuje sprawdzenia spacji w metodzie.

**Oczekiwany wynik - przykład:** Notes z ceną 0 jest poprawny; brak ceny i same spacje w nazwie są odrzucone.

**Sprawdź również:** Sprawdź formularz poprawny, pustą cenę, cenę ujemną i przycięcie nazwy.

## Zadanie 3. Rezerwacja z podsumowaniem po zatwierdzeniu | 25 minut, samodzielne

**Pliki:** [startery/zadanie3/src/app/app.ts](startery/zadanie3/src/app/app.ts), [startery/zadanie3/src/app/app.html](startery/zadanie3/src/app/app.html), [startery/zadanie3/src/app/app.css](startery/zadanie3/src/app/app.css).

**Dane i kontekst:** Dane początkowe: imię puste, miejsca 1, kurs Python/80 zł; drugi kurs JavaScript/100 zł. Laptop jest wyłączony i kosztuje 20 zł za całą rezerwację.

**Polecenie:**

1. Przygotuj formularz Bootstrap z ngModel i poprawnymi nazwami kontrolek.
2. Wymagaj niepustego imienia po trim i całkowitej liczby miejsc 1-4. Zachowaj walidację także w metodzie zatwierdzającej.
3. Wyświetl podgląd kosztu aktualizowany podczas edycji pól.
4. Po poprawnym zatwierdzeniu pokaż osobną tabelę danych i kwoty. Przed pierwszym zatwierdzeniem tabela nie istnieje.
5. Edycja formularza zmienia podgląd, ale zachowuje ostatnią zatwierdzoną tabelę aż do kolejnego poprawnego zapisu.
6. Reset przywraca pola początkowe i usuwa tabelę. Sprawdź błędną rezerwację po poprawnej.
7. Przy zatwierdzaniu zachowuj osobny wynik, który nie zmienia się wraz z edycją formularza.

**Oczekiwany wynik - przykład:** Anna,2,JavaScript,laptop:220. Zmiana miejsc na 3: podgląd 320, zapis nadal 220.

**Sprawdź również:** Sprawdź miejsca 1/4,0,5,ułamek, puste pole oraz Reset usuwający podsumowanie.

<details><summary>Wskazówka</summary>

Uruchom najmniejszy działający fragment. Sprawdź jeden rekord lub jedną akcję, a potem dodawaj kolejne wymagania.

</details>

## Zadanie 4. Diagnoza: zmienne podsumowanie | 15 minut, diagnoza

**Pliki:** [startery/zadanie4/src/app/app.ts](startery/zadanie4/src/app/app.ts).

**Polecenie:**

1. Zapisz Ala, potem zmień pole na Ola bez zatwierdzenia. Podsumowanie ma nadal pokazywać Ala.
2. Napraw wiązanie.

**Oczekiwany wynik - przykład:** Po zapisie Ala i zmianie pola na Ola podsumowanie nadal pokazuje Ala.

**Sprawdź również:** Kolejne poprawne zatwierdzenie zastępuje podsumowanie nową wartością.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Punkt wyjścia:** własna, działająca część podstawowa wskazana w poleceniu.

Wybierz wariant opisany poniżej albo własny dodatek: Dodaj własne pole formularza i uwzględnij je w zatwierdzonym podsumowaniu. Zachowaj działanie części podstawowej.

**Polecenie:**

1. Dodaj Faktura i NIP. Bez faktury pole NIP jest zablokowane.
2. Przy fakturze wymagaj dokładnie 10 cyfr, bez sumy kontrolnej. Sprawdź 9 i 10 cyfr.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: Zatwierdzone imię

**Pliki:** [domowe/app.ts](domowe/app.ts).

**Cel naprawy:** Po zapisie pokazujemy przycięte imię. Zmiana pola po zapisie nie zmienia podsumowania. Same spacje są odrzucane.

**Polecenie:**

1. Uruchom lub skompiluj błędną wersję i porównaj jej zachowanie z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: Spacje, poprawne zatwierdzenie i edycja pola bez kolejnego zatwierdzenia. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
