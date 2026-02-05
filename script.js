const container = document.getElementById("container");
const dialog = document.getElementById("myDialog");
const openBtn = document.getElementById("openBtn");
const saveBtn = document.getElementById("saveBtn");
const inputTitle = document.getElementById("userInputTitle");
const inputAuthor = document.getElementById("userInputAuthor");
const inputPages = document.getElementById("userInputPages");
const inputRead = document.getElementById("userInputRead");
const closeButton = document.getElementById("close");
const form = document.getElementById("form");

let myLibrary = [];

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
  arr.forEach((item) => {
    const listItem = document.createElement("div");
    const title = document.createElement("h2");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");
    const id = document.createElement("p");
    const rmv = document.createElement("button");
    const readBtn = document.createElement("button");
    listItem.classList.add("card");
    rmv.setAttribute("data-user-id", `${item.id}`);

    title.textContent = `${item.title}`;
    author.textContent = `Author: ${item.author}`;
    pages.textContent = `Pages: ${item.pages}`;
    read.textContent = `Read: ${item.read}`;
    id.textContent = `Id: ${item.id}`;
    rmv.textContent = `Remove`;
    readBtn.textContent = "Toggle read status";

    container.appendChild(listItem);
    listItem.appendChild(title);
    listItem.appendChild(author);
    listItem.appendChild(pages);
    listItem.appendChild(read);
    listItem.appendChild(id);
    listItem.appendChild(rmv);
    listItem.appendChild(readBtn);

    rmv.addEventListener("click", (event) => {
      const targetId = event.target.dataset.userId;
      console.log(event.target.dataset.userId);
      let myArray = arr.filter((item) => item.id !== targetId);
      myLibrary = myArray;

      loopAndDisplay(myArray);
    });

    readBtn.addEventListener("click", (event) => {
      item.toggleRead();
      loopAndDisplay(myLibrary);
    });
  });
}
Book.prototype.toggleRead = function () {
  return this.read === "yes" ? (this.read = "no") : (this.read = "yes");
};

openBtn.addEventListener("click", () => {
  form.reset();
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

saveBtn.addEventListener("click", () => {
  addBookToLibrary(
    `${inputTitle.value}`,
    `${inputAuthor.value}`,
    `${inputPages.value}`,
    `${inputRead.value}`,
  );
  loopAndDisplay(myLibrary);

  form.reset();
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
