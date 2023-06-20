const assert = require('assert')

// Convertendo valores com objeto global String
assert.equal(String(undefined), 'undefined');
assert.equal(String(null), 'null');
assert.equal(String(123.45), '123.45');
assert.equal(String(true), 'true');

assert.equal(
    typeof String(256),
    'string'
 );


// Convertendo valores com o método toString
const num = 123;
assert.equal(
    typeof num.toString(),
    'string'
);
