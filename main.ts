function multiplicar (a: number, b: number): number {
    return a * b;
}

function saudar(nome: string): string {
    return "Olá " + nome;
}

const resultadoMultiplicacao = multiplicar(3, 4); 
const saudacao = saudar("Caio");

console.log(resultadoMultiplicacao);
console.log(saudacao);