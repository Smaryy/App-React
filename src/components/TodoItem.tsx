interface TodoItemProps { // Definisce le proprietà di un singolo Todo
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  onToggle: (id: number) => void; // Funzione per cambiare lo stato di completamento del todo
}

function TodoItem({ todo, onToggle }: TodoItemProps) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span style={{
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}>
        {todo.text}
      </span>
    </li>
  );
}

export default TodoItem;