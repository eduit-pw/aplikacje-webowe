# Angular: enum, @switch, dynamiczne klasy i style

Projekt Angular 20 standalone jest przygotowany. Po npm install uruchom npx ng serve i otwórz podany adres. Dla zadania N skopiuj pliki startery/zadanieN do projektu z zachowaniem ścieżek. Używaj własnych rozwiązań z wcześniejszych zadań tam, gdzie polecenie je rozwija.

Wykonaj zadania 1-4. Zadanie 5 to własne ulepszenie dla chętnych, a zadanie 6 jest domowe. Rozwiązuj kolejne punkty i sprawdzaj działanie na bieżąco. Opis testów oddajesz w testy.md tylko przy zadaniu 4.

## Zadanie 1. Status wybiera komunikat | 15 minut, prowadzone

**Pliki:** [startery/zadanie1/src/app/app.ts](startery/zadanie1/src/app/app.ts).

**Polecenie:**

1. Utwórz enum Status o wartościach nowe,w-realizacji,gotowe. Udostępnij enum jako pole Status w klasie.
2. Stan początkowy Nowe, przyciski zmieniają status. @switch wybiera Oczekuje, Pracujemy albo Gotowe do odbioru.

**Oczekiwany wynik - przykład:** Oczekuje → Pracujemy → Gotowe do odbioru.

**Sprawdź również:** Sprawdź każdy dozwolony stan enum i odpowiadającą mu gałąź @switch.

## Zadanie 2. Klasy i style z danych | 18 minut, wspólne

**Pliki:** [startery/zadanie2/src/app/app.ts](startery/zadanie2/src/app/app.ts), [startery/zadanie2/src/app/app.html](startery/zadanie2/src/app/app.html), [startery/zadanie2/src/app/app.css](startery/zadanie2/src/app/app.css).

**Polecenie:**

1. Utwórz dostępny=true i rozmiar 18. Element korzysta z ngClass: dostepny lub brak; ngStyle font-size.px z rozmiar i color z dostępności.
2. Zaimportuj NgClass oraz NgStyle. W przełączniku zmieniaj boolean.

**Oczekiwany wynik - przykład:** Rozmiar wynosi 18 px; zmiana dostępności zmienia klasę, kolor i ramkę.

**Sprawdź również:** Sprawdź obie wartości boolean i importy NgClass oraz NgStyle.

## Zadanie 3. Panel zamówień ze stanami | 25 minut, samodzielne

**Pliki:** [startery/zadanie3/src/app/app.ts](startery/zadanie3/src/app/app.ts), [startery/zadanie3/src/app/app.html](startery/zadanie3/src/app/app.html), [startery/zadanie3/src/app/app.css](startery/zadanie3/src/app/app.css).

**Dane i kontekst:** Dane: Notes ID 1/2 szt./Nowe, Teczka ID 2/1 szt./WRealizacji, Długopis ID 3/3 szt./Gotowe.

**Polecenie:**

1. Zdefiniuj enum Status i tablicę zamówień. Renderuj karty przez @for z trwałym ID.
2. Przez @switch wyświetl opis bieżącego stanu.
3. Użyj ngClass: Nowe ma żółte tło, WRealizacji niebieskie, Gotowe zielone.
4. Dalej zmienia stan Nowe na WRealizacji, a potem na Gotowe. Dla Gotowe zablokuj przycisk i zabezpiecz metodę.
5. Reset pojedynczego zamówienia przywraca Nowe, zachowując pozostałe rekordy.
6. Przez ngStyle ustaw pasek na 0%,50%,100% zgodnie ze stanem. Korzystaj z wartości enum bez rzutowania dowolnego napisu na status.
7. Stan aplikacji opisuj ustalonymi wartościami enum zamiast przypadkowymi napisami.

**Oczekiwany wynik - przykład:** Trzy różne stany na starcie. Dwa Dalej dla Notes dają 100%, pozostałe zamówienia są bez zmian.

**Sprawdź również:** Gotowe nie przechodzi dalej; Reset dotyczy jednego rekordu i przywraca 0%.

<details><summary>Wskazówka</summary>

Uruchom najmniejszy działający fragment. Sprawdź jeden rekord lub jedną akcję, a potem dodawaj kolejne wymagania.

</details>

## Zadanie 4. Diagnoza: klasa bez stylu | 15 minut, diagnoza

**Pliki:** [startery/zadanie4/src/app/app.ts](startery/zadanie4/src/app/app.ts).

**Polecenie:**

1. Tekst Alarm ma być czerwony. Klasa jest w HTML, ale wygląd jest niezgodny.
2. Napraw CSS.

**Oczekiwany wynik - przykład:** Alarm ma czerwony tekst po poprawieniu selektora CSS.

**Sprawdź również:** Sprawdź zgodność nazwy klasy w szablonie i arkuszu stylów.

W testy.md zapisz trzy próby: typową, graniczną i własną, z oczekiwaniem i rzeczywistym wynikiem. Dodaj krótką diagnozę.

## Zadanie 5. Własne ulepszenie - dla chętnych

**Punkt wyjścia:** własna, działająca część podstawowa wskazana w poleceniu.

Wybierz wariant opisany poniżej albo własny dodatek: Dodaj filtr zamówień według wybranego statusu. Zachowaj działanie części podstawowej.

**Polecenie:**

1. Przekształć listę zamówień w signal i dodaj computed liczby gotowych. Zmieniaj rekordy niezmiennie przez update.

Dla własnego pomysłu ustal oczekiwany efekt, pokaż jeden test dodatku i ponownie sprawdź podstawę. Wystarczy krótki komentarz w kodzie.

## Zadanie 6. Zadanie domowe: Status i pasek realizacji

**Pliki:** [domowe/app.ts](domowe/app.ts).

**Cel naprawy:** Początkowo status jest nowe, po Zakończ gotowe. Gotowe ma zielony tekst. Szerokość paska 30 oznacza 30%, nie 30 pikseli.

**Polecenie:**

1. Uruchom lub skompiluj błędną wersję i porównaj jej zachowanie z wymaganiami.
2. Znajdź i popraw trzy usterki. Zachowaj poznane mechanizmy i wymagane zachowanie.
3. Nad każdą poprawką dodaj komentarz CODE REVIEW wyjaśniający przyczynę błędu. W HTML użyj komentarza HTML, a w JS lub TS komentarza //.
4. Sprawdź: Stan początkowy,zakończenie i szerokość paska 30%. Oddaj poprawiony kod i przygotuj krótkie wyjaśnienie jednej poprawki.
