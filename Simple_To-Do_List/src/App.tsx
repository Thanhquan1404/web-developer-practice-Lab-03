// src/App.tsx
import { useState } from 'react';
import TodoApp from './components/ToDoApp';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import Login from './components/Login';
import Card from './components/Card';
import './styles/todo.css';

type TabType = 'todo' | 'userProfile' | 'counter' | 'login' | 'card';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('todo');

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

  const renderContent = () => {
    switch (activeTab) {
      case 'todo':
        return <TodoApp />;
      case 'userProfile':
        return (
          <div className="exercise-content">
            <Card title="User Profile Exercise">
              <div className="user-profiles">
                <UserProfile userData={user1} />
                <UserProfile userData={user2} />
              </div>
            </Card>
          </div>
        );
      case 'counter':
        return (
          <div className="exercise-content">
            <Card title="Counter Exercise">
              <Counter />
            </Card>
          </div>
        );
      case 'login':
        return (
          <div className="exercise-content">
            <Card title="Login Exercise">
              <Login />
            </Card>
          </div>
        );
      case 'card':
        return (
          <div className="exercise-content">
            <Card title="Card Component Demo">
              <p>This is a reusable Card component that can wrap any content.</p>
              <Card title="Nested Card">
                <p>You can even nest cards inside cards!</p>
              </Card>
            </Card>
          </div>
        );
      default:
        return <TodoApp />;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Exercises Showcase</h1>
        <nav className="tab-navigation">
          <button
            className={`tab-button ${activeTab === 'todo' ? 'active' : ''}`}
            onClick={() => setActiveTab('todo')}
          >
            To-Do List
          </button>
          <button
            className={`tab-button ${activeTab === 'userProfile' ? 'active' : ''}`}
            onClick={() => setActiveTab('userProfile')}
          >
            User Profile
          </button>
          <button
            className={`tab-button ${activeTab === 'counter' ? 'active' : ''}`}
            onClick={() => setActiveTab('counter')}
          >
            Counter
          </button>
          <button
            className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login Form
          </button>
          <button
            className={`tab-button ${activeTab === 'card' ? 'active' : ''}`}
            onClick={() => setActiveTab('card')}
          >
            Card Component
          </button>
        </nav>
      </header>
      <main className="app-main">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
