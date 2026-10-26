# Powtórzenie: Angular w małych ćwiczeniach

Powtórz listy i trwałe ID, zdarzenia, komunikację komponentów, formularze oraz walidację. Każde ćwiczenie jest osobne. W folderze wykonaj npm install i npx ng serve. Przed kolejnym ćwiczeniem skopiuj odpowiedni starter do src/app/app.ts. Wszystkie dane są przygotowane.

## 1. Stan wybranego rekordu

Starter: [zadanie1/app.ts](startery/zadanie1/src/app/app.ts).

1. Wyświetl przygotowane przesyłki przez @for, z numeracją od 1 i track po id.
2. Pokaż etykietę oraz Oczekuje albo Odebrana.
3. Przycisk Odbierz zmienia stan tylko wskazanego rekordu. Odebrany rekord ma zablokowany przycisk; ponowna próba nie zmienia innych danych.
4. Dla pustej tablicy pokaż Brak przesyłek.

Sprawdź odbiór środkowego rekordu: E-27 jest odebrana, pozostałe nadal oczekują. Zmień kolejność i sprawdź przypisanie stanu do ID.

## 2. Wiadomość od dziecka do rodzica

Starter: [zadanie2/app.ts](startery/zadanie2/src/app/app.ts).

1. Etykieta ma wymagane wejście tytul typu string i wyjście wskazano typu string.
2. Przycisk dziecka emituje aktualny tytuł. Rodzic przechowuje ostatnią otrzymaną wiadomość.
3. Wyświetl dwa dzieci z tytułami Północ i Południe. Początkowa wiadomość rodzica: Brak.
4. Kliknij kolejno oba przyciski i sprawdź wynik oraz brak samodzielnej zmiany wejścia przez dziecko.

## 3. Podgląd obliczenia w formularzu

Starter: [zadanie3/app.ts](startery/zadanie3/src/app/app.ts).

1. Powiąż pola kilometrów i stawki z ngModel. Początkowo kilometry są puste, stawka 0.9.
2. Wymagaj skończonych, nieujemnych liczb. Puste pole nie jest zerem.
3. Przy poprawnych danych pokazuj na żywo kwotę zaokrągloną do dwóch miejsc. Przy błędzie pokaż Uzupełnij poprawne dane.
4. Reset przywraca wartości początkowe. Dla 12.5 km i stawki 0.9 oczekuj 11.25 zł.

Sprawdź zero, puste pole, wartość ujemną i Reset. Własne ulepszenie: dodaj czytelne formatowanie lub dodatkowy przycisk korzystający z poznanych mechanizmów.
