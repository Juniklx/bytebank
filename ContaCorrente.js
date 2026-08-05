export class ContaCorrente {
    agencia;
    cliente;

    // #saldo; // private field
    _saldo = 0;


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
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        }   
    }
    