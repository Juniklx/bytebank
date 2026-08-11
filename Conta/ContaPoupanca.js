import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(agencia, cliente, saldo) {
        super(agencia, cliente, saldo);
    }

    get tipoConta() {
        return "conta poupança";
    }

    sacar(valor) {
        const taxaSaque = 0.02;
        return super.sacar(valor, taxaSaque);
    }
}