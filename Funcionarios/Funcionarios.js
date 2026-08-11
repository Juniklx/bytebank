

export class Funcionario {
    #nome; // campo privado 
    #salario; // campo privado
    #cpf; // campo privado
    #bonificacao; // campo privado
    #senha; // campo privado

    constructor (nome, salario, cpf) {
        this.#nome = nome;
        this.#salario = salario;
        this.#cpf = cpf;
        this.#bonificacao = 1;
    }

    get nome() {
        return this.#nome;
    }

    get cpf() {
        return this.#cpf;
    }

    get bonificacao() {
        return this.#bonificacao
    }

    set bonificacao(novoValor) {
        if (typeof novoValor === "number" && novoValor >= 0) {
            this.#bonificacao = novoValor;
        } else {
            console.log("Valor de bonificação inválido.");
        }
    }
    
    autenticar(senha) {
        return senha === this.#senha
    }

    cadastrarSenha(senha) {
        this.#senha = senha;
    }
}