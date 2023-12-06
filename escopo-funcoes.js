// declarado fora da função  = acesso dentro da função
// declarado dentro função = não acesso fora da função

let z = 5;

function soma(x, y) {
    return x + y + z;
}

console.log(soma(5, 3));