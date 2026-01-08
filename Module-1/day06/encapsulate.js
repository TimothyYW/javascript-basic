class User {
  name;
  #email;

  constructor(_name, _email) {
    this.name = _name;
    this.#email = _email;
  }
}

const user = new User('Defryan', 'defryan@gmail.com');
console.log(user);

/*
    class Bank -> saldo
*/
class Bank {
  #saldo;

  constructor() {
    Object.freeze(this);
  }

  get tampilkanSaldo() {
    console.log(this.#saldo);
  }

  set simpanSaldo(saldoBaru) {
    if (saldoBaru <= 0) {
      console.log('Saldo tidak boleh minus');
    } else {
      this.#saldo = saldoBaru;
    }
  }
}

const nasabah1 = new Bank();
nasabah1.saldo = -1000000; // Pembuatan property baru bernama saldo
nasabah1.simpanSaldo = 15000000;
nasabah1.tampilkanSaldo;
