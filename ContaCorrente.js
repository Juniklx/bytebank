import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static #numeroDeContas = 0; // campo estático
    constructor(agencia, cliente, saldo) {
        super()
    }
}
