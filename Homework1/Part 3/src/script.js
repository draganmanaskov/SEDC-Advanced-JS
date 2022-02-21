$(document).ready(function() {
    let currentImageIndex = 0
    
    //render all
    function renderImages(dogs) {
        $('.full-list').empty()
        $('.carousel').hide()


        if($('.dogs-list').length) {
            $('.dogs-list').empty()
        } else {    
            let list = $('<ul></ul>')
            list.addClass('dogs-list')
            $('.full-list').append(list)
        }

        for(let dog of dogs) {
            let li = $(`<li><img src=${dog} /></li>`)
            $('.dogs-list').append(li)
        }
    }
     // -----------------------------------

    function paganationNumberButtons(newIndex, length) {
        $('.current').removeClass('current')

        let startIndex = newIndex - 5
        let buttons = [...$('.added-btn')]

        if(newIndex <= 5) {
            for(let index in buttons) {
                let i = +index
                $(buttons[i]).text(i + 1).val(i + 1)
                if(newIndex === +$(buttons[i]).val()) {
                    $(buttons[i]).addClass('current')
                }
            }
            setPrevAndNext(newIndex, length)
            return newIndex
        }



        if(newIndex > length - 5) {
            $(`#${newIndex}`).addClass('current')

            for(let index in buttons) {
                let i = +index
                $(buttons[i]).text(length - 9 + i).val(length - 9 + i)
                if(newIndex === +$(buttons[i]).val()) {
                    $(buttons[i]).addClass('current')
                }
            }
            setPrevAndNext(newIndex, length)
            return newIndex
        }

        for(let index in buttons) {
            let i = +index
            $(buttons[i]).text(startIndex + i).val(startIndex + i)
        }

        $(`#6`).addClass('current')
        setPrevAndNext(newIndex, length)

        return newIndex

    }

    function paginationFunc(e, length, myArray) {
        currentImageIndex = paganationNumberButtons(+$(e.target).val(), length)
        renderDogImages(currentImageIndex, myArray)
    }

    function setPrevAndNext(currentIndex, length) {
        if(currentIndex === 1) {
            $('.previous').val(1)
            $('.next').val(currentIndex + 1)
            return
        }
        if(currentIndex === length) {
            $('.previous').val(currentIndex - 1)
            $('.next').val(currentIndex)
            return
        }

        $('.previous').val(currentIndex - 1)
        $('.next').val(currentIndex + 1)
    }

    function renderDogImages(index, dogs) {
        $('.img-conatiner').empty()
        let image = $(`<img src=${dogs[index - 1]}>`)
        $('.img-conatiner').append(image)
    }

    // render carousel
    function carousel(dogs) {
        $('.carousel').show()
        $('.full-list').empty()
        $('.added').empty()

        let arrayLength = dogs.length
        currentImageIndex = 1;

        $('.start').val(1)
        $('.end').val(arrayLength)


        for(let i = 1; i < 11; i++) {
            let button = $(`<button>${i}</button>`).attr('id', i).addClass('pag added-btn').val(i)
            $('.added').append(button)
        }
        $(`#${currentImageIndex}`).addClass('current')

        setPrevAndNext(currentImageIndex, arrayLength)

        renderDogImages(currentImageIndex, dogs)
        
        $('.pag').on('click', (e) => {
            paginationFunc(e, arrayLength, dogs)
        })
    }
    
//without paganation
    $('#get-dog').on('click', () => {
        $.ajax({
            url: 'https://dog.ceo/api/breed/hound/images',
            success: (res) => {
                renderImages(res.message)
            },
            error: (err) => {
                console.log(err)
            }
        })
    })

// paganation
    $('#get-dog-pag').on('click', () => {
        $.ajax({
            url: 'https://dog.ceo/api/breed/hound/images',
            success: (res) => {
                carousel(res.message)
            },
            error: (err) => {
                console.log(err)
            }
        })
    })
});