// TASK 3
console.log('==============TASK 3=================')
let firstNameArr = ['Lee', 'Kye', 'Demi', 'John', "Bruce"]
let lastNameArr = ['Coleman', 'Brown', 'Mcgee', 'Dominguez', "Hoffman"]

for(let i=0; i < firstNameArr.length; i++) {
    ((first, last)=> {
        console.log(`Full Name: ${first} ${last}`)
    })(firstNameArr[i], lastNameArr[i])
}


// TASK 4
console.log('==============TASK 4=================')

const factoriel = num => {
    if (num == 1) {
        return 1
    }
    return num * factoriel(num - 1)
}

for(let i = 1; i <= 10; i++) {
    console.log(`${i}! = ${factoriel(i)}`)
}