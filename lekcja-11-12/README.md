# Ćwiczenia: Node.js: środowisko, REPL, asynchroniczność i npm

## Przygotowanie

Pracuj w jednym katalogu projektu. Sprawdź `node --version` i `npm --version`. Inicjalizację i instalację wykonaj zgodnie z zadaniem 1. Pliki uruchamiaj przez `node nazwa.js`. Przykłady używają CommonJS (`require`).

## Zadanie 1. Środowisko, REPL i pierwszy pakiet

1. W terminalu sprawdź `node -v` i `npm -v`.
2. Wpisz `node`, aby wejść do REPL. W osobnych wierszach wykonaj:

```js
const ceny = [12, 18, 12];
ceny.filter((cena) => cena > 12)
ceny.length
process.versions.v8
```

Zapisz wynik filtrowania i długość tablicy. Wyjdź poleceniem `.exit`. Nie wpisuj `.exit` do pliku JavaScript. Wartość `undefined` po deklaracji zmiennej w REPL nie oznacza błędu.

3. Przy dostępnym rejestrze npm przejdź w terminalu do pobranego katalogu `lekcja-11-12` i wykonaj:

```bash
npm init -y
npm install --save-exact lodash@4.18.1
npm ls lodash
```

Przy pracy offline skopiuj przygotowany przez nauczyciela projekt `lekcja-11-12`; w nim wykonaj tylko `npm ls lodash`. Kolejne pliki zapisuj w tym samym projekcie.

4. Utwórz `srodowisko.js`. Program ma wypisać:
   - `Node: ` oraz rzeczywistą wartość `process.version`;
   - `V8: ` oraz rzeczywistą wartość `process.versions.v8`;
   - `Unikalne ceny: ` oraz tablicę bez powtórzeń jako JSON;
   - `Liczba: ` oraz długość tablicy bez powtórzeń.
5. Użyj tablicy `[12, 18, 12]` i funkcji pakietu `_.uniq`. Uruchom `node srodowisko.js`. Następnie zmień dane na `[5, 5, 9, 11]` i sprawdź, czy wynik zmienia się bez przepisywania obliczeń.
6. Wskaż w projekcie: deklarację zależności, lockfile i katalog z kodem pakietu. Do `dokumentacja.md` wpisz wersję Node/npm i jedno zdanie o różnicy między `package.json` a `node_modules`.

**Podpowiedź API:** `const _ = require('lodash');` udostępnia pakiet. `_.uniq(tablica)` zwraca tablicę wartości bez powtórzeń, zachowując kolejność pierwszych wystąpień. `JSON.stringify(tablica)` zamienia ją na tekst JSON. 

**Sprawdzenie:** dla pierwszych danych część wynikowa to `Unikalne ceny: [12,18]` i `Liczba: 2`; dla drugich `[5,9,11]` i `Liczba: 3`. Wersji środowiska nie wpisuj na sztywno.

## Zadanie 2. Kolejność wykonania i przejście do `await`

Zapisz poniższy kod jako `kolejnosc.js`. **Przed uruchomieniem** wpisz do `dokumentacja.md` przewidywaną kolejność czterech komunikatów.

```js
console.log('START');

setTimeout(() => {
  console.log('TIMER');
}, 0);

Promise.resolve().then(() => {
  console.log('PROMISE');
});

console.log('KONIEC');
```

Uruchom `node kolejnosc.js`. Zapisz wynik rzeczywisty i wyjaśnij, czy `0` oznacza wykonanie callbacka w środku bieżących instrukcji. Nie zmieniaj przewidywania po obejrzeniu wyniku.

W pliku `status.js` otrzymujesz kod startowy:

```js
const { setTimeout: poczekaj } = require('node:timers/promises');

function pobierzStatus() {
  return poczekaj(40, 'gotowe');
}

async function main() {
  console.log('A');
  // Pobierz wynik pobierzStatus() przez await do zmiennej status.
  // Wypisz: Status: <wynik>
  console.log('B');
}

main().catch((blad) => {
  console.error(`Błąd: ${blad.message}`);
  process.exitCode = 1;
});

console.log('C');
```

Uzupełnij dwa brakujące wiersze. Najpierw przewidź kolejność, następnie uruchom `node status.js`. Wyjaśnij, dlaczego `C` może zostać wypisane podczas oczekiwania w `main`. Zapisz jedno zdanie o tym, co zwraca `pobierzStatus()` przed zakończeniem operacji.

**Wskazówka na tym etapie:** konstrukcja ma postać `const wynik = await operacja();` wewnątrz funkcji `async`. Późniejsze zadanie 3 nie będzie miało rozpisanej logiki.

## Zadanie 3. Samodzielnie: kolejka wydruków

Zapisz `kolejka.js` w projekcie z zadania 1. Program ma spełniać wszystkie wymagania:

1. Na początku funkcji `main` wypisuje `START` i czeka na wynik `pobierzZgloszenia(daneWejsciowe)`.
2. Usuwa duplikaty po polu `id`, zachowując pierwszy obiekt dla danego ID. Następnie zostawia tylko zgłoszenia typu `druk`. Zachowuje kolejność pozostałych zgłoszeń.
3. Wypisuje `Przyjęto: N`, gdzie `N` jest długością przygotowanej kolejki.
4. Obsługuje kolejkę **po jednym zgłoszeniu**, czekając na wynik `obsluz(zgloszenie)`. Każdy zwrócony komunikat wypisuje po zakończeniu tej operacji.
5. Na końcu wypisuje `Zakończono: N`. Liczbę wyznacza z rzeczywistej kolejki, nie wpisuje jej na sztywno.
6. Przy pustej kolejce wypisuje przyjęcie i zakończenie z zerem. Nie wypisuje komunikatu `Gotowe`.
7. Po wywołaniu `main` kod poza funkcją wypisuje `Można przyjmować kolejne zadania.`. Ten wiersz ma pojawić się po `START`, ale przed przyjęciem kolejki i przed wynikami obsługi.
8. Uruchamia się poleceniem `node kolejka.js`. Sprawdź osobno zestawy A, B i C, zmieniając wyłącznie argument wywołania `main`.

**Dane i infrastruktura do skopiowania:**

```js
const _ = require('lodash');
const { setTimeout: poczekaj } = require('node:timers/promises');

const zestawA = [
  { id: 'D-1', typ: 'druk' },
  { id: 'D-2', typ: 'skan' },
  { id: 'D-1', typ: 'druk' },
  { id: 'D-3', typ: 'druk' }
];

const zestawB = [
  { id: 'X-8', typ: 'druk' },
  { id: 'X-9', typ: 'druk' },
  { id: 'X-8', typ: 'druk' }
];

const zestawC = [];

function pobierzZgloszenia(dane) {
  return poczekaj(40, dane);
}

function obsluz(zgloszenie) {
  return poczekaj(30, `Gotowe: ${zgloszenie.id}`);
}

// Napisz funkcję async main(daneWejsciowe) oraz kod jej uruchomienia.
```

**Podpowiedź API:** `_.uniqBy(tablicaObiektow, 'id')` usuwa powtórzenia według pola `id` i zachowuje pierwsze wystąpienie. Do filtrowania możesz użyć poznanego `.filter()`. Dane zawierają poprawne obiekty; nie musisz jeszcze projektować walidacji ich struktury. 

**Wynik dla A:**

```text
START
Można przyjmować kolejne zadania.
Przyjęto: 2
Gotowe: D-1
Gotowe: D-3
Zakończono: 2
```

Dla B liczba wynosi 2, a identyfikatory to kolejno `X-8`, `X-9`. Dla C są tylko cztery wiersze: `START`, komunikat o kolejnych zadaniach, `Przyjęto: 0`, `Zakończono: 0`.

**Dokumentacja:** podaj w jednym zdaniu rolę `main`, znaczenie jej parametru i fakt, że zwraca Promise bez własnej wartości wynikowej. Dokładny szablon komentarza egzaminacyjnego stosuje się wtedy, gdy określa go arkusz.

## Zadanie 4. Znajdź błąd, przetestuj i udokumentuj

Poniższy `naprawa.js` powinien wypisać `START`, potem `Gotowe: D-7`, a na końcu `KONIEC`. Ma korzystać z tekstu zwróconego przez opóźnioną operację. **Przed uruchomieniem przewidź rzeczywisty wynik błędnej wersji.** Następnie uruchom ją, wskaż przyczynę i popraw program.

```js
const { setTimeout: poczekaj } = require('node:timers/promises');

async function obsluz(zgloszenie) {
  poczekaj(30, `Gotowe: ${zgloszenie.id}`);
}

async function main() {
  console.log('START');
  const komunikat = await obsluz({ id: 'D-7' });
  console.log(komunikat);
  console.log('KONIEC');
}

main().catch((blad) => {
  console.error(`Błąd: ${blad.message}`);
  process.exitCode = 1;
});
```

1. Sprawdź poprawkę poleceniem `node naprawa.js`.
2. W `dokumentacja.md` opisz przyczynę w jednym-dwóch zdaniach i wklej wynik po naprawie.
3. Dla kolejki z zadania 3 zapisz trzy testy: typowy A, pusty C oraz własny zestaw z co najmniej dwoma poprawnymi zgłoszeniami typu `skan` i żadnym typu `druk`. Ostatni zestaw ma być Twoim pomysłem, nie kopią pustej tablicy.
4. Uzupełnij kolumny wynik oczekiwany i rzeczywisty. Sprawdź w nich również liczbę komunikatów `Gotowe`, nie tylko ostatni wiersz.

| Test | Dane / działanie | Wynik oczekiwany | Wynik rzeczywisty | Wniosek |
|---|---|---|---|---|
| Typowy | Zestaw A | Uzupełnij przed uruchomieniem | Uzupełnij po uruchomieniu | Spełnia / nie spełnia |
| Graniczny | Pusta tablica C | Uzupełnij przed uruchomieniem | Uzupełnij po uruchomieniu | Spełnia / nie spełnia |
| Własny | Co najmniej dwa skany, bez druku | Uzupełnij przed uruchomieniem | Uzupełnij po uruchomieniu | Spełnia / nie spełnia |

Zadanie nie wymaga mierzenia 30 ms ani doinstalowania frameworka testowego. Jeśli test ujawni błąd, zapisz również poprawkę i wynik ponownego uruchomienia.

## Zadanie 5. Dla chętnych: odrzucona Promise

Rozszerzenie wykonuj po sprawdzeniu części obowiązkowej.

W osobnym `blad.js` zasymuluj odrzucenie Promise z komunikatem `Brak połączenia`. Funkcja `main` ma oczekiwać na operację. Po odrzuceniu program ma wypisać `Błąd: Brak połączenia`, ustawić niezerowy kod zakończenia i nie wypisać `Gotowe`. Nie buduj prawdziwego połączenia sieciowego.

**Podpowiedź API:** `Promise.reject(new Error('tekst'))` zwraca odrzuconą Promise. W tym zadaniu wywołaj ją wewnątrz funkcji pobierającej dane, a tę funkcję wywołaj z `main`.

## Oddanie pracy

Oddaj pliki wymagane w zadaniach i własną dokumentację testów. Zapisz sprawdzone dane, oczekiwany wynik oraz wynik rzeczywisty. Dołącz manifesty i konfigurację, jeśli projekt ich używa. Nie dołączaj `node_modules`, plików tymczasowych ani danych dostępowych. Zadanie 5 jest dodatkowe.
