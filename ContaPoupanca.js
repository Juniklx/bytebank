import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(agencia, cliente, saldo) {
        super(agencia, cliente, saldo, 0.05);
    }

    get tipoConta() {
        return "conta poupanca";
    }
}