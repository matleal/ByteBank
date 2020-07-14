//Classe abstrata, ou seja, ela so funciona para ser herdada
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Voce nao deveria instanciar um objeto do tipo conta diretamente, pois esse e uma classe abstrata.");
        }
        
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;  
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }

    }

    get cliente() {
        return this._cliente
    }

    get saldo(){
        return this._saldo
    }

    //Metodo abstrato, ou seja, eu sempre tenho que sobreescrever ele 
    sacar(valor){
        throw new Error("O metodo Sacar da conta e abstrato");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar (valor)
        conta.depositar(valorSacado);
    }
}