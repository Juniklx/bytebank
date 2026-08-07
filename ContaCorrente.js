import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    #cliente; // private field
    #saldo = 0; // private field

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this.#cliente = novoValor;
        } else {
            console.log("O valor passado não é uma instância de Cliente.");
        }
    }

    get cliente() {
        return this.#cliente;
    }

    get saldo() {
        return this.#saldo;
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
    }

    static formatarMoeda(valor) {
            return valor.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            });
        }

    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
            return valor;
        } else {
            console.log("Valor inválido para saque.");
            return;
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        } else {
            console.log("Valor inválido para depósito.");
        }
    }

    transferir(valor, conta) {
        if (valor > 0 && valor <= this.#saldo) {
            console.log(
                `Transferindo ${ContaCorrente.formatarMoeda(valor)} da conta de ${this.#cliente.nome} para a conta de ${conta.#cliente.nome}.`,
            );
            const valorSacado = this.sacar(valor);
            conta.depositar(valorSacado);
        } else if (valor - this.#saldo > 0) {
            console.log(
                `${this.#cliente.nome} não possui saldo suficiente para transferência.`,
            );
        } else {
            console.log("Valor inválido para transferência.");
        }
    }

    
}
