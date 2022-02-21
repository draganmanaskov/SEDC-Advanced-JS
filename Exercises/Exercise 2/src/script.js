let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

function leaveOnlyString(myArray) {
    let tempArr = []
    for(let item of myArray) {
        if(typeof item === "string" && item) {
            tempArr.push(item)
        }
    }
    return tempArr
}

let onlyStrArr = leaveOnlyString(test);

console.log(onlyStrArr) 

function leaveOnlyNumbers(myArray) {
    let tempArr = []
    for(let item of myArray) {
        if(typeof item === "number" && !isNaN(item)) {
            tempArr.push(item)
        }
    }
    return tempArr
}

let onlyNumberArr = leaveOnlyNumbers(test);

console.log(onlyNumberArr) 