//! Enums
// const small = 1;
// const medium = 2;
// const large = 3;

// Pascal Case
//! this will give function like Immediately Invoked Function Expression (IIFE),
// enum Size { Small = 1, Medium, Large }
//! if you want optimize code then use below code
const enum Size { Small = 1, Medium, Large }
let mySize: Size = Size.Medium; // Small = 1  this is initializer
console.log(mySize);

