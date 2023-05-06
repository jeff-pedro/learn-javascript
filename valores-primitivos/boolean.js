const assert = require("assert");

/* 
    Convertendo valores Booleanos
*/

let x = 'true'

// coerção com objeto Boolean(x)
assert.equal(Boolean(x), true);

// operador condicional
assert.equal((x ?  true : false), true);

// operado de negaçao
assert.equal(!!x, true);