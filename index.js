
import Book from './modules/book.js';
import BookStore from './modules/BookStore.js';
import UserInterface from './modules/UserInterface.js';
import { DateTime } from './modules/luxon.js';

UserInterface.displayBooks();

const displayDate = () => {
    const now = DateTime.now();
    const dateNow = document.getElementById('date');
    dateNow.innerHTML = `${now.day}-${now.month}-${now.year}, ${now.hour}:${now.minute}:${now.second}`;
};

displayDate();

// Add New Book Starts Here
const title = document.getElementById('title');
const author = document.getElementById('author');
const addNewBook = document.querySelector('.submit');

addNewBook.addEventListener('click', (e) => {
  const book = new Book(title.value, author.value, 1);
  e.preventDefault();
  BookStore.addBook(book);
  title.value = '';
  author.value = '';
  UserInterface.displayBooks();
});
// Add New Book Ends Here

// navigation interaction
const booklist = document.getElementById('bookshelf');
const list = document.getElementById('list');
const addNew = document.getElementById('addNew');
const contact = document.getElementById('contact');
const form = document.getElementById('form');
const contactSection = document.getElementById('contact-section');
list.addEventListener('click', () => {
  booklist.style.display = '';
  form.style.display = 'none';
  contactSection.style.display = 'none';
});
addNew.addEventListener('click', () => {
  booklist.style.display = 'none';
  form.style.display = '';
  contactSection.style.display = 'none';
});
contact.addEventListener('click', () => {
  booklist.style.display = 'none';
  form.style.display = 'none';
  contactSection.style.display = '';
});

list.click();