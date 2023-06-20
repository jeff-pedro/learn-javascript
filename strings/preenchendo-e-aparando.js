const assert = require('assert');

// Preenche espaços vázios (pad)
assert.equal(
    '7'.padStart(3, '0'),
    '007'
);

assert.equal(
    'yes'.padEnd(6, '!'),
    'yes!!!'
);


// Remove espaços vazios (trim)
assert.equal(
    '\t abc\n '.trim(),
    'abc'
);

assert.equal(
    '\t abc\n '.trimStart(),
    'abc\n '
);

assert.equal(
    '\t abc\n '.trimEnd(),
    '\t abc'
);
