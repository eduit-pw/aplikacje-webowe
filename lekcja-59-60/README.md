# Trening: wspólny stan i komunikaty

Przećwicz łączenie poznanych elementów Angulara: serwis, komponenty, signal, computed, formularz i walidację. Zadanie jest ćwiczeniem samodzielnego składania aplikacji. W folderze wykonaj npm install i npx ng serve.

Pliki: [app.ts](src/app/app.ts), [kontrola.service.ts](src/app/kontrola.service.ts). Dane są przygotowane; uzupełnij TODO.

## 1. Jedno miejsce przechowywania danych

1. Zapoznaj się z PunktKontroli. Lista początkowa zawiera trzy niewykonane punkty kontroli pracowni.
2. Dodaj w serwisie przelacz(id), zmieniające stan tylko wskazanego punktu. Aktualizuj sygnał nową tablicą i zmieniony rekord nowym obiektem.
3. Dodaj computed gotowe i postep. Postęp jest zaokrąglonym procentem wykonanych pozycji; dla pustej listy wynosi 0.
4. Przewidź podsumowanie po oznaczeniu jednego z trzech punktów: 1 z 3, 33%.

## 2. Dwa komponenty, wspólny wynik

1. Lista wyświetla punkty przez @for z trwałym ID i przyciskiem Zmień stan.
2. Postep pokazuje liczbę wykonanych, wszystkich oraz procent.
3. Oba komponenty korzystają z tej samej instancji serwisu. Umieść je w App.
4. Sprawdź zmianę środkowego punktu, powrót do stanu niewykonanego oraz ukończenie wszystkich: 100%.

## 3. Dodanie własnego punktu

1. Powiąż pole opisu z ngModel i obsłuż submit. Metoda serwisu dodaje przycięty opis od 1 do 50 znaków; nowa pozycja jest niewykonana i ma nowe ID.
2. Odrzuć same spacje i zbyt długi opis, zachowując listę. Pokaż czytelny komunikat.
3. Po sukcesie wyczyść pole i błąd. Podsumowanie wynika z danych, bez ręcznego zwiększania osobnych liczników.
4. Sprawdź dodanie czwartego punktu: jeśli jeden punkt wykonano, postęp zmienia się z 33% na 25%.

Własne ulepszenie: dodaj filtr wykonanych pozycji albo zmianę stylu ukończonego punktu. Sprawdź, czy ukrycie pozycji zachowuje jej dane i poprawne podsumowanie. Przypomnij też działanie routingu i obsługi błędu HTTP na wcześniejszym ćwiczeniu.
