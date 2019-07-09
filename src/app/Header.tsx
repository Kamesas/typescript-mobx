import * as React from "react";
import { connect } from "react-redux";
import { fetchFunction, deleteUser, addUser } from "../store/users/action";

interface iUsers {
  id: number | string;
  name: string;
  username?: string;
  email?: string;
  [key: string]: any;
}

export interface iHeaderProps {
  users?: iUsers;
  fetchFunction(): any;
  deleteUser(): any;
  addUser(): any;
}

const Header: React.FC<iHeaderProps> = (props: iHeaderProps) => {
  console.log(props.users);
  return (
    <div className="header">
      <button onClick={props.fetchFunction}>fetch</button>
      <button onClick={props.deleteUser}>delete</button>
      <button onClick={props.addUser}>addUser</button>
    </div>
  );
};

function mapStateToProps(state: iUsers) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchFunction: () => dispatch(fetchFunction()),
    deleteUser: () => dispatch(deleteUser()),
    addUser: () => dispatch(addUser())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
