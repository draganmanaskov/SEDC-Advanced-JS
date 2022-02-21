//promise function
let promiseFunc = text => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {     
            if(typeof text != 'string') {
                reject(text)
            }
            else {
                resolve(text.toUpperCase())
            }   
        }, 4000)
    })
}

// an async helper function so we can call multiple promises
let asyncHelper = async payload => {
    try {
        let res = await promiseFunc(payload)
        console.log(`Input was a string: ${res}`)
        
    } catch (err) {
        console.log(`Input was not a string: ${err}`)
    }
}

asyncHelper("hello")
asyncHelper(123)
asyncHelper("323Sds")
asyncHelper(true)
asyncHelper([123, 3, 5, 6])