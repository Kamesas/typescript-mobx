import {observable, action, decorate, runInAction} from 'mobx';

export class UsersStoreClass {
  usersObj = null;

  getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(users =>
        runInAction(() => {
          this.usersObj = users
        })
      )
  }
}

decorate(UsersStoreClass, {
  usersObj: observable,
  getUsers: action.bound,
});

export default new UsersStoreClass();
