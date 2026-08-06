import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const clienteMarcelo = new Cliente();
clienteMarcelo.nome = "Marcelo";
clienteMarcelo.cpf = "11122233309";
const contaCorrenteMarcelo = new ContaCorrente();
contaCorrenteMarcelo.cliente = clienteMarcelo;
contaCorrenteMarcelo.agencia = 1001;
contaCorrenteMarcelo.depositar(100);
// contaCorrenteMarcelo.saldo = 30000; // This line will not work as intended because saldo is a getter and does not have a setter.

const clienteDiana = new Cliente();
clienteDiana.nome = "Diana";
clienteDiana.cpf = "22233344408";
const contaCorrenteDiana = new ContaCorrente();
contaCorrenteDiana.cliente = clienteDiana;
contaCorrenteDiana.agencia = 1001;
contaCorrenteDiana.depositar(200);
// contaCorrenteDiana.saldo = 3000; // This line will not work as intended because saldo is a getter and does not have a setter.

contaCorrenteDiana.transferir(100, contaCorrenteMarcelo);
console.log(`${clienteMarcelo.nome}: ${contaCorrenteMarcelo.saldo}`);
console.log(`${clienteDiana.nome}: ${contaCorrenteDiana.saldo}`);