import { useState } from 'react'; // Di base per farlo funzionare con React
import TodoFilter from './TodoFilter';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import TodoList from './TodoList';

interface Todo { // Definisce la struttura di un Todo
  id: number;
  text: string;
  completed: boolean;
}
function TodoApp() { // Componente principale dell'app Todo
  const [todos, setTodos] = useState<Todo[]>([]); //useState per gestire lo stato dei todo
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all'); // Stato per il filtro dei todo

  const addTodo = (text: string) => {
    setTodos(prev => [...prev, { // setTodos aggiunge un nuovo todo all'array
      id: Date.now(),
      text,
      completed: false
    }]);
  };

  const toggleTodo = (id: number) => {  // Marca un todo come completato o non completato
    setTodos(prev => prev.map(todo => //prev.map cicla tutti i todo
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed; // Active mostra solo i todo non completati
    if (filter === 'completed') return todo.completed; 
    return true;
  });
  
  return (
    <div>
      <TodoForm onAddTodo={addTodo} /> 
      <TodoFilter filter={filter} onFilterChange={setFilter} />
      <TodoList todos={filteredTodos} onToggleTodo={toggleTodo} />
    </div>
  );
}
export default TodoApp;
