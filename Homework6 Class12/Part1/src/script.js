let colors = ['green', 'grey', 'white', 'orange', 'black']

//random color picker
const randomColor = colors => {
    return colors[Math.floor(Math.random() * 5)]
}


function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function() {
        console.log(`${this.firstName} ${this.lastName}`)
    };
}


function Animal(name, age)  {
    this.name = name;
    this.age = age;
    this.eat = function() {
        console.log(`eat`)
    };
    this.sleep = function() {
        console.log(`sleep`)
    };
}



function Cat (name, age, color, ownerId) {
    Object.setPrototypeOf(this, new Animal(name, age));
    this.color = color;
    this.ownerId = ownerId ? ownerId : null;
    this.meow = function() {
        console.log(` The cat ${this.name} says Meow.`)
    }
    //Task 2
    this.ownerDetails = function() {
        if(!this.ownerId) {
            console.log("This cat doesn't have an owner")
            return
        }
        let owner = peopleArr.filter(person => person.id === this.ownerId)[0]
        console.log('======Owner details======')
        console.log(`First name: ${owner.firstName}`)
        console.log(`Last name: ${owner.lastName}`)
        console.log(`Age: ${owner.age}`)
    }
}


let peopleArr = []
for(let i = 1; i <= 5 ; i++) {
    peopleArr.push(new Person(i, `First${i}`, `Last${i}`, Math.floor( Math.random() * 100 + 10) ))
}


let cat1 = new Cat('Garfield', 5, randomColor(colors), peopleArr[0].id)
let cat2 = new Cat('Apollo', 3, randomColor(colors), peopleArr[1].id)


//Task 2
cat2.ownerDetails()



//Task 2
function PersianCat(name, age, color, ownerId, eyeColor) {
    Object.setPrototypeOf(this, new Cat(name, age, color, ownerId));
    this.eyeColor = eyeColor;
    this.furDescription = function() {
        console.log(`The cat ${this.name} has full fur`)
    }
}

function RagDollCat(name, age, color, ownerId, weight, isFriendly) {
    Object.setPrototypeOf(this, new Cat(name, age, color, ownerId));
    this.weight = weight;
    this.isFriendly = isFriendly ? true : false;
    
    this.printPersonality = function(type) {
        if(!type) {
            console.log(`${this.name} is not friendly`)
            return
        }
        this.isFriendly = true;
        console.log(`${this.name} is friendly`)
    }
}

console.log('================================')
let persianCat = new PersianCat('Whisker', 32, randomColor(colors), peopleArr[2].id, 'green')
persianCat.furDescription()
persianCat.ownerDetails()


console.log('================================')
let ragDollCat = new RagDollCat('Mimi', 32, randomColor(colors), peopleArr[3].id, 10)
ragDollCat.printPersonality(true)
ragDollCat.ownerDetails()




// Class Version

// class Person {
//     constructor(id, firstName, lastName, age) {
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     getFullName() {
//         console.log(`${this.firstName} ${this.lastName}`)
//     }
// }


// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         console.log(`eat`)
//     }
//     sleep() {
//         console.log(`sleep`)
//     }
// }


// class Cat  extends Animal{
//     constructor(name, age, color, ownerId) {
//         super(name, age);
//         this.color = color;
//         this.ownerId = ownerId ? ownerId : null;
//     }
//     meow() {
//         console.log(` The cat ${this.name} says Meow.`)
//     }
//     //Task 2
//     ownerDetails() {
//         if(!this.ownerId) {
//             console.log("This cat doesn't have an owner")
//             return
//         }
//         let owner = peopleArr.filter(person => person.id === this.ownerId)[0]
//         console.log('======Owner details======')
//         console.log(`First name: ${owner.firstName}`)
//         console.log(`Last name: ${owner.lastName}`)
//         console.log(`Age: ${owner.age}`)
//     }
// }


// let peopleArr = []
// for(let i = 1; i <= 5 ; i++) {
//     peopleArr.push(new Person(i, `First${i}`, `Last${i}`, Math.floor( Math.random() * 100 + 10) ))
// }


// let cat1 = new Cat('Garfield', 5, randomColor(colors), peopleArr[0].id)
// let cat2 = new Cat('Apollo', 3, randomColor(colors), peopleArr[1].id)


// //Task 2
// cat2.ownerDetails()


// //Task 2
// class PersianCat extends Cat {
//     constructor(name, age, color, ownerId, eyeColor,) {
//         super(name, age, color, ownerId);
//         this.eyeColor = eyeColor;
//     }
//     furDescription() {
//         console.log(`The cat ${this.name} has full fur`)
//     }
// }

// class RagDollCat extends Cat {
//     constructor(name, age, color, ownerId, weight, isFriendly) {
//         super(name, age, color, ownerId);
//         this.weight = weight;
//         this.isFriendly = isFriendly ? true : false;
//     }
//     printPersonality(type) {
//         if(!type) {
//             console.log(`${this.name} is not friendly`)
//             return
//         }
//         this.isFriendly = true;
//         console.log(`${this.name} is friendly`)
//     }
// }


// console.log('================================')
// let persianCat = new PersianCat('Whisker', 32, randomColor(colors), peopleArr[2].id, 'green')
// persianCat.furDescription()
// persianCat.ownerDetails()


// console.log('================================')
// let ragDollCat = new RagDollCat('Mimi', 32, randomColor(colors), peopleArr[3].id, 10)
// ragDollCat.printPersonality(true)
// ragDollCat.ownerDetails()



