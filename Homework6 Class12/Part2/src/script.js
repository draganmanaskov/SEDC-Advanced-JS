class Person {
    constructor(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    fullName() {
        // console.log(`${this.firstName} ${this.lastName}`)
        return `${this.firstName} ${this.lastName}`
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, address, subjects, academy) {
        super(firstName, lastName, age, address);
        this.subjects = subjects;
        this.academy = academy;
    }
    static doesStudie(student, subj) {
        let doesStudieSubject = student.subjects.filter( subject => subject === subj)[0]
        if(!doesStudieSubject) {
            console.log(`${student.fullName()} does not studie ${subj}`)
            return
        }
        console.log(`${student.fullName()} studies ${subj}`)
    }   
}

let person = new Student('John', "Smith", 23, 'Partizanska', ['Programing', 'Math', 'History', "English"], 'SEDC')


console.log(person.fullName())
console.log(person.subjects)
Student.doesStudie(person, 'Math')