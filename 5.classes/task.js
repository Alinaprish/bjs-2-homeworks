class PrintEdtionItem {
    constructor(name, releaseDate, pagesDate, state = 100, type = null){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesDate = pagesDate;
        this.state = state;
    }
}

PrintEdtionItem.prototype.fix = function(){return this.state * 1,5;}

set this.state(PrintEdtionItem.fix){
    if(PrintEdtionItem.fix < 0){
        state = 0;
    }
    if(PrintEdtionItem.fix > 100){
        state = 100;
    }
}

get this.state(){
    return this.state;
}

class Magazine extends PrintEdtionItem {
    constructor(name, releaseDate, pagesDate, state = 100, type = null){
        super(name, releaseDate, pagesDate, state = 100, type = null){
            this.type = "magazine";
        }
    }
}

class Book extends PrintEdtionItem {
    constructor(name, releaseDate, pagesDate, state = 100, type = null){
        super(name, releaseDate, pagesDate, state = 100, type = null, author){
            this.type = "book";
        }
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesDate, state = 100, type = null){
        super(name, releaseDate, pagesDate, state = 100, type = null, author){
            this.type = "novel";
        }
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesDate, state = 100, type = null){
        super(name, releaseDate, pagesDate, state = 100, type = null, author){
            this.type = "fantastic";
        }
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesDate, state = 100, type = null){
        super(name, releaseDate, pagesDate, state = 100, type = null, author){
            this.type = "detective";
        }
    }
}

class Library {
    constructor(name, books = []){
        this.name = name;
        this.books = books;
    }
}

Library.prototype.addBook = function(book){
    if (state > 30){
        return state++;
    }
}

Library.prototype.findBookBy = function(type, value){
    
}

