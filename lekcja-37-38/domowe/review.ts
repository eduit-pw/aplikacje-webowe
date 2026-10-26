class Portfel {
  private saldo = 0;
  wplac(kwota: number): void {
    if (!Number.isFinite(kwota) || kwota > 0) throw new Error('Błędna wpłata');
    this.saldo += kwota;
  }
  wyplac(kwota: number): boolean {
    if (!Number.isFinite(kwota) || kwota < 0 || kwota >= this.saldo) return false;
    this.saldo += kwota;
    return true;
  }
  odczytaj(): number { return this.saldo; }
}
const p = new Portfel();
p.wplac(40);
p.wyplac(15);
console.log(p.odczytaj());
