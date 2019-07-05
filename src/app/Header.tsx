import * as React from "react";
import { connect } from "react-redux";
import { getUsers } from "../store/users/action";

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
}

const Header: React.FC<iHeaderProps> = (props: iHeaderProps) => {
  return (
    <div className="header">
      <h2>{props.nameTest}</h2>
      <button onClick={props.getUsers}>click me</button>
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
    getUsers: () => dispatch(getUsers())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
