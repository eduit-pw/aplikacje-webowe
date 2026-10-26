class Baza {
  constructor(protected cena: number) {}
}
class Potomna extends Baza {
  constructor(cena: number, private rabat: number) { this.rabat = rabat; super(cena); }
  kwota(): number { return this.cena * (1 - this.rabat / 100); }
}
console.log(new Potomna(40, 25).kwota());
