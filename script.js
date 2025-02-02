// Array that holds all book objects
const myLibrary = [];

// Get form inputs
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');

// Class that creates book objects and changes read status
class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }

    changeStatus() {
        this.status = !this.status;
    }
}

// Push some books in the library array
myLibrary.push(new Book('Running Man', 'The Runner', 52, false));
myLibrary.push(new Book('Cooking Styles', 'The Chef', 243, true));
myLibrary.push(new Book('Ninja Techniques', 'Sensei', 23, false));

// Gets the main container where the books are displayed
const mainContainer = document.querySelector('.main-container');

// Removes all the books from the DOM
function repopulate() {
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
}

// Functions that adds book objects to the DOM
function addBookToLibrary() {
    // Iterates through the library array
    for (let i = 0; i < myLibrary.length; i += 1) {
        // Creates book card with a class
        const currentBook = document.createElement('div');
        currentBook.classList.add('book-card');
        document.querySelector('.main-container').appendChild(currentBook);

        // Creates the top section of the book card
        const currentBookTop = document.createElement('div');
        currentBookTop.classList.add('book-top');
        currentBook.appendChild(currentBookTop);

        // Creates the status button
        const currentStatus = document.createElement('button');
        if (myLibrary[i].status === false) {
            currentStatus.classList.add('status-button-false');
            currentStatus.textContent = 'Not Read';
        } else {
            currentStatus.classList.add('status-button-true');
            currentStatus.textContent = 'Read';
        }
        currentBookTop.appendChild(currentStatus);
        currentStatus.addEventListener('click', () => {
            if (currentStatus.className === 'status-button-false') {
                currentStatus.className = 'status-button-true';
                currentStatus.textContent = 'Read';
                myLibrary[i].changeStatus();
            } else {
                currentStatus.className = 'status-button-false';
                currentStatus.textContent = 'Not Read';
                myLibrary[i].changeStatus();
            }
        });

        // Creates the delete button
        const currentDelete = document.createElement('button');
        currentDelete.classList.add('delete-button');
        currentDelete.textContent = 'X';
        currentBookTop.appendChild(currentDelete);
        currentDelete.addEventListener('click', () => {
            // Removes current book object from array
            myLibrary.splice(i, 1);

            // Calls function to repopulate the DOM with books
            repopulate();

            // Repopulates the DOM with books based on library array
            addBookToLibrary();
        });

        // Creates the middle section of the card
        const currentBookMiddle = document.createElement('div');
        currentBookMiddle.classList.add('book-middle');
        currentBook.appendChild(currentBookMiddle);

        // Creates the title of the book
        const currentTitle = document.createElement('h2');
        currentTitle.classList.add('book-title');
        currentTitle.textContent = `"${myLibrary[i].title}"`;
        currentBookMiddle.appendChild(currentTitle);

        // Creates the author of the book
        const currentAuthor = document.createElement('h3');
        currentAuthor.classList.add('book-author');
        currentAuthor.textContent = `by ${myLibrary[i].author}`;
        currentBookMiddle.appendChild(currentAuthor);

        // Creates the bottom section of the card
        const currentBookBottom = document.createElement('div');
        currentBookBottom.classList.add('book-bottom');
        currentBook.appendChild(currentBookBottom);

        // Creates the pages of the book
        const currentPages = document.createElement('h3');
        currentPages.classList.add('book-pages');
        currentPages.textContent = `${myLibrary[i].pages} Pages`;
        currentBookBottom.appendChild(currentPages);
    }
}

// Gets form container
const formVisibility = document.querySelector('#form-container');

// Gets darken screen div
const darkenScreen = document.querySelector('#darken-screen');

// Gets the form values
const myForm = document.querySelector('form');

// Function that changes form visibility
function changeFormVisibility() {
    if (formVisibility.className === 'hidden-form') {
        formVisibility.className = 'visible-form';
        darkenScreen.className = 'visible-dark';

        // Resets the form values
        myForm.reset();
    } else {
        formVisibility.className = 'hidden-form';
        darkenScreen.className = 'hidden-dark';
    }
}

// Constraint validation
titleInput.addEventListener('invalid', () => {
    titleInput.setCustomValidity('Please enter a title.');
});

titleInput.addEventListener('input', () => {
    // Clear message on input
    titleInput.setCustomValidity('');
});

authorInput.addEventListener('invalid', () => {
    authorInput.setCustomValidity('Please enter an author.');
});

authorInput.addEventListener('input', () => {
    // Clear message on input
    authorInput.setCustomValidity('');
});
pagesInput.addEventListener('invalid', () => {
    pagesInput.setCustomValidity('Please enter number of pages.');
});

pagesInput.addEventListener('input', () => {
    // Clear message on input
    pagesInput.setCustomValidity('');
});

// Add event listener to the form
myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const myTitle = titleInput.value;
    const myAuthor = authorInput.value;
    const myPages = pagesInput.value;
    const myCheckbox = document.getElementById('checkbox').checked;

    // Pushes submited book to the library
    myLibrary.push(new Book(myTitle, myAuthor, myPages, myCheckbox));

    // Repopulates the DOM with books
    repopulate();
    addBookToLibrary();

    // Hides the form when it is submitted
    changeFormVisibility();
});

// Calls function to add the book objects to the DOM
addBookToLibrary();

// Adds event listener to dark screen
darkenScreen.addEventListener('click', changeFormVisibility);

// Add book button
const addBookButton = document.querySelector('.add-book-button');
addBookButton.addEventListener('click', changeFormVisibility);

// Close form button
const closeFormButton = document.querySelector('.close-form-button');
closeFormButton.addEventListener('click', changeFormVisibility);
