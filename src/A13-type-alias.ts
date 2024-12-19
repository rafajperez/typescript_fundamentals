/*In TypeScript, a type alias is a way to create an alternative name for an existing type, or for combinations of types. */

type Pessoa = {
  nome: string;
  idade: number;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

/*Type alias are useful for:

Simplifying the reading and maintenance of code
Avoiding the repetition of complex types
Making code more readable and understandable */

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Luiz',
  salario: 200.0,
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Vermelho'));
