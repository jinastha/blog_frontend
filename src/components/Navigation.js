import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Navigation = () => {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("accessToken");
  // console.log(token);

  useEffect(() => {
    axios.get('http://localhost:8080/api/posts', {
      headers: {
          'Authorization': 'Bearer '.concat(token)
      }
  })
      .then(response => setPosts(response.data.data))
      .catch(error => console.error(error));
  }, []);


    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/register">User Register</Link></li>
                <li><Link to="/categories">Category</Link></li>
                <li><Link to="/tags">Tag</Link></li>
                <li><Link to="/posts">Posts</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;