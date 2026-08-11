import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
    constructor(agencia, cliente, saldo) {
        super(agencia, cliente, saldo);
    }

    get tipoConta() {
        return "conta salário";
    }

    sacar(valor) {
        const taxaSaque = 0;
        return super.sacar(valor, taxaSaque);
    }
}