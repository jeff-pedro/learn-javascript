const assert = require('assert');

assert.equal(
    'abca'.includes('a'), true
);

assert.equal(
    'abca'.startsWith('ab'), true
);

assert.equal(
    'abca'.endsWith('ca'), true
);

assert.equal(
    'abca'.indexOf('a'), 0 // primeira ocorrência
);

assert.equal(
    'abca'.lastIndexOf('a'), 3 // última ocorrência
);
