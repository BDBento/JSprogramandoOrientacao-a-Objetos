import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numContas = 0;

    constructor(cliente , agencia){
        this.agencia = agencia;
        this._cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numContas += 1;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }
    get cliente() {
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        if(valor <= this._saldo){
            this._saldo -= valor;
            console.log(this._saldo);
            return valor;
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            console.log(this._saldo)
        }       
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }

    
}