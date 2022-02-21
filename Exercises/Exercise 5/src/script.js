let colorInput = $('#color')
let fontSizeInput = $('#font-size')
let contentInput = $('#content')
let generateBtn = $('#generate')


generateBtn.on('click',()=> {
    createList(colorInput.val(), fontSizeInput.val(), contentInput.val())
})

function createList(color, fontSize, content) {
    $('#ul-container').empty()
    if(!fontSize || !content) {
        console.log("error")
        return
    }
    
    let list = $('<ul></ul>')
    for( let item of content.split(',')) {
        let li = $(`<li>${item}</li>`).css({
            'font-size': `${fontSize}px`,
            'color': `${color}`
        })
        list.append(li)
    }

    $('#ul-container').append(list)
    fontSizeInput.val('')
    contentInput.val('')
    generateBtn.val('') 
}