import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditTag = () => {
  const { id } = useParams();
  const [key, setKey] = useState('');
 
  const history = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/tags/${id}`)
      .then(response => {
        setKey(response.data.key);
      })
      .catch(error => console.error(error));
  }, [id]);

  const handleEditTag = () => {
    axios.put(`http://localhost:8080/api/tags/${id}`, { key })
      .then(response => history('/'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Edit Tag</h1>
      <input
        type="text"
        placeholder="Key"
        value={key}
        onChange={e => setKey(e.target.value)}
      />
      <button onClick={handleEditTag}>Save</button>
    </div>
  );
};

export default EditTag;
