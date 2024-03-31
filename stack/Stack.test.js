const Stack = require("./Stack");
const test = require("node:test");
const assert = require("node:assert");

const stack = new Stack();

/* 
    Testando a classe Stack
*/

test("devolve 'true' se a pilha estiver vazia", () => {
    const isEmpty = stack.isEmpty();
    assert.strictEqual(isEmpty, true);
});

test("adiciona items a pilha", () => {
    stack.push("pitaya", "banana", "uva");
    const isEmpty = stack.isEmpty();
    assert.strictEqual(isEmpty, false);
});

test("remove último elemento da pilha", () => {
    const popped = stack.pop();
    assert.strictEqual(popped, "uva");
});

test("devolve o último elemento da pilha", () => {
    const peeked = stack.peek();
    assert.strictEqual(peeked, "banana");
});

test("devolve o número de elementos na pilha", () => {
    const size = stack.size();
    assert.strictEqual(size, 2);
});

test("exclui todos os elementos da pilha", () => {
    stack.clear();
    const cleaned = stack.isEmpty()
    assert.strictEqual(cleaned, true);
});
