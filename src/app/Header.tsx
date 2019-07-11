import * as React from "react";
import { connect } from "react-redux";
import { fetchFunction, deleteUser, addUser } from "../store/users/action";
import { IStateUsers } from "../store/users/types";

export interface iHeaderProps {
  users: any;
  fetchFunction(): any;
  deleteUser(id: string | number): any;
  addUser(): any;
}

const Header: React.FC<iHeaderProps> = (props: iHeaderProps) => {
  const users: any[] =
    props.users && Object.keys(props.users).length
      ? Object.keys(props.users).map(user => {
          const userData = props.users[user];
          return (
            <li id={user} key={user}>
              {userData.name} {userData.work}
            </li>
          );
        })
      : [];

  return (
    <div className="header">
      <button onClick={props.fetchFunction}>fetch</button>
      <button onClick={() => props.deleteUser(12)}>delete</button>
      <button onClick={props.addUser}>addUser</button>
      <ul>{users}</ul>
    </div>
  );
};

function mapStateToProps(state: IStateUsers) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchFunction: () => dispatch(fetchFunction()),
    deleteUser: (id: string | number) => dispatch(deleteUser(id)),
    addUser: () => dispatch(addUser())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
