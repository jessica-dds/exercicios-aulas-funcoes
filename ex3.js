// 21 anos ou menos = jovem
// 22 a 65 = adulto
// 66 ou mais anos = idoso(a)

function determinarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "Jovem";
    } else if (idade < 66) {
        return "Adulto";
    } else {
        return "Idoso(a)";
    }
}

const valorRetornadoDaFuncao = determinarFaixaEtaria(68);
console.log(valorRetornadoDaFuncao);