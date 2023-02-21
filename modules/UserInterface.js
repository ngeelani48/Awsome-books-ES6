import BookStore from './booklibrary.js';

class UserInterface {
  static displayBooks() {
    const books = BookStore.getBooks();
    const booksContainer = document.querySelector('.bookshelf');
    booksContainer.innerHTML = '';
    books.forEach((book, index) => {
      const bookItem = document.createElement('div');
      bookItem.classList.add('collection');
      bookItem.innerHTML = `<p class="title">"${book.title}" by ${book.author}</p>
      <button>Remove</button>`;
      booksContainer.appendChild(bookItem);
      booksContainer.childNodes[index].childNodes[2].onclick = () => {
        BookStore.removeBook(index);
        this.displayBooks();
      };
    });
  }
}

export default UserInterface;