const test = require("node:test");
const assert = require("node:assert");

const baseConverter = require("./baseConverter");

test("converte decimal 10 para o valor binário 1010", () => {
    assert.strictEqual(baseConverter(10, 2), "1010");
});

test("converte decimal 256 para o valor hexadecimal 0x100", () => {
    assert.strictEqual(baseConverter(256, 16), "0x100");
});

test("converte decimal 123 para o valor octogonal 0x173", () => {
    assert.strictEqual(baseConverter(123, 8), "0o173");
});
