import React, { useState } from 'react';

const UserList = ({ users, onDelete }) => {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          {user.username}{' '}
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const Authentification = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform authentication logic with the username and password
    const newUser = { username, password };

    // Add the new user to the list
    setUsers([...users, newUser]);

    // Reset the form fields
    setUsername('');
    setPassword('');
  };

  const handleDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <h2>User List</h2>
      {users.length > 0 ? (
        <UserList users={users} onDelete={handleDelete} />
      ) : (
        <p>No users yet.</p>
      )}
    </div>
  );
};

export default Authentification;
