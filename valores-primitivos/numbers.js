const assert = require("assert");

/* 
    Convertendo valores Numéricos

    * via Number(value)
    * via +value
    * via parseFloat(value) // evitar
*/

assert.equal(Number(123), 123);
// Strigs numéricos
assert.equal(Number('123'), 123);
// String vazias
assert.equal(Number(''), 0);
// String com espaço em branco
assert.equal(Number('\n 123.456 \t'), 123.456);
// Nulo
assert.equal(Number(null), 0);
// Booleano
assert.equal(Number(true), 1);
// BigInt
assert.equal(Number(-1n), -1);
// Objetos
assert.equal(Number({ valueOf() { return 1 } }), 1);
// Hexadecimal para inteiro
assert.equal(Number('0xFF'), 255);
// Binario para inteiro
assert.equal(Number('0b111'), 7);


/* Não converte */

// String com não digitos
assert.equal(Number('456#'), NaN);
// Undefined
assert.equal(Number(undefined), NaN);
// Symbols não funcionam
assert.throws(() => Number(Symbol("1")), "TypeError");

