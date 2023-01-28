const addNewBookBtn = document.querySelector('.newbook__btn')
const addBookBtn = document.querySelector('.addbook__btn')
const modal = document.querySelector('.maincont__modal')
const bookName = document.querySelector('#book-name')
const authorName = document.querySelector('#author-name')
const pageCount = document.querySelector('#page-count')
const readStatus = document.querySelector('#read-status')
const cardsContainer = document.querySelector('.cards-container')

addNewBookBtn.addEventListener('click', showModal)
addBookBtn.addEventListener('click', addBooktoArray)

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

function addBooktoArray(e) {
  e.preventDefault()
  if (formValidation()) {
    addBookToLibrary(bookName.value, authorName.value, pageCount.value, readStatus.checked)
    resetForm()
  }
}

function formValidation() {
  if (bookName.reportValidity() && authorName.reportValidity() && pageCount.reportValidity()) {
    return true
  }
  return false
}

function resetForm() {
  modal.style.display = 'none'
  addNewBookBtn.style.display = 'block'
  bookName.value = ''
  authorName.value = ''
  pageCount.value = ''
  readStatus.checked = false
}

function showModal() {
  modal.style.display = 'block'
  addNewBookBtn.style.display = 'none'
}

function createBookCard(bookName, authorName, pageCount, readStatus) {
  let card = document.createElement('div')
  card.classList.add('card')
}
