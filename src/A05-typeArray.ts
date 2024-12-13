/* The ...args operator in TypeScript is used to capture a variable number of arguments passed to a function.
 It is called the rest operator and allows you to work with dynamic arguments more conveniently. 
 It is useful for scenarios where the number of parameters is not fixed. */

/* Array<type> or type[] */

function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaString('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c', 'd');

console.log(result);
console.log(concatenacao);
console.log(upper);
