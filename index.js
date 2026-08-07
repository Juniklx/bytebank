import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Marcelo", "111.222.333-09");
const cliente2 = new Cliente("Diana", "222.333.444-08");

const contaCorrente1 = new ContaCorrente(1001, cliente1);
const contaCorrente2 = new ContaCorrente(1001, cliente2);

contaCorrente1.depositar(100);
// contaCorrente1.saldo = 30000; // This line will not work as intended because saldo is a getter and does not have a setter.
contaCorrente2.depositar(200);
// contaCorrente2.saldo = 3000; // This line will not work as intended because saldo is a getter and does not have a setter.

contaCorrente2.transferir(100, contaCorrente1);
console.log(`Saldo da conta de ${cliente1.nome}: ${ContaCorrente.formatarMoeda(contaCorrente1.saldo)}\n`);
console.log(`Saldo da conta de ${cliente2.nome}: ${ContaCorrente.formatarMoeda(contaCorrente2.saldo)}\n`);
console.log(`Número de contas criadas: ${ContaCorrente.numeroDeContas}`);

