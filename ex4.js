function determinarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "Jovem";
    } else if (idade < 66) {
        return "Adulto";
    } else {
        return "Idoso(a)";
    }
}

function apresentar(pessoa) {

    const faixaEtaria = determinarFaixaEtaria(pessoa.idade);

    console.log(`Meu nome é ${pessoa.nome}, sou um(a) ${faixaEtaria} de ${pessoa.idade} anos e sou ${pessoa.profissao}.`)
}

const pessoa1 = {
    nome: "Jéssica",
    idade: 35,
    profissao: "professora"
}

apresentar(pessoa1);