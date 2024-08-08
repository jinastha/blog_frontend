import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateCategory = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [user_id, setUser] = useState('');
  const history = useNavigate();

  const handleCreateCategory = () => {
    axios.post('http://localhost:8080/api/categories', { title, content, user_id })
      .then(response => history('/'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Create Category</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <input
        placeholder="User"
        value={user_id}
        onChange={e => setUser(e.target.value)}
      />
      <button onClick={handleCreateCategory}>Create</button>
    </div>
  );
};

export default CreateCategory;
