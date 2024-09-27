class Personagem {
    constructor(nome, vida, ataque) {
        this._nome = nome;
        this._vida = vida;
        this._ataque = ataque;
    }

    get nome() {
        return this._nome;
    }

    get vida() {
        return this._vida;
    }

    set vida(valor) {
        this._vida = valor;
    }

    atacar(inimigo) {
        inimigo.vida -= this._ataque;
        console.log(`${this._nome} atacou ${inimigo.nome} causando ${this._ataque} de dano.`);
    }
}