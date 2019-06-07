import React from "react";
import {inject, observer} from 'mobx-react';
import User from "../interfaces/User";
import UsersStore, {UsersStoreClass} from "../store/Users";

interface UsersProps {
  usersStore?: UsersStoreClass;
}

const Users: React.FC<UsersProps> = (props: UsersProps) =>{
    if (!props.usersStore) {
      return null;
    }

    return (
      <div className="Users">

        <button onClick={props.usersStore.getUsers}>getUsers</button>

        <div>
          {props.usersStore.usersObj ? props.usersStore.usersObj.map((user: User) => {
            return <li key={user.id}>{user.name}</li>

          }) : 'loading'}
        </div>

      </div>

    );

};

Users.defaultProps = {
  usersStore: UsersStore
};

export default inject('usersStore')(observer(Users));
