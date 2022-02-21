function Student(fName, lName, bYear, academy, grades) {
    this.firstName = fName,
    this.lastName = lName,
    this.birthYear = bYear,
    this.academy = academy,
    this.grades = grades,
    this.getAge = function() {
        return new Date().getFullYear() - this.birthYear
    },
    this.getInfo = function() {
        return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}`
    },
    this.getGradesAvarage = function() {
        let sum = 0;
        for(let grade of this.grades) {
            sum+=grade
        }
        return (sum/this.grades.length).toFixed(2)
    }
}

let students = [];
students.push(new Student("Dragan", "Manaskov", 1995, "SEDC", [10,9,8,9,6]))
students.push(new Student("Sara", "Smith", 1990, "UKIM", [6,9,7,9,10,8]))
students.push(new Student("Bob", "Ross", 1980, "RandomCollege", [10,10,7,9,8,10,6]))

for(let student of students) {
    console.log(`${student.firstName} is ${student.getAge()}`);
    console.log(student.getInfo());
    console.log(`Grades Avarage is: ${student.getGradesAvarage()}`);
    console.log("===============")
}

