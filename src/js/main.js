const guerreiro = new Guerreiro('Tripa seca');
const mago = new Mago('Maria Vesga');
const inimigo = new Inimigo('Cheiroso');

document.getElementById('character-info').innerText = `Guerreiro: ${guerreiro.nome} (Vida: ${guerreiro.vida})\nMago: ${mago.nome} (Vida: ${mago.vida})\nInimigo: ${inimigo.nome} (Vida: ${inimigo.vida})`;

document.getElementById('attack-btn').addEventListener('click', () => {
    guerreiro.atacar(inimigo);
    mago.atacar(inimigo);
    inimigo.atacar(guerreiro);
    inimigo.atacar(mago);
    document.getElementById('character-info').innerText = `Guerreiro: ${guerreiro.nome} (Vida: ${guerreiro.vida})\nMago: ${mago.nome} (Vida: ${mago.vida})\nInimigo: ${inimigo.nome} (Vida: ${inimigo.vida})`;
});
