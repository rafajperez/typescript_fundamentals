/*In TypeScript, a tuple is a special type of array that allows you to parse arrays with multiple data types,
when the order in which the data is indexed is important. 
Tuples are immutable data structures, meaning they cannot be changed after they are created. They are similar to arrays, 
but the main difference is that in arrays, we only work with one type of data, 
while in tuples we can work with different types. 
Tuples are useful for connecting data, and can help make code more secure and well-structured. */

//Type Tuple
const dadosCliente1: readonly [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string] = [1, 'Rafael', 'Perez'];
const dadosCliente3: [number, string, string?] = [1, 'Rafael']; //string? return one string or undefined//
const dadosCliente4: [number, string, ...string[]] = [1, 'Rafael', 'Perez'];

//dadosCliente1[0] = 100;      its return error TS2540: Cannot assign to '0' because it is a read-only property.
dadosCliente2[1] = 'Carlos';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

//Type readonly

const array1: readonly string[] = ['Rafael', 'Perez'];
const array2: ReadonlyArray<string> = ['Rafael', 'Perez'];

console.log(array1);
console.log(array2);
