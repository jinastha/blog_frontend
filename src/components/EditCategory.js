import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditCategory = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [user_id, setUser] = useState('');
  const history = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/categories/${id}`)
      .then(response => {
        setTitle(response.data.title);
        setContent(response.data.content);
        setUser(response.data.user_id);
      })
      .catch(error => console.error(error));
  }, [id]);

  const handleEditCategory = () => {
    axios.put(`http://localhost:8080/api/categories/${id}`, { title, content, user_id })
      .then(response => history('/'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Edit Category</h1>
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
      <textarea
        placeholder="User"
        value={user_id}
        onChange={e => setUser(e.target.value)}
      />
      <button onClick={handleEditCategory}>Save</button>
    </div>
  );
};

export default EditCategory;
