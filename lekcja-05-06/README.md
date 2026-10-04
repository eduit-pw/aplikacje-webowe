# Ćwiczenia: jQuery i obsługa zdarzeń

## Zadanie 1. Powitanie i klasa CSS

Uzupełnij przygotowany starter panelu.

- Przycisk **Powitaj** pobiera imię z `#imie`, usuwa skrajne spacje i wyświetla w `#wynik` tekst `Witaj, imię!`.
- Jeśli pole jest puste, wyświetl komunikat „Podaj imię.”.
- Przycisk **Wyróżnij wynik** przełącza klasę `wyrozniony`. Ponowne kliknięcie usuwa wyróżnienie.
- Początkowy tekst wyniku to „Jeszcze brak powitania.”.
- Dane użytkownika wyświetlaj dosłownie, również wtedy, gdy przypominają tag HTML.
- Strona nie może się przeładowywać.

## Zadanie 2. Dodawanie, usuwanie i animacja listy

Uzupełnij przygotowany starter listy.

### Dodawanie i usuwanie elementów

- Przycisk **Dodaj** tworzy element `li` z przyciętą treścią wpisaną przez użytkownika oraz przyciskiem **Usuń**.
- Pusta treść nie dodaje elementu i wyświetla komunikat „Wpisz treść zadania.”.
- Po dodaniu elementu wyczyść pole i wyświetl „Dodano zadanie.”.
- Treść wpisaną przez użytkownika wyświetlaj dosłownie.
- Przycisk **Usuń** usuwa tylko element, do którego należy. Ma działać także dla elementów utworzonych po uruchomieniu strony.

### Pokazywanie i ukrywanie listy

Przycisk **Pokaż / ukryj listę** przełącza widoczność listy za pomocą `fadeToggle(200)`.

- Przed rozpoczęciem kolejnej animacji zakończ poprzednią i usuń jej kolejkę przez `stop(true,true)`.
- Po zakończeniu animacji ustaw `aria-expanded` przycisku na `true`, gdy lista jest widoczna, albo `false`, gdy jest ukryta.
- Ukrycie listy nie może jej resetować.

## Zadanie 3. Wskaźnik postępu z dokładnymi progami

Uzupełnij starter **Wskaźnik postępu**. Przycisk **Oceń postęp** ma sprawdzać, czy nazwa nie jest pusta po przycięciu oraz czy postęp jest liczbą całkowitą z zakresu od 0 do 100.

### Walidacja i wynik

- Puste pole procentowe jest błędem, a nie wartością zero.
- Przy błędnych danych wpisz do `#blad`: „Podaj nazwę i całkowity postęp od 0 do 100.”, a do `#status`: „Brak oceny.”. Usuń klasy poprzedniej oceny.
- Przy poprawnych danych wyczyść komunikat błędu i pokaż dokładnie tekst w formacie `nazwa: procent% — opis`.
- Nazwę wyświetlaj dosłownie, bez interpretowania jej jako HTML.
- Po zmianie danych wynik ma się aktualizować dopiero po kliknięciu przycisku.
- CSS w starterze zapewnia kolory. Jednocześnie może być aktywna tylko jedna klasa oceny.

### Progi oceny

| Postęp | Opis | Klasa CSS |
|---|---|---|
| Poniżej 20 | Niski | `niski` |
| Od 20 do 75 włącznie | Średni | `sredni` |
| Powyżej 75 | Wysoki | `wysoki` |

Dla nazwy „Projekt” i wartości `20` oczekiwany wynik to `Projekt: 20% — Średni`.

**Przed uruchomieniem testów zapisz swoje przewidywania.** Obowiązkowo sprawdź wartości: `0`, `19`, `20`, `75`, `76`, `100`, `-1`, `101`, `20.5`, puste pole oraz pustą nazwę.

## Zadanie 4. Diagnoza wskaźnika

Poniższy fragment próbuje spełnić wymagania zadania 3, ale ich nie spełnia. Na kopii startera znajdź i udokumentuj przyczyny problemów:

- nieprawidłowe statusy dla wartości 20 i 75;
- traktowanie pustego procentu jak zera i brak walidacji;
- kumulowanie klas oceny;
- interpretowanie nazwy jako HTML;
- brak opisu statusu i poprawnego komunikatu błędu.

Napraw wszystkie problemy zgodnie ze specyfikacją zadania 3. W pliku `testy.md` opisz co najmniej cztery różne testy ujawniające usterki.

```javascript
$("#ocen").on("click", function () {
  const nazwa = $("#nazwa").val();
  const p = Number($("#procent").val());
  const klasa = p <= 20 ? "niski" : p >= 75 ? "wysoki" : "sredni";
  $("#status").addClass(klasa).html(`${nazwa}: ${p}%`);
});
```

## Zadanie 5. Liczniki prób

Rozbuduj wskaźnik o element `#liczniki` z początkowym tekstem „Poprawne: 0, błędne: 0”.

- Każde kliknięcie zwiększa dokładnie jeden licznik, zależnie od wyniku walidacji.
- Zmiana pola bez kliknięcia nie zmienia liczników.
- Zachowaj wszystkie wymagania zadania 3.