const value1 = true
const value2 = false

console.log(value1 === value2)

// Thruty / Falsy -> Variáveis vazias ou com valor 0, se submeter a um teste lógico,
// se tornarão um tipo boolean (thruty, falsy)

// Teste lógico 1
if (value1) {
    console.log('Verdadeiro')
} else {
    console.log('Falso')
}

// Teste lógico 2
if (value1) console.log('Verdadeiro')

// Operador Ternário
const resultado = value1 ? 'Verdadeiro' : 'False'