
import React from 'react';

interface User {
  name: string;
  email: string;
}

interface UserProfileProps {
  userData: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ userData }) => {
  const { name, email } = userData;

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
