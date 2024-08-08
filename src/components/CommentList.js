import React from 'react';

const CommentList = ({ comments }) => {
    return (
        <div>
            {comments.map(comment => (
                <div key={comment.id}>
                    <p>{comment.content}</p>
                    <p>By: {comment.user.id} on {new Date(comment.created_at).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    );
};

export default CommentList;

