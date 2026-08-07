export class Cliente {
    #nome;
    #cpf;

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
