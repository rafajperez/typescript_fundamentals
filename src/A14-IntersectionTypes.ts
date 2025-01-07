/* 
In TypeScript, "type extension" (or "type extension") refers to the ability to create new types based on existing types
by adding or modifying properties.
This allows for efficient code reuse and the creation of more specific and complex types.
*/

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = {
  nome: 'Rafael',
  sobrenome: 'Perez',
  idade: 39,
};

console.log(pessoa);
