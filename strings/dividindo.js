const assert = require('assert');

assert.deepEqual(
    'a, b,c'.split(/, ?/), // regex
    ['a', 'b', 'c']
);
