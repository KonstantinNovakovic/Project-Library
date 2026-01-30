const container = document.getElementById("container");

const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages) {
  // take params, create a book then store it in the array
  // so basically take book parameter, call new Book on it and then push it to myLibrary?

  let newBook = new Book(title, author, pages);

  myLibrary.push(newBook);
}

function loopAndDisplay(arr) {
  myLibrary.forEach((item) => {
    const listItem = document.createElement("div");
    const title = document.createElement("h2");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const id = document.createElement("p");
    listItem.classList.add("card");

    title.textContent = `${item.title}`;
    author.textContent = `Author: ${item.author}`;
    pages.textContent = `Pages: ${item.pages}`;
    id.textContent = `Id: ${item.id}`;
    container.appendChild(listItem);
    listItem.appendChild(title);
    listItem.appendChild(author);
    listItem.appendChild(pages);
    listItem.appendChild(id);
  });
}

addBookToLibrary("The Hobbit", "Tolkien", 295);
addBookToLibrary("1984", "George Orwell", 328);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180);
addBookToLibrary("Dune", "Frank Herbert", 896);
addBookToLibrary("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 309);
addBookToLibrary("A Game of Thrones", "George R.R. Martin", 694);

loopAndDisplay(myLibrary);

console.log(myLibrary);
