import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateTag = () => {
  const [key, setKey] = useState('');
  const history = useNavigate();

  const handleCreateTag = () => {
    axios.post('http://localhost:8080/api/tags', {key })
      .then(response => history('/'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Create Key</h1>
      <input
        type="text"
        placeholder="Key"
        value={key}
        onChange={e => setKey(e.target.value)}
      />
      <button onClick={handleCreateTag}>Create</button>
    </div>
  );
};

export default CreateTag;
