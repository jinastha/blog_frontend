import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [user_id, setUser] = useState('');
  const [category_id, setCategory] = useState('');
  const [tag_id, setTag] = useState('');
  const history = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/posts/${id}`)
      .then(response => {
        setName(response.data.name);
        setUser(response.data.user_id);
        setCategory(response.data.category_id);
        setTag(response.data.tag_id);
      })
      .catch(error => console.error(error));
  }, [id]);

  const handleEditPost = () => {
    axios.put(`http://localhost:8080/api/posts/${id}`, { name, user_id, category_id, tag_id })
      .then(response => history('/'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <textarea
        placeholder="User"
        value={user_id}
        onChange={e => setUser(e.target.value)}
      />
      <textarea
        placeholder="Category"
        value={category_id}
        onChange={e => setCategory(e.target.value)}
      />
       <textarea
        placeholder="Tag"
        value={tag_id}
        onChange={e => setTag(e.target.value)}
      />
      <button onClick={handleEditPost}>Save</button>
    </div>
  );
};

export default EditPost;
