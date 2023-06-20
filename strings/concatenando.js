const assert = require('assert');

// concatenando string literais 
assert.equal(
    'Eu comprei ' + 3 + ' laranjas',
    'Eu comprei 3 laranjas'
);

// concatenando strings em variáveis
let str = '';
str += 'Eu comprei ';
str += '3';
str += ' laranjas';
assert.equal(
    str,
    'Eu comprei 3 laranjas'
);

// interpolado com Template String
const str2 = 'tudo';
assert.equal(
    `Agora está ${str2} grudadinho!`,
    'Agora está tudo grudadinho!'
);

// concatenando com o médodo concat
assert.equal(
    'ab'.concat('c'), 'abc'
);
