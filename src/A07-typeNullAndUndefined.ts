export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwoString === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoString * 100);
}

console.log(squareOfTwoNumber);
