/* Hello, welcome, here i explaining and passing on everything I am studying, so let´s go:
In ts in the first place, we install and config your ts and your compiler tsc

1° install typescript in dependency or global mode, 
in this case i'm preffer in dependency mode, so i run the code "npx i typescript -D"


2° in tsconfig.json in Basic Operations we can set "target" with es5 or es2016, es5 is most used and es2016 is most recent

3° in "lib" we pass what is in our project, so i passed: "lib": ["ESNext","DOM"], 

4° We will create the folder where we will make the compilation files available, so in "outDir" we setting for "./dist"
stay like this: "outDir": "./dist", we will create one folder called "src"

then configuring our dist folder, it will clone the structure we create in src to the dist folder
in the final of compilerOptions we will create the input folder: 
},
  "include": ["./src"]
}

And to test we give the command npx tsc, then we will have everything that is inside src,
in our dist folder which will be the production folder
Attention: we will not touch the dist folder, we will just compile and recompile normally.
*/

/* install eslint: npm install --save-dev eslint @eslint/js typescript typescript-eslint and create eslint.config.mjs and add: 
// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
);
*/
