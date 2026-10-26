interface Kurs {
  readonly kod: string;
  nazwa: string;
  godziny: number;
  prowadzacy?: string;
}

const kursy: Kurs[] = [
  { kod: 'TS01', nazwa: 'TypeScript', godziny: 12, prowadzacy: 'Ala' },
  { kod: 'JS01', nazwa: 'JavaScript', godziny: 8 }
];

function opisKursu(kurs: Kurs): string {
  // TODO: uzupełnij funkcję.
  throw new Error('TODO');
}

// Uzupełnij wykonanie programu zgodnie z README.
