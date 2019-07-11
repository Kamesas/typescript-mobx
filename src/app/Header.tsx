import * as React from "react";
import { connect } from "react-redux";
import { fetchFunction, deleteUser, addUser } from "../store/users/action";
import { saveToLocalStorage } from "../store/todos/action";
import { IState, IStateUser } from "../store/users/types";
import { iTodo } from "../store/todos/types";

interface mapFirebaseDate {
  [key: string]: any;
}

export interface iHeaderProps {
  users: IStateUser[];
  fetchFunction(): any;
  deleteUser(id: string | number): any;
  addUser(): any;
  saveToLocalStorage(newTodo: iTodo): any;
}

const Header: React.FC<iHeaderProps> = (props: iHeaderProps) => {
  const [todo, setTodo] = React.useState("");

  const usersParse: mapFirebaseDate[] =
    props.users && Object.keys(props.users).length
      ? Object.keys(props.users).map((user: any) => {
          const userData = props.users[user];
          return (
            <li id={user} key={user}>
              {userData.name} {userData.work}
            </li>
          );
        })
      : [];

  const addTodo = () => {
    const newTodo: iTodo = {
      id: new Date().getTime(),
      title: todo,
      completed: false
    };

    todo !== "" && props.saveToLocalStorage(newTodo);

    setTodo("");
  };

  return (
    <div className="header">
      <button onClick={props.fetchFunction}>fetch</button>
      <button onClick={() => props.deleteUser(12)}>delete</button>
      <button onClick={props.addUser}>addUser</button>
      <ul>{usersParse.length ? usersParse : "loading"}</ul>

      <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />

      <button onClick={addTodo}>add todo to LocalStorage</button>
    </div>
  );
};

function mapStateToProps(state: IState) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchFunction: () => dispatch(fetchFunction()),
    deleteUser: (id: string | number) => dispatch(deleteUser(id)),
    addUser: () => dispatch(addUser()),
    saveToLocalStorage: (todo: iTodo) => dispatch(saveToLocalStorage(todo))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
