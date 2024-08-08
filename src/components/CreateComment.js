import React, { useState } from 'react';
import axios from 'axios';

const CreateComment = ({ postId }) => {
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/comments', {
                content,
                post_id: postId,
            });
            setContent('');
            // Optionally, you can update the comment list here or trigger a re-fetch of the post
        } catch (error) {
            console.error('Error creating comment:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Add a Comment</h4>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <button type="submit">Submit Comment</button>
        </form>
    );
};

export default CreateComment;