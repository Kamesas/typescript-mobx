import {
  observable,
  action,
  decorate,
  computed,
  observe,
  runInAction
} from "mobx";
import IBook from "../interfaces/iBooks";

export class BooksStore {
  books: IBook[] = window.localStorage.getItem("books")
    ? JSON.parse(window.localStorage.getItem("books") || "")
    : [];

  // getBooksFromLocalStorage() {
  //   this.books = window.localStorage.getItem("books")
  //     ? JSON.parse(window.localStorage.getItem("books") || "")
  //     : [];
  // }

  addNewBook(newBook: IBook) {
    console.log("neeeew", newBook);

    this.books = [newBook, ...this.books];
    //this.books.push(newBook);
    window.localStorage.setItem("books", JSON.stringify(this.books));
  }

  removeBook(idBook: string | number) {
    this.books = this.books.filter((book: IBook) => book.id !== idBook);
    window.localStorage.setItem("books", JSON.stringify(this.books));
  }

  // get SumCount() {
  //   return this.value + this.value2;
  // }
}

decorate(BooksStore, {
  books: observable,
  //getBooksFromLocalStorage: action.bound,
  addNewBook: action.bound,
  removeBook: action.bound
  // decVal: action.bound,
  // SumCount: computed,
});

export default new BooksStore();
