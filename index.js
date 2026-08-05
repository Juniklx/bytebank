import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const contaCorrenteMarcelo = new ContaCorrente();
contaCorrenteMarcelo.cliente = new Cliente();
contaCorrenteMarcelo.cliente.nome = "Marcelo";
contaCorrenteMarcelo.cliente.cpf = "11122233309";
contaCorrenteMarcelo.agencia = 1001;
contaCorrenteMarcelo.depositar(100);

const contaCorrenteDiana = new ContaCorrente();
contaCorrenteDiana.cliente = new Cliente();
contaCorrenteDiana.cliente.nome = "Diana";
contaCorrenteDiana.cliente.cpf = "22233344408";
contaCorrenteDiana.agencia = 1001;
contaCorrenteDiana.depositar(200);

console.log(contaCorrenteMarcelo);
console.log(contaCorrenteDiana);