const assert = require("assert");

/* 
    Trythy e Falsy: são valores que fazem papel de true ou false
*/


const obj = {};
const func = () => {};
obj.nullProp = null;
obj.undefProp = undefined;

/* Falsy */
assert.deepEqual(Boolean(undefined), false);
assert.deepEqual(Boolean(null), false);
assert.deepEqual(Boolean(''), false);
assert.deepEqual(Boolean(0), false);
assert.deepEqual(Boolean(0n), false);
assert.deepEqual(Boolean(obj.prop), false);
assert.deepEqual(Boolean(obj.nullProp), false);
assert.deepEqual(Boolean(obj.undefProp), false);
assert.deepEqual(Boolean(func()), false);


obj.prop = 'valor'

/* Truthy */
assert.deepEqual(Boolean(1), true);
assert.deepEqual(Boolean('algo'), true);
assert.deepEqual(Boolean({}), true);
assert.deepEqual(Boolean([]), true);
assert.deepEqual(Boolean(obj.prop), true);


// Verificando se é truthy ou falsy

const x = 'valor';
assert.equal(x ? 'truthy' : 'falsy', 'truthy')


/*  Caso de uso: verificar se parâmetro foi passado para a função */

function verificaParametro(x) {
    if (!x) {
        throw new Error('Está faltando parâmetro');
    }
}

assert.throws(() => verificaParametro(), {
    message: 'Está faltando parâmetro'
});


/*  Caso de uso: verificar se propriedade do objeto existe */

function verificaPropriedade(x) {
    if (x === undefined) {
        throw new Error('Propriedade não existe');
    }
}

delete obj.prop;

assert.throws(() => verificaPropriedade(obj.prop), {
    message: 'Propriedade não existe'
});