import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
   constructor(agencia, cliente, saldo) {
      super(0, cliente, agencia)
   }
}
