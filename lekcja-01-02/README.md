# Ćwiczenia: Stanowisko pracy, BHP i uruchomienie ES6+

## Przygotowanie

Utwórz pliki wymagane w zadaniach. Kod JavaScript uruchamiaj w przeglądarce; wyniki i błędy sprawdzaj w narzędziach deweloperskich (F12).

## Zadanie 1. Stanowisko i reakcja na problem

Po szkolnym instruktażu sporządź `stanowisko.md`. Wpisz identyfikator stanowiska; ocenę ustawienia krzesła, monitora i miejsca na ręce; widoczne zagrożenia; osobę, której zgłaszasz problem. Niczego nie rozkręcaj ani nie naprawiaj.

Rozstrzygnij trzy sytuacje: A - widzisz uszkodzony przewód zasilający; B - napój znajduje się obok klawiatury; C - wtyczki i sprzęt wyglądają prawidłowo, ale ekran odbija silne światło. Dla każdej napisz bezpieczne działanie. Zapisz także, gdzie odszukać regulamin i którędy opuścić salę zgodnie z pokazanym instruktażem. Nauczyciel zatwierdza gotowość stanowiska przed pracą.

## Zadanie 2. Trzy pliki i pierwszy wynik

Utwórz folder `temat_01/zadanie_2/` z `index.html`, `styl.css` i `app.js`. HTML ma język polski, UTF-8, tytuł „Stanowisko ES6+”, nagłówek „Pracownia webowa” i akapit „Wyniki obliczeń sprawdź w konsoli.”. Podepnij CSS oraz JS jako pliki lokalne. CSS: krój systemowy, margines 24 px, kolor nagłówka `#174a7e`.

W JS zapisz grupę „IV TP” jako stałą, licznik `wykonane` początkowo 2 jako zmienną i zwiększ go o 1. Ceny „12” i ilości „3” są tekstami: wypisz koszt 36 zł po konwersji. W konsoli mają być kolejno: `Grupa: IV TP`, `Wykonane: 3`, `Koszt: 36 zł`, a potem typ wejścia i po konwersji: `string number`. Przed uruchomieniem przewidź wynik `"12" + "3"`.

## Zadanie 3. Raport zakupów

W nowym folderze `zadanie_3` wykonaj stronę uruchamiającą własny `app.js`; wyniki są w konsoli. Dane: produkt „Zeszyt”, cena jako tekst „8”, ilość jako tekst „5”, budżet jako liczba 50. Oblicz koszt i pozostałą kwotę. Gdy pozostała kwota jest nieujemna, status brzmi „W budżecie”, w przeciwnym razie „Przekroczono budżet”. Użyj ES6+: `const` dla wartości nieprzypisywanych ponownie i literałów szablonowych w raporcie.

Wypisz dokładnie cztery linie: `Produkt: Zeszyt`, `Koszt: 40 zł`, `Pozostało: 10 zł`, `Status: W budżecie`. Następnie sprawdź ilość „7” (koszt 56, pozostało −6, przekroczono budżet) i budżet 40 przy ilości „5” (pozostało 0, w budżecie). Po testach przywróć dane podstawowe. Opisz, gdzie i dlaczego przekształcasz tekst w liczbę. W tej wersji dane są poprawnymi stałymi; nie buduj jeszcze formularza.

## Zadanie 4. Dlaczego wynik nie pojawia się lub jest błędny?

Przygotuj stronę z `<script src="ap.js" defer></script>`, a plik na dysku nazywa się `app.js`. W tym pliku jest kod poniżej. Nie poprawiaj wszystkiego naraz: zapisz objaw, znajdź przyczynę pierwszego problemu, popraw i uruchom. Następnie znajdź problem w obliczeniu. Oczekiwany wpis: `Do zapłaty: 17 zł`. W `testy.md` udokumentuj oba błędy oraz test ceny „20”, dostawy „0” (wynik 20 zł).

```javascript
const cena = "12";
const dostawa = "5";
console.log(`Do zapłaty: ${cena + dostawa} zł`);
```

## Zadanie 5. Dla chętnych: Odrzuć niepoprawne dane

Rozszerz raport: cena ma być skończoną liczbą nieujemną, ilość nieujemną liczbą całkowitą; oba teksty muszą być niepuste po usunięciu spacji. Dla błędnego wejścia wypisz „Niepoprawne dane”, zamiast kosztu. Testy ilości: „abc”, pusty tekst, „2.5”, „0”.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
