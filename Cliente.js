export class Cliente {
    #nome; // campo privado
    #cpf; // campo privado

    get nome() {
        return this.#nome;
    }

    get cpf() {
        return this.#cpf;
    }
    
    constructor(nome, cpf) {
        this.#cpf = cpf;
        this.#nome = nome;
    }
}
