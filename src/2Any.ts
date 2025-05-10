let anyCheck;
//! hover on anyCheck: you will see datatype any here
//TODO:
anyCheck = 5;
anyCheck = "youCanChangeDT";
//! But But But, 
//! if you pass data in paratmeter without DT
//! it will give you one error

//* Fix this with (variableName: datatype)
function checkAnyError(anyCheck: any) {
    console.log(anyCheck);
}

// checkAnyError(5)