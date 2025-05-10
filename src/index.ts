let a: number = 20;
if (a < 30) {
    console.log(true);
}
//! Compile this file use:
//TODO: tsc filename.ts
//* You will get js file but it's support ES5

//! If you want to use Above ES6 Features then create below file
//? We have to create tsconfig.json for this
//TODO: tsc --init
//TODO: Edit this in below file

/*
"target": "es2016", // you can as you want
"rootDir": "./src", // create root dir src and add path in this line
"outDir": "./dist", // whatever js file created with ts this will dump here
"sourceMap": true, // this is the mapping file
"removeComments": true, // in js file if you don't want any comments then use this
*/
