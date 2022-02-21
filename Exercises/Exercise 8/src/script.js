$(document).ready(function () {
    let creditCard = $('.credit-card');
    let cardReader = $('.card-reader');
    let screen = $('.screen');
    
    let creditCardInfo = {
        firstName: "Dragan",
        lastName: "Manaskov",
        balance: 1000
    }

    //drag functions
    creditCard.on('dragstart', () => {
        creditCard.addClass('dragging') 
    })

    creditCard.on('dragend', () => {
        dragEndHandler()
    })

    cardReader.on('dragover', (e)=> {
        e.preventDefault()
        cardReader.addClass('card-reader-on') 
    })

    cardReader.on('dragleave', ()=> {
        cardReader.removeClass('card-reader-on')
    })

    function dragEndHandler() {
        creditCard.removeClass('dragging')
        if($('.card-reader-on').length == 1){
            startATM()
        }   
    }

    // when card is droped on the correct place start the atm
    function startATM() {
        cardReader.removeClass('card-reader-on')
        creditCard.toggle()
        screen.css('background', 'rgb(96, 148, 216)')
        setTimeout(()=> {
            screen.addClass('options-menu')
            $('.options').toggle()
            buttonsFunctionality()
        }, 3100)
    }

    //all button and keybord inputs
    function buttonsFunctionality() {
        $('.numbers').on('click', (e) => {
            if($('.options-menu').length == 1) {
                switch (+e.target.value) {
                    case 1:      
                        getBalance(creditCardInfo);
                        return
                        break;
                    case 2:
                        makeDeposit("deposit");
                        return
                        break;
                    case 3:
                        withdrawal("withdrawal")
                        return
                        break;
                    case 4:
                        exitFunction();
                        return
                        break;
                    default:
                        break;
                }
            }

            switch (e.target.value) {
                case "cancel":      
                    exitFunction();
                    break;
                case "clear":
                    clearAllInput();
                    break;
                case "enter":
                    finishTransaction(creditCardInfo)
                    break;
                case "C":
                    backSpace();
                    break;
                case "":
                    break;    
                default:
                    keyPadInput(e.target.value)
                    break;
            }
        })

        //transaction buttons extra
        $('.another-transaction-btn').on('click', () => {
            screen.addClass('options-menu')
            $('.options').show()
            $('.result').hide()
            $('.result-changes').empty()
        })

        $('.exit-btn').on('click', () => {
            exitFunction();
        }) 


        //keyboard inputs for options
        $(document).on('keypress',function(e) {
            if($('.options-menu').length == 1) {
                switch(e.which) {
                    case 49:      
                        getBalance(creditCardInfo);
                        return
                        break;
                    case 50:
                        makeDeposit(creditCardInfo, "deposit");
                        return
                        break;
                    case 51:
                        withdrawal(creditCardInfo, "withdrawal")
                        return
                        break;
                    case 52:
                        exitFunction();
                        return
                        break;
                    default:
                        break;
                }
            }

            if(e.which == 13) {
                finishTransaction(creditCardInfo)
            }
        });
    }


    //keypad numbers for getting input
    function keyPadInput(value) {
        console.log(value)
        $('.input-money').val( $('.input-money').val() + value).focus()

    }

    function backSpace() {
        let value = $('.input-money').val()
        $('.input-money').val(value.substring(0, value.length - 1))
    }

    function clearAllInput() {
        $('.input-money').val("")
    }

    //get balace
    function getBalance(info) {
        actionsHelper();

        let formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          });
          
          
        let header = $('<h2>Balance</h2>')
        let user = $(`<p>User: ${info.firstName} ${info.lastName}</p>`)
        let balance = $(`<p>Balance: ${formatter.format(info.balance)}</p>`)

        $('.result-changes').append(header)
        $('.result-changes').append(user)
        $('.result-changes').append(balance)
    }

    //make a deposit
    function makeDeposit(action) {
        actionsHelper();

        let header = $('<h2>Make Deposit</h2>')
        let message = $('<p>Press <label style="color: green">Enter</label> to deposit</p>')
        message.css("text-align, center")
        let input = $(`<input type="text">`)
        input.addClass('input-money')
        input.addClass(`${action}`)

        $('.result-changes').append(header)
        $('.result-changes').append(message)
        $('.result-changes').append(input)

        $('.input-money').focus()
        $('.input-money').on('change input', (e)=> {
            inputChangeHandler(e)
        }) 
    }

    //make a withdrawl
    function withdrawal(action) {
        actionsHelper();

        let header = $('<h2>Withdrawal </h2>')
        let message = $('<p>Press <label style="color: green">Enter</label> to withdraw</p>')
        message.css("text-align, center")
        let input = $(`<input type="text">`)
        input.addClass('input-money')
        input.addClass(`${action}`)

        $('.result-changes').append(header)
        $('.result-changes').append(message)
        $('.result-changes').append(input)

        $('.input-money').focus()
        $('.input-money').on('change input', (e)=> {
            inputChangeHandler(e)
        })     
    }

    function inputChangeHandler(e) {
        let number = +e.target.value
    
        if(typeof number != 'number' || isNaN(number)) {
            let str = e.target.value.substring(0, e.target.value.length - 1)
            $(e.target).val(str)
            return
        }
    }



    //process the action 
    function finishTransaction(user) {
        //make a deposit jandler
     
        if($('.input-money').length === 0 || !$('.input-money').val()) {
            return
        } 
        if($('.deposit').length == 1) {
            user.balance += +$('.deposit').val()
            $('.result-changes').empty()

            let header = $('<h2>Make Deposit</h2>')
            let message = $(`<p>Deposit Susccess</p>`)

            $('.result-changes').append(header)
            $('.result-changes').append(message)
        }
        if($('.withdrawal').length == 1) {
            if(user.balance < +$('.withdrawal').val()) {
                $('.result-changes').empty()

                let header = $('<h2>Withdrawal</h2>')
                let message = $(`<p>Not enough funds!</p>`)
    
                $('.result-changes').append(header)
                $('.result-changes').append(message)
                return
            }
            user.balance -= $('.withdrawal').val()
            $('.result-changes').empty()

            let header = $('<h2>Withdrawal</h2>')
            let message = $(`<p>Withdrawal Success!</p>`)

            $('.result-changes').append(header)
            $('.result-changes').append(message)
        }
            console.log(`NEW BALANCE: ${user.balance}$`)
        }

    // exit atm
    function exitFunction() {
        $('.options').hide()
        $('.result').hide()
        $('.result-changes').empty()
        $('.numbers').off('click')
        screen.removeClass('options-menu')
        screen.css('background', 'rgb(61, 65, 65)')
        creditCard.toggle()
    }

    //set correct display and class
    function actionsHelper() {
        screen.removeClass('options-menu')
        $('.options').hide()
        $('.result').show()
    }

})
