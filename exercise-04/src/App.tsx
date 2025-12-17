// src/App.tsx
import UserProfile from './UserProfile';
import './App.css';

function App() {
  const user1 = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatarUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  const user2 = {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    avatarUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  return (
    <div className="app">
      <h1>Exercise 04: User Profile with Props</h1>
      <div className="user-profiles">
        <UserProfile userData={user1} />
        <UserProfile userData={user2} />
      </div>
    </div>
  );
}

export default App;
