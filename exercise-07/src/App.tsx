// src/App.tsx
import UserProfile from './UserProfile';
import Card from './Card';
import './App.css';

function App() {
  const user1 = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  const user2 = {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
  };

  return (
    <div className="app">
      <h1>Exercise 07: Card Component</h1>
      <div className="cards-container">
        <Card title="User 1 Profile">
          <UserProfile userData={user1} />
        </Card>

        <Card title="User 2 Profile">
          <UserProfile userData={user2} />
        </Card>

        <Card title="Sample Card">
          <p>This is a reusable Card component that can wrap any content.</p>
          <Card title="Nested Card">
            <p>You can even nest cards inside cards!</p>
          </Card>
        </Card>
      </div>
    </div>
  );
}

export default App;
