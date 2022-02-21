$(document).ready(function () {
    let titleInput = $('#title')
    let searchBtn = $('#search')
    let h1Container = $('#h1-container')
    
    let movieCatalog = ['Lord of the Rings', "game of thrones", "hitman", "Avengers"]
    
    searchBtn.on('click',()=> {
        checkMovie(titleInput.val()) == true ? console.log("Movie found") : console.log('Movie not found')
    })
    
    function checkMovie(movie) {
        h1Container.empty()
        for(let movieItem of movieCatalog) {
            if(movieItem.toLowerCase().replace(/\s/g, '') === movie.toLowerCase().replace(/\s/g, '')){
                let li = $('<h1>Movie found</h1>').css('color', 'green')
                h1Container.append(li)
                titleInput.val('')
                return true
            }
        }
        
        let li = $("<h1>Movie can't be rented</h1>").css('color', 'red')
        h1Container.append(li)
        return false
    }
})
