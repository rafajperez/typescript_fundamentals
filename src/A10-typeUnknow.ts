/* type unknow is a safer way than using type any */

let x: unknown;

x = '100';
x = 'Luiz';
x = 900;

const y = 800;

if (typeof x === 'number') console.log(x + y);
