const myUrl = 'https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json';


const filterFunctions = {
    higherThan: (students, number) => {   
        return students.filter(student => student.averageGrade > number)
    },
    studentOfGenderWithAvarageOf: (students, gender, number) => {
        return students.filter(student => student.gender.toLowerCase() == gender.toLowerCase() && student.averageGrade == number)
    },
    fullNameOfGenderInCityAboveAge: (students, gender, city, age) => {
        return students.filter(student => student.gender.toLowerCase() == gender.toLowerCase() && student.city.toLowerCase() == city.toLowerCase() && student.age > age)
                        .map(student => `${student.firstName} ${student.lastName}`)
    },
    avarageGradesOfGenderOverAge: (students, gender, age) => {
        return students.filter(student => student.gender.toLowerCase() == gender.toLowerCase() && student.age > age).map(student => student.averageGrade)
    },
    studentOfGenderStartingWithLetterAboveAvarage: (students, gender, firstLetter, avarage) => {
        return students.filter(student => student.gender.toLowerCase() == gender.toLowerCase() && student.firstName[0].toLowerCase() == firstLetter.toLowerCase() && student.averageGrade > avarage) 
    }
}

const getData = url => { 
    fetch(url)
    .then(res => {
        return res.json();
    })
    .then(res => {
        // All students with an average grade higher than 3
        console.log(filterFunctions.higherThan(res, 3))
        // All female student names with an average grade of 5
        console.log(filterFunctions.studentOfGenderWithAvarageOf(res, 'female', 5))
        // All male student full names who live in Skopje and are over 18 years old
        console.log(filterFunctions.fullNameOfGenderInCityAboveAge(res, 'male', 'Skopje', 18))
        // The average grades of all female students over the age of 24
        console.log(filterFunctions.avarageGradesOfGenderOverAge(res, 'female', 24))
        // All male students with a name starting with B and average grade over 2
        console.log(filterFunctions.studentOfGenderStartingWithLetterAboveAvarage(res, 'male', 'B', 2))
    })
    .catch(err => {
        console.log(err)
    })
}

getData(myUrl);

