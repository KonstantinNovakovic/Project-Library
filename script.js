const container = document.getElementById("container");
const dialog = document.getElementById("myDialog");
const openBtn = document.getElementById("openBtn");
const saveBtn = document.getElementById("saveBtn");
const inputTitle = document.getElementById("userInputTitle");
const inputAuthor = document.getElementById("userInputAuthor");
const inputPages = document.getElementById("userInputPages");
const inputRead = document.getElementById("userInputRead");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  // so basically take book parameter, call new Book on it and then push it to myLibrary?

  let newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
}

function loopAndDisplay(arr) {
  container.innerHTML = "";
  myLibrary.forEach((item) => {
    const listItem = document.createElement("div");
    const title = document.createElement("h2");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");
    const id = document.createElement("p");
    listItem.classList.add("card");

    title.textContent = `${item.title}`;
    author.textContent = `Author: ${item.author}`;
    pages.textContent = `Pages: ${item.pages}`;
    read.textContent = `Read: ${item.read}`;
    id.textContent = `Id: ${item.id}`;
    container.appendChild(listItem);
    listItem.appendChild(title);
    listItem.appendChild(author);
    listItem.appendChild(pages);
    listItem.appendChild(read);
    listItem.appendChild(id);
  });
}

openBtn.addEventListener("click", () => {
  dialog.showModal();
});

saveBtn.addEventListener("click", () => {
  addBookToLibrary(
    `${inputTitle.value}`,
    `${inputAuthor.value}`,
    `${inputPages.value}`,
    `${inputRead.value}`,
  );
  loopAndDisplay(myLibrary);
});

addBookToLibrary("The Hobbit", "Tolkien", 295, "yes");
addBookToLibrary("1984", "George Orwell", 328, "no");
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, "yes");
addBookToLibrary("Dune", "Frank Herbert", 896, "no");
addBookToLibrary(
  "Harry Potter and the Sorcerer's Stone",
  "J.K. Rowling",
  309,
  "yes",
);
addBookToLibrary("A Game of Thrones", "George R.R. Martin", 694, "no");

loopAndDisplay(myLibrary);

console.log(myLibrary);
