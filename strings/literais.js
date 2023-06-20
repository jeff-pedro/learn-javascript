const assert = require('assert');

// Strings literais
const str1 = 'Não diga, "adeus"';
const str2 = "Não diga, \"adeus\"";


// Template literal
assert.equal(
    `Tão fácil como ${123}!`,
    'Tão fácil como 123!'
);


// String raw tagged template
assert.equal(
    String.raw`\ \n \t`, // caracter especial é tratado como texto normal
    '\\ \\n \\t'
);
