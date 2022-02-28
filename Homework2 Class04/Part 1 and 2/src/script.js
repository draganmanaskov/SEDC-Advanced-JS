$(document).ready(function() {
    // api url const
    const URL_API_PAGE_1 = 'https://swapi.dev/api/planets/?page=1';
    const URL_API_PAGE_2 = 'https://swapi.dev/api/planets/?page=2';

    //create the table after the api call
    const populateTable = planets => {
        $('.myTable').empty().append('<tr><th>Planet Name</th><th>Population</th><th>Climate</th><th>Gravity</th></tr>')

        for(let prop of planets) {
            $('.myTable').append(`<tr><td>${prop.name}</td><td>${prop.population}</td><td>${prop.climate}</td><td>${prop.gravity}</td></tr>`)
        }
    }

    // call the api
    const callApi = url => {
        $.ajax({
            url: url,
            success: (res) => {
                populateTable(res.results)
            },
            error: (err) => {
                console.log(err)
            }
        })
    } 


    $('.pagination').on('click', (e) => {
        console.log(e.target)
        if($(e.target).hasClass("previous")) {
            callApi(URL_API_PAGE_1)
            $('.pagination').toggle()
        }

        if($(e.target).hasClass("next")) {
            callApi(URL_API_PAGE_2)
            $('.pagination').toggle()
        }
    })

    //on button click call api
    $('#get-data').on('click', () => {      
        callApi(URL_API_PAGE_1)
        $('.next').toggle()
    })
})