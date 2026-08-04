class Cliente {
    nome;
    cpf;
    rg;
}
class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return valor;
        }
        return 0;
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this.saldo += valor;
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
contaCorrenteMarcelo.saldo = 0;
contaCorrenteMarcelo.agencia = 1001;

console.log(contaCorrenteMarcelo.saldo);
contaCorrenteMarcelo.depositar(100);
console.log(contaCorrenteMarcelo.saldo);
contaCorrenteMarcelo.sacar(50);
console.log(contaCorrenteMarcelo.saldo);

console.log(cliente1);
console.log(cliente2);
