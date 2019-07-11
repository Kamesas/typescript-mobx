import * as React from "react";
import { connect } from "react-redux";
import { fetchFunction, deleteUser, addUser } from "../store/users/action";

export interface UserInterface {
  name: string;
  work: string;
}

export interface UserViewInterface extends UserInterface {
  id: string;
}

export interface UserObjectInterface {
  [key: string]: UserInterface;
}

export interface iHeaderProps {
  users?: UserObjectInterface;
  fetchFunction(): any;
  deleteUser(id: string | number): any;
  addUser(): any;
}

const Header: React.FC<iHeaderProps> = (props: iHeaderProps) => {
  console.log(props.users);

  const users: any[] =
    props.users && Object.keys(props.users).length
      ? Object.keys(props.users).map(entity => {
          console.log(entity);
          console.log(props.users && props.users[entity]);
          return props.users && { ...props.users[entity], id: entity };
        })
      : [];

  return (
    <div className="header">
      <button onClick={props.fetchFunction}>fetch</button>
      <button onClick={() => props.deleteUser(12)}>delete</button>
      <button onClick={props.addUser}>addUser</button>
      <ul>
        {users.map((entity, i) => {
          return <li key={entity.id}>{`${entity.name}, ${entity.work}`}</li>;
        })}
      </ul>
    </div>
  );
};

function mapStateToProps(state: { users: UserObjectInterface }) {
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
