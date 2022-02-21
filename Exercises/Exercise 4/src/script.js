let myForm = document.querySelector('#form');
let firsNameInput = document.getElementById('first-name');
let lastNameInput = document.getElementById('last-name');
let ageInput = document.getElementById('age');
let emailInput = document.getElementById('email');
let labels = document.querySelectorAll('.labels');
let successMsg = document.querySelector('.success-msg');


//our database
let database = []

//object constructor
function Student(fName, lName, age, email) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.email = email;
}

//form event listener
myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //call validation
    validationHandler(firsNameInput.value, lastNameInput.value, ageInput.value, emailInput.value)
})

//student creation
function studentGenerator(first, last, age, email) {
    //add student to database
    database.push(new Student(first, last, age, email))

    //display a succes msg and remove it after 3s
    successMsg.style.display = 'block';
    setTimeout(()=> {
        successMsg.style.display = 'none';
    }, 3000)

    //clear input fields
    firsNameInput.value = ''
    lastNameInput.value = ''
    ageInput.value = ''
    emailInput.value = ''

    //console log the entire array
    console.log(database)
}

//validation handler
function validationHandler(first, last, age, email) {
    //clear succes message
    successMsg.style.display = 'none';

    //clear error messages
    for(let label of labels) {
        label.innerText = ''
    }
    //call validation for each field
    let firstNameValidated = validateName(first, 'first')
    let lastNameValidated = validateName(last, 'last')
    let ageValidated = validateAge(age)
    let emailValidated = validateEmail(email)

    //if every input is valid proceed to creating a student
    if(firstNameValidated && lastNameValidated && ageValidated && emailValidated){
        for(let label of labels) {
            label.innerText = ''
        }
        //call create a student function
        studentGenerator(firstNameValidated, lastNameValidated, ageValidated, emailValidated)
    }
}

//validation for First Nanme & Last Name
function validateName(name, source) {
    let hasNumber = /\d/;   

    if(!name || hasNumber.test(name)) {
        document.getElementById(`${source}_name_label`).innerText = `Enter a valid ${source} name`
        return false
    } 
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}

//age validatation
function validateAge(age) {
    let tempAge = +age
    if(typeof tempAge === 'number' && !isNaN(tempAge) && tempAge > 0) return tempAge
    
    document.getElementById(`age_label`).innerText = `Enter a valid age`
    return false
}

//email validation
function validateEmail(email) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let found = email.match(reg)
    if(found) return found[0]

    document.getElementById(`email_label`).innerText = `Enter a valid email`
    return false
    
}