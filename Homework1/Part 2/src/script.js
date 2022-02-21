
function deconstruct(objectStat, header, personRow, tempI) {
    let newI = tempI
    let tempHeader = ''
    let tempUserInfo = ''

    for ( let stat in objectStat) {
        // console.log(stat)
        if(typeof objectStat[stat] === 'object') {
            // console.log(objectStat[stat], stat)
            newI = deconstruct(objectStat[stat], header, personRow, newI)
            continue
        }
        tempHeader += stat
        tempUserInfo += ` ${objectStat[stat]}`
        // console.log(stat, objectStat[stat])
        if(tempHeader == 'street') {
            console.log(tempHeader, tempUserInfo)
            continue
        }

        if(tempHeader == 'streetsuite') {
            addToRow(header, 'address', newI)
            addToRow(personRow, tempUserInfo, newI)
            newI++
            tempHeader = ''
            tempUserInfo = ''
            continue
        }

        if(tempHeader == 'name') {
            addToRow(header, 'comapany name', newI)
            addToRow(personRow, tempUserInfo, newI)
            newI++
            tempHeader = ''
            tempUserInfo = ''
            continue
        }

        addToRow(header, tempHeader, newI)
        addToRow(personRow, tempUserInfo, newI)
        newI++
        tempHeader = ''
        tempUserInfo = ''
    }
    return newI
}

function renderTable(person) {
    //console.log(person)
    let table = document.createElement('table');
    table.classList.add("myTable");
    let header = table.insertRow(0)
    let personRow = table.insertRow(1)
    let i = 0
    for (let stat in person) {

        if(typeof person[stat] === 'object') {
            let newI = deconstruct(person[stat], header, personRow , i)
            i = newI
            continue
        }
        else {
            addToRow(header, stat, i)
            addToRow(personRow, person[stat], i)
            i++
        }
        
  
    }
    // table.appendChild(header)
    document.querySelector('.container').appendChild(table)
}

function addToRow(row, stat, i) {
    // console.log(i)
    let newCell = row.insertCell(i)
    let newText = document.createTextNode(stat);
    newCell.appendChild(newText);
}

function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users/2')
        .then((res) => {
            return res.json();
        })
        .then((myJson) => {
            renderTable(myJson)
        })
        .catch((err) => {
            console.log(err)
        })      
}


document.getElementById('fetch-data').addEventListener('click', () => {
    fetchData()
})