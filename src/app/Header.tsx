import * as React from "react";
import { connect } from "react-redux";
import { getUsers, consoleLog, fetchFunction } from "../store/users/action";

interface iUsers {
  id: number | string;
  name: string;
  username?: string;
  email?: string;
  [key: string]: any;
}

interface iUsersAction {
  type: string;
  payload: iUsers;
}

export interface iHeaderProps {
  nameTest?: string;
  users?: iUsers;
  getUsers(): iUsersAction;
  consoleLog(): any;
  fetchFunction(): any;
}

const Header: React.FC<iHeaderProps> = (props: iHeaderProps) => {
  return (
    <div className="header">
      <h2>{props.nameTest}</h2>
      <button onClick={props.fetchFunction}>click me</button>
      <button onClick={props.consoleLog}>console</button>
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
    getUsers: () => dispatch(getUsers()),
    consoleLog: () => dispatch(consoleLog()),
    fetchFunction: () => dispatch(fetchFunction())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
