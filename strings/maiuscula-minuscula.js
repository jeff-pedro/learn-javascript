const assert = require('assert');

assert.equal(
    '=i s2 u='.toUpperCase(),
    '=I S2 U='
);

assert.equal(
    'ΑΒΓ'.toLowerCase(),
    'αβγ'
);
