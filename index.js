import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("bruno",11122233309);
const cliente2 = new Cliente("alice",88822233309);


const contaCorrenteBruno = new ContaCorrente(cliente1,1001);
contaCorrenteBruno.depositar(500)
const conta2 = new ContaCorrente(cliente2,102);


contaCorrenteBruno.transferir(200,conta2)

console.log(contaCorrenteBruno);
console.log(contaCorrenteBruno.saldo);

console.log(ContaCorrente);

console.log(conta2);
console.log(conta2.saldo);
