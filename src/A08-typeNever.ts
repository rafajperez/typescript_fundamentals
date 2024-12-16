/*type never is a type that says that the function will not return anything,  
 it is only used to return errors or infinite loop */

export function makeError(): never {
  throw new Error('Error qualquer');
}

makeError();
