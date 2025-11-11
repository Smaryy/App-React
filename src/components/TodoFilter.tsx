interface TodoFilterProps { // Definisce le proprietà del filtro
  filter: 'all' | 'active' | 'completed';
  onFilterChange: (filter: 'all' | 'active' | 'completed') => void; // Funzione per cambiare il filtro
}
function TodoFilter({ filter, onFilterChange }: TodoFilterProps) { // Componente per filtrare i todo
  return (
    <div>
      <button 
        onClick={() => onFilterChange('all')} 
        className={filter === 'all' ? 'active' : ''}
      >
        Tutti
      </button>
      <button 
        onClick={() => onFilterChange('active')}
        className={filter === 'active' ? 'active' : ''}
      >
        Attivi
      </button>
      <button 
        onClick={() => onFilterChange('completed')}
        className={filter === 'completed' ? 'active' : ''}
      >
        Completati
      </button>
    </div>
  );
}

export default TodoFilter;
