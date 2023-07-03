class PrintEdtionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix () {
        this.state *= 1.5;
    }

    set state (number) {
        if (number < 0) {
            this._state = 0;
        }
        if (number > 100) {
            this._state = 100;
        } else {
            this._state = number;
        }
    }

    get state () {
        return this._state;
    }
}

class Magazine extends PrintEdtionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "magazine";
        }
    }

class Book extends PrintEdtionItem {
    constructor(name, releaseDate, pagesCount, author){
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "book";
        this.author = author;
        }
    }

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author){
        super(name, author, releaseDate, pagesCount);
        this.state = 100;
        this.type = "novel";
        this.author = author;
        }
    }

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author){
        super(name, author, releaseDate, pagesCount);
        this.state = 100;
        this.type = "fantastic";
        this.author = author;
        }
    }  


class DetectivBook extends Book {
    constructor(name, releaseDate, pagesCount, author){
        super(name, author, releaseDate, pagesCount);
        this.state = 100;
        this.type = "detective";
        this.author = author;
        }
    }

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }
}

addBook (Book) {
    if (Book.state > 30) {
        this.books.push(Book);
    }
}

findBookBy (type, value) {
    return this.books.find(Book => Book[type] == value) || null;
}

giveBookByName (bookName) {
    const book = this.findBookBy('name', bookName);
    if (book) {
       this.books.splice(this.books.indexOf(book), 1)
    }
    return book;
}
