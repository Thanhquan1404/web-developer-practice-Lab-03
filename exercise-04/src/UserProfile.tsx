import React from 'react';

interface User {
  name: string;
  email: string;
  avatarUrl: string;
  imageSize: number;
}

interface UserProfileProps {
  userData: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ userData }) => {
  const { name, email, avatarUrl, imageSize } = userData;

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
      <img
        src={avatarUrl}
        alt={`${name}'s avatar`}
        width={imageSize}
        height={imageSize}
        className="profile-avatar"
      />
    </div>
  );
};

export default UserProfile;
