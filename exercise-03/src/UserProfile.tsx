import React from 'react';

interface User {
  name: string;
  email: string;
  avatarUrl: string;
  imageSize: number;
}

const UserProfile: React.FC = () => {
  const user: User = {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    avatarUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <img
        src={user.avatarUrl}
        alt={`${user.name}'s avatar`}
        width={user.imageSize}
        height={user.imageSize}
        className="profile-avatar"
      />
    </div>
  );
};

export default UserProfile;
