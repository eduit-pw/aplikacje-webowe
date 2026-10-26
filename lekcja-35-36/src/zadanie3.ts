// - [ ] ETAP A: sprawdź dane wejściowe.
// - [ ] ETAP B: zaimplementuj logikę i uruchom próbę.
// - [ ] ETAP C: przygotuj wynik i sprawdź granicę.

type IdZgloszenia = number | string;

type StatusZgloszenia = 'nowe' | 'przyjete' | 'odrzucone';

interface Zgloszenie {
  readonly id: IdZgloszenia;
  imie: string;
  punkty: number;
  status: StatusZgloszenia;
  email?: string;
}

const zgloszenia: Zgloszenie[] = [
  { id: 101, imie: 'Ada', punkty: 85, status: 'przyjete', email: 'ada@example.org' },
  { id: ' b-2 ', imie: 'Ola', punkty: 40, status: 'nowe' },
  { id: ' c-3 ', imie: 'Jan', punkty: 72, status: 'przyjete' },
  { id: 104, imie: 'Ewa', punkty: 20, status: 'odrzucone', email: 'ewa@example.org' }
];

function tekstId(id: IdZgloszenia): string {
  // TODO: uzupełnij funkcję.
  throw new Error('TODO');
}

function raport(dane: Zgloszenie[]): {
  przyjete: number;
  idPrzyjetych: string[];
  sredniaPunktow: number;
} {
  // TODO: uzupełnij funkcję.
  throw new Error('TODO');
}

// Uzupełnij wykonanie programu zgodnie z README.
