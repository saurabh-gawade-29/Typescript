//! As we know we can create array with diff DT
//* let numbers = [1,2,3,4,5]; now this assume like default DT is number coz all element is number DT
//* let numbers = [1,2,3,4,'5']; now String or Number because contains both
//* let numbers: number[] = [1,2,3,4,'5']; this will give you a error because contains mix DT and we explictly declare DT

let numbers: number[] = [1, 2, 3, 4, 5];
numbers.forEach((element) => {
    return element;
})

console.log(numbers);