// src/components/Post/index.js
import React from 'react';
import './Post.css';
import UserProfile from '../UserProfile';

function Post({ username, description, imageUrl, userProfileImageUrl }) {
    return (
        <div className="post">
            <div className="post-header">
                <button className="user-profile-button">
                    <UserProfile imageUrl={userProfileImageUrl} />
                </button>
                <span className="username">{username}</span>
            </div>
            <div className="post-description">
                {description}
            </div>
            <img src={imageUrl} alt="Post content" className="post-image" />
            <div className="post-actions">
                <button className="like-button">👍</button>
                <button className="comment-button">💬</button>
                <button className="tag-button">@</button>
                <button className="share-button">🔗</button>
            </div>
        </div>
    );
}

export default Post;

