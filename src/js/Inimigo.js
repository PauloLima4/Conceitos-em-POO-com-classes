class Inimigo extends Personagem {
    constructor(nome) {
        super(nome, 120, 15);
    } 

    atacar(mago, guerreiro) {
        super.atacar(mago, guerreiro);
        console.log(`${this._nome} usou um ataque das trevas!`);
    }
}