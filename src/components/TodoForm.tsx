import { useState } from 'react'; // Perchè usiamo una funzione di react

interface TodoFormProps { // Definisce le proprietà del form
  onAddTodo: (text: string) => void; // Funzione per aggiungere un nuovo todo
}


function TodoForm({ onAddTodo }: TodoFormProps) {
  const [text, setText] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => { // Gestisce l'invio del form al genitore
    e.preventDefault(); // Previene il refresh della pagina
    if (text.trim()) {  
      onAddTodo(text);
      setText('');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}> 
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nuovo todo..."
      />
      <button type="submit">Aggiungi</button>
    </form>
  );
}

export default TodoForm;