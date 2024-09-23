class Mago extends Personagem {
    constructor(nome) {
        super(nome, 80, 15);
    }

    atacar(inimigo) {
        super.atacar(inimigo);
        console.log(`${this._nome} lançou uma bola de fogo!`);
    }
}