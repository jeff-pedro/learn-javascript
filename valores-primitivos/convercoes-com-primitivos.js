const assert = require('assert');

/* Conversão de Valores Primitivos */


/* 
    Conversão Implícita
*/

const numero = 456;
const numeroString = '456';

assert.equal(numero == numeroString, true); // converte em String a variável numérica
assert.equal(numero + numeroString, '456456'); // converte em String e concatena


/* 
    Conversão Explícita

    ex.: Number(), String()...
*/

assert.deepEqual(typeof (numero + Number(numeroString)), 'number'); // String -> Number()


// Numérico para String
let telefone = 12341234;
assert.deepEqual(telefone.toString(), '12341234')


// Booleano para String
let conectado = false;
assert.deepEqual(String(conectado), 'false');


// Booleno para Numérico
let desconectado = true;
assert.deepEqual(Number(desconectado), 1)


// String para Numérico
let largura = '10'; let altura = '5'
assert.deepEqual(Number(largura) * Number(altura), 50)


// String para Numérico: usando +variável para converter
let x = '2'; let y = '6';
assert.deepEqual(+x * +y, 12);

// obs.: não é comum usar o operado '+' para conversões de números


// NaN
let umaString = 'texto';
assert.deepEqual(Number(umaString), NaN)
assert.deepEqual(+umaString, NaN)