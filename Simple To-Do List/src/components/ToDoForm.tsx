import { useState } from 'react';

interface TodoFormProps {
  addTodo: (text: string) => void;
}

function TodoForm({ addTodo }: TodoFormProps) {
  const [text, setText] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (text.trim() === '') return;
    addTodo(text);
    setText('');
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
