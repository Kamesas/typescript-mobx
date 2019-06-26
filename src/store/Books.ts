import {
  observable,
  action,
  decorate,
  computed,
  observe,
  runInAction
} from "mobx";
import IBook from "../interfaces/iBooks";
import iBook from "../interfaces/iBooks";

export class BooksStore {
  books: IBook[] = window.localStorage.getItem("books")
    ? JSON.parse(window.localStorage.getItem("books") || "")
    : [];

  addNewBook(newBook: IBook) {
    this.books = [newBook, ...this.books];
    window.localStorage.setItem("books", JSON.stringify(this.books));
  }

  removeBook(idBook: string | number) {
    this.books = this.books.filter((book: IBook) => book.id !== idBook);
    window.localStorage.setItem("books", JSON.stringify(this.books));
  }

  updateBook(updatedBook: iBook) {
    this.books = this.books.map(book => {
      if (book.id === updatedBook.id) {
        book = updatedBook;
      }
      return book;
    });
  }

  // get SumCount() {
  //   return this.value + this.value2;
  // }
}

decorate(BooksStore, {
  books: observable,
  addNewBook: action.bound,
  removeBook: action.bound,
  updateBook: action.bound
  // decVal: action.bound,
  // SumCount: computed,
});

export default new BooksStore();
