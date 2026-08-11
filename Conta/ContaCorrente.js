import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static #numeroDeContas = 0;

    constructor(agencia, cliente, saldo) {
        super(agencia, cliente, saldo);
        ContaCorrente.#numeroDeContas++;
    }

    static get numeroDeContas() {
        return ContaCorrente.#numeroDeContas;
    }

    get tipoConta() {
        return "conta corrente";
    }

    sacar(valor) {
        const taxaSaque = 0.1;
        return super.sacar(valor, taxaSaque);
    }
}