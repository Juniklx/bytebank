export class Cliente {
    #nome; // campo privado
    #cpf; // campo privado
    #senha; // campo privado

    get nome() {
        return this.#nome;
    }

    get cpf() {
        return this.#cpf;
    }
    
    constructor(nome, cpf, senha) {
        this.#cpf = cpf;
        this.#nome = nome;
        this.#senha = senha;
    }

    autenticar(senha) {
        return senha === this.#senha;
    }
}
