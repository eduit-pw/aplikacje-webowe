# Ćwiczenia: formularze i komponenty Bootstrapa

> Wykonaj zadania, korzystając z przygotowanego szablonu. Zwróć uwagę na poprawne działanie formularzy, dostępność etykiet oraz zachowanie strony bez jej przeładowywania.

## Zadanie 1. Pełny formularz zapisu

1. Ustaw tytuł strony i nagłówek `h1` na **Zapis na warsztaty**.
2. Dodaj wymagane pola:
   - `Imię` — pole tekstowe;
   - `Adres e-mail` — pole typu `email`;
   - `Warsztat` — lista z pustą opcją `Wybierz warsztat` oraz opcjami `Python` i `JavaScript`.
3. Zastosuj właściwe klasy Bootstrapa i dodaj etykiety. Dodaj też przełącznik `Wyślij przypomnienie`, zaznaczony początkowo.
4. Dodaj przyciski `Zapisz` i `Wyczyść`. Pierwszy zatwierdza formularz, a drugi go resetuje. Nie pozwól zatwierdzić formularza z pustym imieniem, imieniem składającym się z samych spacji, niepoprawnym adresem e-mail ani bez wybranego warsztatu.
5. Po poprawnym zatwierdzeniu wyświetl komunikat w formacie: `Zapisano: <imię>. Warsztat: <warsztat>. Przypomnienie: tak/nie.` Imię ma być przycięte, a strona nie może się przeładować.
6. Edycja pola lub przełącznika usuwa poprzedni komunikat. Reset przywraca puste pola, pusty wybór i zaznaczone przypomnienie, a także usuwa komunikat oraz własny błąd imienia.

## Zadanie 2. Karty z obrazami, filtrem i licznikami

1. Ustaw nagłówek strony na **Katalog kursów** i dodaj dwie karty w podanej kolejności:
   - **Python** — `Podstawy programowania. Tryb: stacjonarnie.`
   - **JavaScript** — `Interaktywne strony. Tryb: online.`
2. Każda karta ma zawierać właściwy lokalny obraz z opisem alternatywnym, tytuł, opis, tekst `Polubienia: 0` i przycisk `Lubię to`. Użyj odpowiednich klas `.card-*`.
3. Poniżej szerokości 768 px karty mają być ułożone jedna pod drugą. Od 768 px każda karta ma zajmować połowę wiersza. Zachowaj odstępy i dopasuj obrazy tak, by mieściły się w kartach.
4. Dodaj początkowo wyłączony przełącznik `Tylko online`:
   - po włączeniu ukryj całą kolumnę Python;
   - karta JavaScript ma przesunąć się na początek i nadal zajmować połowę szerokości od 768 px;
   - po wyłączeniu przełącznika pokaż ponownie obie karty.
5. Kliknięcie przycisku zwiększa licznik tylko na danej karcie o 1. Filtrowanie nie może resetować liczników, a zmiana napisu tytułu nie może psuć ich działania.

## Zadanie 3. Samodzielnie: rezerwacja i tabela

1. Ustaw tytuł strony i nagłówek `h1` na **Rezerwacja stanowiska**. Umieść formularz w karcie z nagłówkiem **Formularz rezerwacji**.
2. Dodaj wymagane kontrolki:
   - `Imię` — nie może składać się z samych spacji;
   - `Adres e-mail`;
   - `Stanowisko` — lista z pustą opcją `Wybierz stanowisko`, a następnie `PC-1` i `PC-2`.
3. Dodaj początkowo zaznaczony przełącznik `Bez dodatkowych uwag` oraz pole `Uwagi (opcjonalnie)` typu `textarea`. Gdy przełącznik jest zaznaczony, pole ma być nieaktywne. Odznaczenie ma natychmiast je odblokować, a ponowne zaznaczenie — zablokować. Zmiana przełącznika nie może usuwać tekstu z pola.
4. Przycisk `Zarezerwuj` zatwierdza formularz. Podsumowanie ma być tabelą z kolumnami `Pole` i `Wartość` oraz czterema wierszami: `Imię`, `Adres e-mail`, `Stanowisko`, `Uwagi`. Przed pierwszym zatwierdzeniem wszystkie wartości mają wynosić `—`.
5. Uzupełniaj tabelę dopiero po poprawnym zatwierdzeniu:
   - gdy przełącznik jest zaznaczony, pokaż `Brak uwag`, nawet jeśli nieaktywne pole zawiera wcześniejszy tekst;
   - gdy przełącznik jest odznaczony, pokaż przycięty tekst albo `Brak uwag`, jeśli pole jest puste.
6. Zmiana pól lub przełącznika nie może zmieniać poprzedniego podsumowania. Dopiero kolejne poprawne zatwierdzenie zastępuje wartości. Błędny formularz pozostawia ostatnie poprawne podsumowanie.
7. Od 768 px formularz i tabela mają zajmować dwie równe kolumny. Na telefonie tabela ma znajdować się pod formularzem. Użyj `.card`, `.table`, `.table-striped` i opakowania `.table-responsive`.
8. Wyświetlaj dane użytkownika jako tekst. Strona nie może się przeładowywać; dane nie są zapisywane na serwerze.

## Zadanie 4. Naprawa i własne testy

1. Otwórz `zadanie4/index.html`. Formularz ma spełniać wymagania zadania 3, ale przełącznik nie działa prawidłowo. Zapisz, co powinno się stać po jego odznaczeniu, a następnie sprawdź rzeczywisty wynik.
2. Znajdź przyczynę problemu i popraw ją. Nie usuwaj kontrolki ani nie odblokowuj pola na stałe.
3. W pliku `dokumentacja.md` zapisz jedno lub dwa zdania o przyczynie i poprawce.
4. Sprawdź cztery przypadki:
   - stan początkowy;
   - odznaczenie przełącznika i zatwierdzenie formularza z uwagami;
   - ponowne zaznaczenie przełącznika i zatwierdzenie formularza;
   - wybrany przez siebie przypadek graniczny.

   Przypadek graniczny wybierz przed uruchomieniem testu, np. imię złożone z samych spacji albo pusty wybór stanowiska.

## Zadanie 5. Dla chętnych: modal z informacją

Utwórz przycisk `Zobacz informacje`, który otwiera modal zawierający:

- tytuł **Przed zajęciami**;
- tekst `Zabierz własne pomysły. Sprzęt jest dostępny w pracowni.`

Modal ma się zamykać przez ikonę, przycisk `Rozumiem` oraz klawisz Escape. Użyj atrybutów `data-bs-*` i dopasowanego identyfikatora. Nie pisz własnego mechanizmu modala.