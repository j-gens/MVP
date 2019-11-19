import React from 'react';
import UsersEntry from './UsersEntry.jsx';

const Users = (props) => (
  <div>
    {props.users.map(user =>
      <UsersEntry user={user} changeView={props.changeView} key={user} />
    )}
  </div>
)


export default Users;
