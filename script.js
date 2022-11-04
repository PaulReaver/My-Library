//Array that holds all book objects
let myLibrary = [
    new Book("Ninja Techniques", "Sensei", 23, false),
    new Book("Cooking Styles", "The Chef", 243, true)
];

//Constructor of book objects
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

//Adds book objects to the library
function addBookToLibrary() {

}