import TodoItem from './TodoItem'; // Importa il componente TodoItem per visualizzare ogni singolo todo
interface TodoListProps { // Definisce le proprietà della lista dei Todo
  todos: {
    id: number;
    text: string;
    completed: boolean;
  }[];
  onToggleTodo: (id: number) => void;
}

function TodoList({ todos, onToggleTodo }: TodoListProps) { // Componente per visualizzare la lista dei Todo
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggleTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;