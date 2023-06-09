export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
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
        let taxa = 1;
        const valorSacado = taxa * valor;
        if(valorSacado <= this._saldo){
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }

    depositar(valor){
            this._saldo += valor;    
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }
}