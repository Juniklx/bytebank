import { Cliente } from "../Cliente.js";

// Classe abstrata
export class Conta {
    #agencia; // campo privado
    #cliente; // campo privado
    #saldo; // campo privado

    constructor(agencia, cliente, saldo) {
        if (this.constructor === Conta) {
            throw new Error("Você não deve instanciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata.")
        }

        this.#agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this.#cliente = novoValor;
        } else {
            console.log("O valor passado não é uma instância de Cliente.");
        }
    }

    get tipoConta() {
        return "conta";
    }

    get agencia() {
        return this.#agencia;
    }

    get cliente() {
        return this.#cliente;
    }

    get saldo() {
        return this.#saldo;
    }

    static formatarMoeda(valor) {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }

    sacar(valor, taxaSaque = 0) {
    const valorComTaxa = valor * (1 + taxaSaque);
    const valorTaxa = valorComTaxa - valor;

    if (valor > 0 && valorComTaxa <= this.#saldo) {
        this.#saldo -= valorComTaxa;
        const mensagemTaxa =
            taxaSaque > 0
                ? ` + taxa de ${taxaSaque * 100}% (${Conta.formatarMoeda(valorTaxa)})`
                : "";
        console.log(
            `Sacando ${Conta.formatarMoeda(valor)}${mensagemTaxa} da ${this.tipoConta} de ${this.cliente.nome}.`,
        );
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

    exibirSaldo() {
        console.log(
            `Saldo da ${this.tipoConta} de ${this.cliente.nome}: ${Conta.formatarMoeda(this.saldo)}`,
        );
    }

    transferir(valor, conta) {
        if (valor > 0 && valor <= this.#saldo) {
            // sacar() já pode aplicar taxa (via sobrescrita nas subclasses), então só
            // confirmamos a transferência depois de saber que o saque realmente aconteceu
            const valorSacado = this.sacar(valor);
            if (valorSacado) {
                console.log(
                    `Transferindo ${Conta.formatarMoeda(valorSacado)} da conta de ${this.#cliente.nome} para a conta de ${conta.cliente.nome}.`,
                );
                conta.depositar(valorSacado);
            }
        } else if (valor - this.#saldo > 0) {
            console.log(
                `${this.#cliente.nome} não possui saldo suficiente para transferência.`,
            );
        } else {
            console.log("Valor inválido para transferência.");
        }
    }
}


