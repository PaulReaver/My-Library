//Array that holds all book objects
let myLibrary = [];

//Constructor of book objects
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

//Push some books in the library array
myLibrary.push(new Book("Running Man", "The Runner", 52, false));
myLibrary.push(new Book("Cooking Styles", "The Chef", 243, true));
myLibrary.push(new Book("Ninja Techniques", "Sensei", 23, false));

//Calls function to add the book objects to the DOM
addBookToLibrary();

//Gets the main container where the books are displayed
const mainContainer = document.querySelector(".main-container");

//Functions that adds book objects to the DOM
function addBookToLibrary() {
    //Iterates through the library array
    for (let i = 0; i < myLibrary.length; i++) {
        //Creates book card with a class
        let currentBook = document.createElement("div")
        currentBook.classList.add("book-card");
        document.querySelector(".main-container").appendChild(currentBook);

        //Creates the top section of the book card
        let currentBookTop = document.createElement("div");
        currentBookTop.classList.add("book-top")
        currentBook.appendChild(currentBookTop);

        //Creates the status button
        let currentStatus = document.createElement("button");
        if (myLibrary[i].status == false) {
            currentStatus.classList.add("status-button-false");
            currentStatus.textContent = "Not Read";
        } else {
            currentStatus.classList.add("status-button-true");
            currentStatus.textContent = "Read";
        }
        currentBookTop.appendChild(currentStatus);
        currentStatus.addEventListener("click", () => {
            if (currentStatus.className == "status-button-false") {
                currentStatus.className = "status-button-true";
                currentStatus.textContent = "Read";
                myLibrary[i].status = true;
            } else {
                currentStatus.className = "status-button-false";
                currentStatus.textContent = "Not Read";
                myLibrary[i].status = false;
            }
        });

        //Creates the delete button
        let currentDelete = document.createElement("button");
        currentDelete.classList.add("delete-button");
        currentDelete.textContent = "X";
        currentBookTop.appendChild(currentDelete);
        currentDelete.addEventListener("click", () => {

            //Removes current book object from array
            myLibrary.splice(i, 1);

            //Calls function to repopulate the DOM with books
            repopulate();
        })

        //Creates the middle section of the card
        let currentBookMiddle = document.createElement("div");
        currentBookMiddle.classList.add("book-middle");
        currentBook.appendChild(currentBookMiddle);

        //Creates the title of the book
        let currentTitle = document.createElement("h4");
        currentTitle.classList.add("book-title");
        currentTitle.textContent = `"${myLibrary[i].title}"`;
        currentBookMiddle.appendChild(currentTitle);

        //Creates the author of the book
        let currentAuthor = document.createElement("h5");
        currentAuthor.classList.add("book-author");
        currentAuthor.textContent = `by ${myLibrary[i].author}`;
        currentBookMiddle.appendChild(currentAuthor);

        //Creates the bottom section of the card
        let currentBookBottom = document.createElement("div");
        currentBookBottom.classList.add("book-bottom");
        currentBook.appendChild(currentBookBottom);

        //Creates the pages of the book
        let currentPages = document.createElement("h5");
        currentPages.classList.add("book-pages");
        currentPages.textContent = `${myLibrary[i].pages} Pages`;
        currentBookBottom.appendChild(currentPages);
    }
}

//Gets form container
const formVisibility = document.querySelector("#form-container");

//Gets darken screen div
const darkenScreen = document.querySelector("#darken-screen");
darkenScreen.addEventListener("click", changeFormVisibility);

//Add book button
const addBookButton = document.querySelector(".add-book-button");
addBookButton.addEventListener("click", changeFormVisibility);

//Close form button
const closeFormButton = document.querySelector(".close-form-button");
closeFormButton.addEventListener("click", changeFormVisibility);

//Function that changes form visibility
function changeFormVisibility() {
    if (formVisibility.className == "hidden-form") {
        formVisibility.className = "visible-form";
        darkenScreen.className = "visible-dark"

        //Resets the form values
        myForm.reset();
    } else {
        formVisibility.className = "hidden-form";
        darkenScreen.className = "hidden-dark";
    }
}

//Gets the form values
const myForm = document.querySelector("form");
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let myTitle = document.getElementById("title").value;
    let myAuthor = document.getElementById("author").value;
    let myPages = document.getElementById("pages").value;
    let myCheckbox = document.getElementById("checkbox").checked;

    //Pushes submited book to the library
    myLibrary.push(new Book(myTitle, myAuthor, myPages, myCheckbox));

    //Repopulates the DOM with books
    repopulate();

    //Hides the form when it is submitted 
    changeFormVisibility();
})

//Removes DOM books and repopulates
function repopulate() {

    //Removes all the books from the DOM
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }

    //Repopulates the DOM with books based on library array
    addBookToLibrary();
}