class Cliente {
    nome;
    cpf;
    rg;
}
class ContaCorrente {
    agencia;
    // #saldo; // private field
    _saldo;

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
}

const cliente1 = new Cliente();
cliente1.nome = "Marcelo";
cliente1.cpf = "11122233309";
cliente1.rg = "123456789";

const cliente2 = new Cliente();
cliente2.nome = "Diana";
cliente2.cpf = "22233344408";
cliente2.rg = "987654321";

const contaCorrenteMarcelo = new ContaCorrente();
contaCorrenteMarcelo._saldo = 0;
contaCorrenteMarcelo.agencia = 1001;

contaCorrenteMarcelo.depositar(100);
contaCorrenteMarcelo.sacar(50);

console.log(contaCorrenteMarcelo);