import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [name, setName] = useState('');
  const [user_id, setUser] = useState('');
  const [category_id, setCategory] = useState('');
  const [tag_id, setTag] = useState('');
  const history = useNavigate();

  const handleCreatePost = () => {
    axios.post('http://localhost:8080/api/posts', { name, user_id, category_id, tag_id})
      .then(response => history('/'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Create Post</h1>
      <input
        placeholder="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <textarea
        placeholder="User"
        value={user_id}
        onChange={e => setUser(e.target.value)}
      />
       <input
        placeholder="Category"
        value={category_id}
        onChange={e => setCategory(e.target.value)}
      />
      <textarea
        placeholder="Tag"
        value={tag_id}
        onChange={e => setTag(e.target.value)}
      />
      <button onClick={handleCreatePost}>Create</button>
    </div>
  );
};

export default CreatePost;
