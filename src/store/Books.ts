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
  books: IBook[] = [];

  // constructor() {
  //   this.getBooksFromLocalStorage("tasks");

  //   observe(this.books, change => {
  //     console.log(change);
  //   });
  // }

  getBooksFromLocalStorage(books: string) {
    this.books = window.localStorage.getItem(books)
      ? JSON.parse(window.localStorage.getItem(books) || "")
      : [];
  }

  addNewBook(newBook: IBook) {
    console.log("neeeew", newBook);

    this.books = [...this.books, newBook];
    window.localStorage.setItem("tasks", JSON.stringify(this.books));
  }

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
  getBooksFromLocalStorage: action.bound,
  addNewBook: action.bound
  //removeBook: action.bound
  // decVal: action.bound,
  // SumCount: computed,
});

export default new BooksStore();
