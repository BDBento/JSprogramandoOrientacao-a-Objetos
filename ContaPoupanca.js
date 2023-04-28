export class ContaPoupanca{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
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