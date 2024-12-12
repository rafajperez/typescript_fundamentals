/* Void indicates that the function does not return anything */

function semRetorno(...args: string[]): void {
  console.log(args.join(''));
}
const pessoa = {};

const pessoa2 = {
  nome: 'Luiz',
  sobrenome: 'Otavio',

  exibirNome(): void {
    console.log(this.nome + '' + this.sobrenome);
  },
};

semRetorno('Luiz', 'Otavio');
pessoa2.exibirNome();
export { pessoa };
