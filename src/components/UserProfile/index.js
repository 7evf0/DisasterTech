// src/components/UserProfile/index.js
import React from 'react';
import './UserProfile.css';

function UserProfile({ imageUrl }) {
    return (
        <img src={imageUrl} alt="User Profile" className="user-profile-image" />
    );
}

export default UserProfile;
