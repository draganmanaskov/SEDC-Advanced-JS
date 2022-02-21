function Constructor(name, category, hasDiscount, price) {
    this.name = name;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;
}

let categories = ['food', 'clothes', 'shoes', 'appliance']

//generate a random string
let randomName = () => {
    let string = String.fromCharCode(parseInt(Math.random() * 26) + 97).toUpperCase();
    for (let i = 0 ; i <= parseInt(Math.random() * 6) + 3; i++) {
        string += String.fromCharCode(parseInt(Math.random() * 26) + 97);
    }
   return string;
}


let products = []
//create 15 product objects
for(let i = 1; i < 16; i++) {
    products.push(new Constructor(`${randomName()}-${i}`, categories[parseInt(Math.random() * categories.length)], Math.round(Math.random()) == 0, parseInt(Math.random() * 48) + 2))
}


console.log('====== ALL PRODUCTS====')
products.forEach(product => console.log(product.name, product.category, product.hasDiscount, product.price))

console.log('========== PRICE GREATER THAN 20 ==========')
let priceGreaterThan20 = products.filter(product => product.price > 20);
console.log(priceGreaterThan20)

console.log('========== Category Food with discount ==========')
let foodWithDiscount = products.filter(product => product.category == "food" && product.hasDiscount == true)
console.log(foodWithDiscount)

console.log('========== average price on discount ==========')
let productPriceOnDiscount = products.filter( product => product.hasDiscount == true).map( product => product.price) 
// all prices with a discount
console.log(productPriceOnDiscount)
// avarage of the prices
console.log(productPriceOnDiscount.reduce((sum, price) => sum += price, 0) / productPriceOnDiscount.length)

console.log('========== starting with a vowel not on discount ==========')
let isVowel = char => {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())
}

let startingVowel = products.filter(product => product.hasDiscount == false).filter(product => !isVowel(product.name[0]))
console.log(startingVowel)

console.log('==========  ascending ==========')
//new array with spread operator
let arrWithSpread = [...products].sort((product1, product2) => product1.price -product2.price)
//new array with map
let arrWithMap = products.map(product => product).sort((product1, product2) => product1.price -product2.price)


//original
console.log(`Original: ${products.map(product => (product.price))}`)
console.log(products)
//with spread
console.log(`Spread: ${arrWithSpread.map(product => (product.price))}`)
//with map
console.log(`Map: ${arrWithMap.map(product => (product.price))}`)





 
