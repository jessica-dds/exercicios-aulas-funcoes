let pessoaObj = {
    nome: "João",
    idade: 12,
    altura: 1.4,
    profissão: "estudante"
}

function apresentar(pessoa) {
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, tenho ${pessoa.altura}m e sou ${pessoa.profissão}.`)
}

apresentar(pessoaObj);