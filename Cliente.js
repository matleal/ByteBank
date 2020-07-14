export class Cliente {
    get cpf(){
        return this._cpf;
    }

    //So vai alterar esses atributos em tempo de construcao
    constructor(nome, cpf, senha){
       this.nome = nome;
       this._cpf = cpf;
       this._senha = senha;
    }

    autenticar(){
        return true;
    }

}