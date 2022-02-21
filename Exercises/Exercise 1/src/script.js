let devisibleBy3 = []

for(let i = 3; i<=1000; i+=3) {
    devisibleBy3.push(i)
}

console.log(devisibleBy3)

let devisibleBy4 = []

for(let i = 4; i<=1000; i+=4) {
    devisibleBy4.push(i)
}

console.log(devisibleBy4)

let contains1 = []

for(let i = 1; i<=1000; i++) {
    let temp = i
    while(temp > 0) {
        let part = temp%10
        if(part === 1) {
            contains1.push(i)
            break;
        }
        temp = (temp-part)/10
    }
}

console.log(contains1)