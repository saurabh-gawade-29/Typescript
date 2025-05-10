//! Tuple is regular JS array
//! This is fixed length array
let user: [number, string] = [1, "string"];
//! we can use methods of array for this.
let newUser: any = user.map((ele) => ele + "");
console.log(newUser);

//TODO: Here is another example
let data: [number, string, boolean, any] = [1, "saurabh", true, false];

//! see in above example we declare one tuple
//! Fixed Length and DT
//! We have to fill all element with right DT