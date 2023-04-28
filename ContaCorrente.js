import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numContas = 0;
    agencia;
    
    cliente;
    #saldo = 0;

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this.cliente = novoValor;
        }

    }
    get cliente() {
        return this.cliente;
    }

    get saldo(){
        return this.#saldo;
    }

    constructor(cliente , agencia){
        this.agencia = agencia;
        this.cliente= cliente;
        ContaCorrente.numContas += 1;
    }

    sacar(valor){
        if(valor <= this.#saldo){
            this.#saldo -= valor;
            console.log(this.#saldo);
            return valor;
        }
    }

    depositar(valor){
        if(valor > 0){
            this.#saldo += valor;
            console.log(this.#saldo)
        }       
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }

    
}