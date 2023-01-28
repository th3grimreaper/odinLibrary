const addBtn = document.querySelector('.newbook__btn')
const modal = document.querySelector('.maincont__modal')

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

addBtn.addEventListener('click', showModal)

function showModal() {
  modal.style.display = 'block'
}
