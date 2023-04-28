import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("bruno",11122233309);



const conta1 = new ContaCorrente(cliente1,1001);
conta1.depositar(500)

console.log(conta1);
console.log(conta1.saldo);

const contaPoupanca = new ContaPoupanca(50,cliente1,1001);

console.log(ContaCorrente);
console.log(contaPoupanca);

