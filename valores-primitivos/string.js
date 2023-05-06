/// Exemplos de Strings
const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhaSuperSegura123!";
const stringDeNumeros = "34567";
const encadeandoAspas = '...encadeando "assim!"';


/// Concatenação (+)
const meuNome = "Jefferson";
const msg = "Meu nome é: ";
//console.log(msg + meuNome);


/// Template string OU template literal
const apelido = "Jeff";
const msg2 = `Mas pode me chamar de ${apelido}`
//console.log(msg2);


/// Unicode (transformação/conversão)
const cifrao = '\u0024';
const aMaiusculo = '\u0041'; // caracter de escape => \u
const tique = '\u2705';
const hirana = '\u3041';
//console.log(cifrao, aMaiusculo, tique, hirana);


/// *** Métodos e Propriedade para manipulação de strings ***

console.log('São Paulo'.toLowerCase());
console.log('Black Panther'.toUpperCase()); // <--metódo
console.log('Meu nome possuo ' + 'jefferson'.length + ' letras'); // <--propriedade

const meuSobrenome = "Santos"
console.log(meuSobrenome.substring(0,3)); // extrai parte do texto
console.log(meuSobrenome.indexOf('t')); // retorna posição da primeira ocorrência

console.log('cat'.charAt(1), 'cat'[1]); // maneiras de acessar caracteres individual

let a = "a"; let b = "b";
console.log( a < b); // compara strings

// string primitiva vs string objeto
let string_primitiva = "foo";
let outra_string_primitiva = String("foo");
let string_objeto = new String(string_primitiva);

console.log(typeof string_primitiva);
console.log(typeof outra_string_primitiva);
console.log(typeof string_objeto);
 
let valor_primitivo = "2 + 2";
let valor_objeto = new String("2 + 2");
console.log(eval(valor_primitivo)); // tratado como 'código fonte'
console.log(eval(valor_objeto)); // tratado como qualquer objeto
console.log(eval(valor_objeto.valueOf())); // chamando o .valueOf o objeto é convertido em valor primitivo
