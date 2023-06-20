const assert = require('assert');

// Copiando partes de uma strings (substring)

const str = 'abc';

assert.equal(
    str[2], 'c' // não é permitido índice negativo
);
assert.equal(
    str.at(-1), 'c' // índice negativo permitido 
);
assert.equal(
    'abc'.slice(0, 2), 'ab' // copia mais de um caracter
);

assert.equal(
    'abc'.substring(0, 2), 'ab' // resultado igual ao de cima
);
