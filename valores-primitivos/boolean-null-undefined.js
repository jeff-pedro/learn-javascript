const assert = require("assert");

/* 
    undefined:
        - variável declarada mas que não tem valor atribuído
        - ausência de valor em variável NÃO inicializada
        - função sem clausula 'return'.

    null:
        - tipo de dado que represensa vazio
        - ausência de valor em variável inicializada.
*/

let varUndefined; 
let varNull = null; 

assert.equal(varUndefined, undefined)
assert.equal(varNull, null)

assert.equal(typeof varNull, 'object');
/* 
    "null" é um objeto
    Uma anedoda do javascript: bug da linguagem javascript que não será corrigido, pois quebrará códigos existentes
    Na prática, não tem problema, então segue a vida 8)
*/ 