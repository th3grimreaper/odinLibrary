let addBtn = document.querySelector('.btn')

let myLibrary = []

function Book(bookName, author, pages, readStatus) {
  this.bookName = bookName
  this.author = author
  this.pages = pages
  this.readStatus = readStatus
}

function addBookToLibrary(name, author, pages, read) {
  myLibrary.push(new Book(name, author, pages, read))
}

function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1)
}

myLibrary.forEach((value) => {
  console.log(value)
})
