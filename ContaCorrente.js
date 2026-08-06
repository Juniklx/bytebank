import { Cliente } from "./Cliente.js";
export class ContaCorrente {
    agencia;
    _cliente; // private field

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        } else {
            console.log("O valor passado não é uma instância de Cliente.");
        }
    }

    get cliente() {
        return this._cliente;
    }


    _saldo = 0; // private field

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        if (valor > 0 && valor <= this._saldo) {
            this._saldo -= valor;
            return valor;
        } else {
            console.log("Valor inválido para saque.");
            return;
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
        } else {
            console.log("Valor inválido para depósito.");
        }
    }

    transferir(valor, conta) {
        if (valor > 0 && valor <= this._saldo) {
            console.log(
                `Transferindo ${valor} da conta de ${this._cliente.nome} para a conta de ${conta._cliente.nome}.`,
            );
            const valorSacado = this.sacar(valor);
            conta.depositar(valorSacado);
        } else if (valor - this._saldo > 0) {
            console.log(
                `${this._cliente.nome} não possui saldo suficiente para transferência.`,
            );
        } else {
            console.log("Valor inválido para transferência.");
        }
    }

}
