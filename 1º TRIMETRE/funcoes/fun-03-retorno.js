// funcoe de retrno exigem o termo 'return'
// permitem tornar disponiveis os dados processados
// reaoprovitamento e ações sequenciais
// podemos  armazenar as funções de  retorno 
// a variaveis, funções, arrays, etc.

function meuSalario(salario) {
    const contaluz = 145.0
    const aluguel = 1350.0
    const restoSalario = salario - (contaluz+aluguel)
    console.log(restoSalario) // não serve p/ usuário 
    return `o resto do seu salario é R$ ${restoSalario.toFixed(2). replace(".",",")}`
}
const resto = meuSalario(22000.0)
console.log(resto)