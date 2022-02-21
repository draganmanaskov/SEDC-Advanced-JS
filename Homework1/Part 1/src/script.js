$(document).ready(function() {
    // with query params
    function renderListParams(cities) {
        if($('.myList').length) {
            $('.myList').empty()
        } else {
            let list = $('<lu></lu>')
            list.addClass('myList').css({
                'list-style': 'none'
            }) 
            $('.container').append(list)
        }

        for(let citie of cities) {
            $('.myList').append(`<li>${citie.name}</li>`)
        }       
    }


    // without query params
    function renderList(cities) {
        if($('.myList').length) {
            $('.myList').empty()
        } else {
            let list = $('<lu></lu>')
            list.addClass('myList').css({
                'list-style': 'none'
            }) 
            $('.container').append(list)
        }

        for(let i = 0; i < 10; i++) {
            $('.myList').append(`<li>${i+1}. ${cities[i].name}</li>`)
        }       
    }
    // without query parameters 
    $('#get-data').on('click', () => {
        $.ajax({
            url: 'https://api.openaq.org/v1/cities',
            success: (res) => {
                renderList(res.results)
            },
            error: (err) => {
                console.log(err)
            }
        })
    })

    // with query parameters limit=10
    $('#get-data-params').on('click', () => {
        $.ajax({       
            url: 'https://api.openaq.org/v1/cities?limit=10',   
            success: (res) => {
                renderListParams(res.results)
            },
            error: (err) => {
                console.log(err)
            }
        })
    })
})