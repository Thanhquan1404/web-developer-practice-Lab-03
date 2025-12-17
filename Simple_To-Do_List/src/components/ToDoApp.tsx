import { useState } from 'react';
import TodoForm from './ToDoForm';
import TodoList from './ToDoList';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(text: string) {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);
  }

  function toggleTodo(id: number) {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="todo-container">
      <h2 className="todo-title">My To-Do List</h2>

      <TodoForm addTodo={addTodo} />

      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default TodoApp;
