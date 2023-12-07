const pessoa1 = {
    nome: "Jéssica",
    idade: 35,
    profissao: "professora",
    apresentar: function () { //método
        const faixaEtaria = this.determinarFaixaEtaria(this.idade);

        console.log(`Meu nome é ${this.nome}, sou um(a) ${faixaEtaria} de ${this.idade} anos e sou ${this.profissao}.`)
    },
    determinarFaixaEtaria: function () {
        if (this.idade <= 21) {
            return "jovem";
        } else if (this.idade < 66) {
            return "adulto";
        } else {
            return "idoso(a)";
        }
    }
}

pessoa1.apresentar();
console.log(pessoa1.determinarFaixaEtaria());
