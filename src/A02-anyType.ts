/* The "any" type is a typing that assumes any value and we don't want that, as it leaves room for several errors.*/

function showMessage(msg: string) {
  return msg;
}

/* above we have an exemple of an untype function, 
unless we want to pass something without a type, for exemple: */

function showMessage2(msg: any) {
  return msg;
}

console.log(showMessage2([1, 2, 3]));
console.log(showMessage('olá'));
