const assert = require("node:assert");
const test = require("node:test");

const decimalToBinary = require("./decimalToBinary");

test("converte decimal 10 para o valor binário 1010", () => {
    assert.strictEqual(decimalToBinary(10), "1010");
});

test("converte decimal 6 para o valor binário 110", () => {
    assert.strictEqual(decimalToBinary(6), "110");
});