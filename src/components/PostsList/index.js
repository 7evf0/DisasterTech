// src/components/PostsList/index.js
import React from 'react';
import Post from '../Post';
import './PostsList.css';

function PostsList({ posts }) {
    return (
        <div className="posts-list">
            {posts.map(post => (
                <Post 
                    key={post.id}
                    username={post.username} 
                    description={post.description} 
                    imageUrl={post.imageUrl} 
                    userProfileImageUrl={post.userProfileImageUrl}
                />
            ))}
        </div>
    );
}

export default PostsList;
