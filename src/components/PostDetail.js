import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    axios.get(`http://localhost:8080/api/posts/${id}`, {
      headers: {
          'Authorization': 'Bearer '.concat(token)
      }
  })
      .then(response => setPost(response.data.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {/* Implement comments section here */}
    </div>
  );
};

export default PostDetail;
