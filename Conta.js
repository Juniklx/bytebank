export class Conta {
    #agencia; // campo privado
    #cliente; // campo privado
    #saldo; // campo privado
    #taxaSaque = 0; // campo privado

    constructor(agencia, cliente, saldo, taxaSaque = 0) {
        this.#agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
        this.#taxaSaque = taxaSaque
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

    get taxaSaque() {
        return this.#taxaSaque;
    }

    set saldo(valor) {
        this.#saldo = valor;
    }


    static formatarMoeda(valor) {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }

    sacar(valor) {
        const valorComTaxa = valor * (1 + this.taxaSaque);
        const valorTaxa = valorComTaxa - valor;

        if (valor > 0 && valorComTaxa <= this.saldo) {
            this.saldo -= valorComTaxa;
            const mensagemTaxa =
                this.taxaSaque > 0
                    ? ` + taxa de ${this.taxaSaque * 100}% (${Conta.formatarMoeda(valorTaxa)})`
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

    transferir(valor, conta) {
        if (valor > 0 && valor <= this.#saldo) {
            console.log(
                `Transferindo ${Conta.formatarMoeda(valor)} da conta de ${this.#cliente.nome} para a conta de ${conta.cliente.nome}.`,
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
