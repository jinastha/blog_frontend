import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import PostDetail from '../components/PostDetail';
import Login from '../components/Login';
import Register from '../components/Register';
import UserProfile from '../components/UserProfile';
import CreatePost from '../components/CreatePost';
import EditPost from '../components/EditPost';
import Navigation from '../components/Navigation';
import CreateCategory from '../components/CreateCategory';
import CreateTag from '../components/CreateTag';
import EditCategory from '../components/EditCategory';
import EditTag from '../components/EditTag';
import CreateComment from '../components/CreateComment';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/navigation" element={<Navigation />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/post/:id" element={<PostDetail />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="/edit-post/:id" element={<EditPost />} />
      <Route path="/create-categories" element={<CreateCategory />} />
      <Route path="/create-tags" element={<CreateTag />} />
      <Route path="/create-comments" element={<CreateComment />} />
      <Route path="/edit-categories/:id" element={<EditCategory />} />
      <Route path="/edit-tags/:id" element={<EditTag />} />
    </Routes>
  </Router>
);

export default AppRouter;
