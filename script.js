//Array that holds all book objects
let myLibrary = [
    new Book("Ninja Techniques", "Sensei", 23, false),
    new Book("Cooking Styles", "The Chef", 243, true),
    new Book("Cooking Styles", "The Chef", 243, true),
    new Book("Cooking Styles", "The Chef", 243, true),
    new Book("Cooking Styles", "The Chef", 243, true),
    new Book("Cooking Styles", "The Chef", 243, true),
    new Book("Cooking Styles", "The Chef", 243, true),
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
    for (let i = 0; i < myLibrary.length; i++) {
        //Creates book card with a class
        let currentBook = document.createElement("div")
        currentBook.classList.add("book-card");
        document.querySelector(".main-container").appendChild(currentBook);

        //Creates the status button
        let currentStatus = document.createElement("button");
        if (myLibrary[i].status == false) {
            currentStatus.classList.add("status-button-false");
            currentStatus.textContent = "Not Read";
        } else {
            currentStatus.classList.add("status-button-true");
            currentStatus.textContent = "Read";
        }
        currentBook.appendChild(currentStatus);
        currentStatus.addEventListener("click", () => {
            if (currentStatus.className == "status-button-false") {
                currentStatus.className = "status-button-true";
                currentStatus.textContent = "Read";
            } else {
                currentStatus.className = "status-button-false";
                currentStatus.textContent = "Not Read";
            }
        });
    }
}

addBookToLibrary();