import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Marcelo", "111.222.333-09");
const cliente2 = new Cliente("Diana", "222.333.444-08");


const contaCorrenteMarcelo = new Conta(1001, cliente1, 0);

const contaPoupancaMarcelo = new Conta(1001, cliente1, 0);


console.log(`Saldo da conta corrente de ${cliente1.nome}: ${Conta.formatarMoeda(contaCorrenteMarcelo.saldo)}`);

console.log(`Saldo da conta poupança de ${cliente1.nome}: ${Conta.formatarMoeda(contaPoupancaMarcelo.saldo)}`);


