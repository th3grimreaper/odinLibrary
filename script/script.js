let myLibrary = []

function Book(bookName, author, pages, readStatus) {
  this.bookName = bookName
  this.author = author
  this.pages = pages
  this.readStatus = readStatus
}

function addBookToLibrary(name, author, pages, read) {
  let newBook = new Book(name, author, pages, read)
  myLibrary.push(newBook)
}

function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1)
}

myLibrary.forEach((value) => {
  console.log(value)
})

addBookToLibrary('The Stranger', 'Albert Camus', 200, false)
addBookToLibrary('Mahabharat', 'Kisari Mohan Ganguly', 5000, true)

console.log(myLibrary)
removeBookFromLibrary(1)
console.log(myLibrary)
