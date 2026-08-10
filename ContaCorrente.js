import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static #numeroDeContas = 0;

    constructor(agencia, cliente, saldo) {
        super(agencia, cliente, saldo, 0.1);
    }

    get tipoConta() {
        return "conta corrente";
    }
}
