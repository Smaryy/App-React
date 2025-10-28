import TodoItem from './TodoItem';
interface TodoListProps {
  todos: {
    id: number;
    text: string;
    completed: boolean;
  }[];
  onToggleTodo: (id: number) => void;
}

function TodoList({ todos, onToggleTodo }: TodoListProps) {
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