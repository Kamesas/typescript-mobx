import * as React from "react";
import { connect } from "react-redux";
import { fetchFunction, deleteUser, addUser } from "../store/users/action";

export interface iHeaderProps {
  users?: object;
  fetchFunction(): any;
  deleteUser(id: string | number): any;
  addUser(): any;
}

const Header: React.FC<iHeaderProps> = (props: iHeaderProps) => {
  console.log(props.users);
  React.useEffect(() => {
    console.log("use");
  });
  return (
    <div className="header">
      <button onClick={props.fetchFunction}>fetch</button>
      <button onClick={() => props.deleteUser(12)}>delete</button>
      <button onClick={props.addUser}>addUser</button>
    </div>
  );
};

function mapStateToProps(state: object) {
  return {
    users: state
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
