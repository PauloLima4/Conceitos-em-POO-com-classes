class Guerreiro extends Personagem {
    constructor(nome) {
        super(nome, 100, 10);
    }

    atacar(inimigo) {
        super.atacar(inimigo);
        console.log(`${this._nome} usou um ataque especial!`);
    }
}