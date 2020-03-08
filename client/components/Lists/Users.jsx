import React from 'react';
import UsersEntry from './UsersEntry.jsx';


const Users = ({ users, ...otherProps }) => (
  <div>
    {users.map(user =>
      <UsersEntry key={user} user={user} {...otherProps} />
    )}
  </div>
);


export default Users;
