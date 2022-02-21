$(document).ready(function () {
    function printStudents(academy) {
        $('#students-list').empty()
        $('#students-list').append(`<h2>Academy: ${academy.academy}</h2>`)
        for( let student of academy.students) {
            $('#students-list').append(`<li>${student}</li>`)
        }
    }

    $('#getData').on('click', () => {
        $.ajax('https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json')
            .then((res) => {
                printStudents(JSON.parse(res))
            }).catch((err) => {
                console.log(err)
            })
    })
})