import { observable, action, decorate, computed } from "mobx";
import IBook from "../interfaces/iBooks";

export class BooksStore {
  books: IBook[] = [];

  getBooksFromLocalStorage(books: string) {
    this.books = JSON.parse(window.localStorage.getItem(books) || "");
  }

  // addNewBook(newBook: IBook) {
  //   console.log("neeeew", newBook);
  // }

  // removeBook(idBook: string | number) {
  //   window.localStorage.setItem(
  //     "tasks",
  //     JSON.stringify(this.books.filter((book: IBook) => book.id !== idBook))
  //   );
  // }

  // get SumCount() {
  //   return this.value + this.value2;
  // }
}

decorate(BooksStore, {
  books: observable,
  getBooksFromLocalStorage: action.bound
  //addNewBook: action.bound
  ///removeBook: action.bound
  // decVal: action.bound,
  // SumCount: computed
});

export default new BooksStore();
