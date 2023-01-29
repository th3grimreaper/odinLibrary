const addNewBookBtn = document.querySelector('.newbook__btn')
const addBookBtn = document.querySelector('.addbook__btn')
const modal = document.querySelector('.maincont__modal')
// book contents
const bookName = document.querySelector('#book-name')
const authorName = document.querySelector('#author-name')
const pageCount = document.querySelector('#page-count')
const readStatus = document.querySelector('#read-status')
// book cards
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
    createBookCard(bookName.value, authorName.value, pageCount.value, readStatus.checked)
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
  cardsContainer.style.display = 'grid'
}

function showModal() {
  modal.style.display = 'block'
  addNewBookBtn.style.display = 'none'
  cardsContainer.style.display = 'none'
}

function createBookCard(bookName, authorName, pageCount, readStatus) {
  let fragment = document.createDocumentFragment()
  let card = document.createElement('div')
  card.classList.add('card')
  let firstDiv = document.createElement('div')
  let secondDiv = document.createElement('div')
  let thirdDiv = document.createElement('div')
  let fourthDiv = document.createElement('div')
  let fifthDiv = document.createElement('div')
  let markReadBtn = document.createElement('button')
  let removeBookBtn = document.createElement('button')
  firstDiv.textContent = bookName
  secondDiv.textContent = `By ${authorName}`
  thirdDiv.textContent = pageCount
  fourthDiv.textContent = readStatus ? 'Read' : 'Not Read'
  markReadBtn.textContent = !readStatus ? 'Mark Read' : 'Mark Unread'
  removeBookBtn.textContent = 'Remove Book'
  fifthDiv.classList.add('btn')
  markReadBtn.classList.add('markRead__btn')
  removeBookBtn.classList.add('removeBook__btn')
  fifthDiv.appendChild(markReadBtn)
  fifthDiv.appendChild(removeBookBtn)
  card.appendChild(firstDiv)
  card.appendChild(secondDiv)
  card.appendChild(thirdDiv)
  card.appendChild(fourthDiv)
  card.appendChild(fifthDiv)
  // attach card to fragment
  fragment.appendChild(card)
  cardsContainer.appendChild(fragment)
}
