const bookArray = []


let libraryHelper = {
    Library: function (name, address, books = [] ) {
        this.name = name;
        this.books = books;
        this.address = address;
        this.numberOfMembers = this.books.length * 15;
        this.printBooks = function () {
            console.log(`${this.name} books:`)
            this.books.forEach(book => {
                console.log(book)
            });
        };
        this.addBook = function (book) {
            book.libraries.push(this)
            let newBook = Object.create(book)
            this.books.push(Object.create(newBook))
        }
    }
}


let bookHelper = {
    Book: function (title, genre, authors) {
        this.title = title;
        this.genre = genre;
        this.libraries = [];
        this.authors = authors;
        this.addLibrary = function(newLibrary) {
            this.libraries.push(newLibrary)
            newLibrary.books.push(this)
        };
        this.removeLibrary = function(oldLibrary) {
            //removes the book from the library
            for(let i = 0; i < oldLibrary.books.length; i++) {
                if(oldLibrary.books[i].title === `${this.title}`) {
                    oldLibrary.books.splice(i, 1);
                    break;
                }
            }

            //removes the librry from the book
            for(let i = 0; i < this.libraries.length; i++) {
                if(this.libraries[i].name === oldLibrary.name) {
                    this.libraries.splice(i, 1);
                    break;
                }
            }
        }
    },
    //find the book OBject by title
    findBook: title => {
        return  bookArray.filter(book => book.title === title)[0]
    },

}

let authorHelper = {
    Author: function (fName, lName, yearOfB) {
        this.firstName = fName;
        this.lastName = lName;
        this.yearOfBirth = yearOfB;
        this.books = [];
        this.currentBook = null;
        this.startBook = function(bookObject) {
            if(this.currentBook) {
                this.books.push(this.currentBook)
            }
            this.currentBook = bookObject
        }
    },
    startBook: (title, genre, authors) => {
        let authorNames = authors.map(author => `${author.firstName} ${author.lastName}`)
        let book = new bookHelper.Book(title, genre, [...authorNames])
        RRMartin.startBook(book)
        bookArray.push(book)
    }
}




//create a library
let firstLibrary = new libraryHelper.Library("First Library", "Street 1")
console.log("======== FIRST LIBRARY==========")
console.log(firstLibrary)

//create a library
let secondLibrary = new libraryHelper.Library("Second Library", "Street 2")
console.log("======== SECOND LIBRARY==========")
console.log(secondLibrary)
 
//create an author
let RRMartin = new authorHelper.Author('George', 'R.R.Martin', 1948)
console.log("======== FIRST AUTHOR==========")
console.log(RRMartin)

//create some books by the author
authorHelper.startBook('A Game of Thrones', 'political novel, epic fantasy', [RRMartin])
authorHelper.startBook('A Clash of Kings', 'political novel, epic fantasy', [RRMartin])
authorHelper.startBook('A Storm of Swords', 'political novel, epic fantasy', [RRMartin])
console.log("============ BOOKS ===============")
console.log(bookArray)



//add libraries to the books
bookHelper.findBook('A Storm of Swords').addLibrary(firstLibrary)
bookHelper.findBook('A Clash of Kings').addLibrary(firstLibrary)
bookHelper.findBook('A Clash of Kings').addLibrary(secondLibrary)
console.log("============ ADD LIBRARIES TO BOOKS  ===============")
firstLibrary.printBooks()
secondLibrary.printBooks()


//remove libraries from books
bookHelper.findBook('A Clash of Kings').removeLibrary(firstLibrary)
console.log("============ REMOVE BOOKS TO LIBRARIES ===============")
console.log(firstLibrary)

//add books to libraries
console.log("============ ADD BOOKS TO LIBRARIES ===============")
secondLibrary.addBook(bookHelper.findBook('A Game of Thrones'))
secondLibrary.printBooks()

