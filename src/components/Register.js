import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleRegister = () => {
    axios.post('http://localhost:8080/api/user/account/v1/users', {name, email, username, password })
      .then(response => history('/login'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Name"
        value={email}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="username"
        placeholder="Username"
        value={email}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
