$(document).ready(function () {
    let titleInput = $('#title')
    let priorityInput = $('#priority')
    let colorInput = $('#color')
    let textareaInput = $('#textarea')
    let addBtn = $('#add_reminder')
    let showBtn = $('#show')
    let container = $("#container")

    let reminderArr = []

    function Reminder(title, priority, color, description ) {
        this.title = title;
        this.priority = priority;
        this.color = color;
        this.description = description
    }

    function addRemidner(title, priority, color, description ) {
        
        reminderArr.push(new Reminder(title, priority, color, description ))
        titleInput.val("")
        priorityInput.val("low")
        colorInput.val("black")
        textareaInput.val("")
    }

    addBtn.on('click', ()=> {
        addRemidner(titleInput.val(), priorityInput.val(), colorInput.val(), textareaInput.val())
    })

    showBtn.on('click', ()=> {
        renderReminders(reminderArr)
    })

    function renderReminders(list) {
        container.empty();
        let table = $('<table>')
    
        let headers = $( '<tr><td>Title</td><td>Priority</td><td>Description</td></tr>' )
        table.append(headers)
        for(let item of list) {
           let row = $($(`<tr><td>${item.title}</td><td>${item.priority}</td><td>${item.description}</td></tr>`))
           .css({"color": item.color })
           table.append(row)
        }
        container.append(table)
    }  
})
