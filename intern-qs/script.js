const bookListElement = document.getElementById("book-list");

const books = [
  { title: "Book 1", author: "Author 1" },
  { title: "Book 2", author: "Author 2" },
  { title: "Book 3", author: "Author 3" },
];

for (let i = 0; i < books.length; i++) {
  const bookListItem = document.createElement("li");
  bookListItem.textContent = books[i].title + " by " + books[i].author;
  bookListElement.appendChild(bookListItem);
}

const button = document.getElementById("add-book-button");
button.addEventListener("click", addBook);

function addBook() {
  const newBookTitle = document.getElementById("new-book-title").value;
  const newBookAuthor = document.getElementById("new-book-author").value;
  if (!newBookTitle || !newBookAuthor) {
    console.error("type valid input");
    return;
  }
  const newBook = { title: newBookTitle, author: newBookAuthor };
  books.push(newBook);

  const newBookListItem = document.createElement("li");
  newBookListItem.textContent =
    books[books.length - 1].title + " by " + books[books.length - 1].author;
  bookListElement.appendChild(newBookListItem);

  console.log("Book added!");
  newBookTitle.innerHTML = ''
  newBookAuthor.innerHTML = ''
}
