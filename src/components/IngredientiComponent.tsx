import React, { useState } from 'react';

// Tipo ingrediente
interface Ingrediente {
  nome: string;
  quantita: number;
  unita: string;
}

// Lista originale (costante)
const originalIngredients: Ingrediente[] = [
  { nome: 'Olio', quantita: 50, unita: 'ml' },
  { nome: 'Pane', quantita: 200, unita: 'g' },
  { nome: 'Origano', quantita: 3, unita: 'g' },
  { nome: 'Sale', quantita: 1, unita: 'pizzico' },
  { nome: 'Pomodori', quantita: 7, unita: 'pz' },
];

// Sezione: filtra solo quando si preme il pulsante
function ButtonFilterSection() {
  const [filter, setFilter] = useState('');
  const [visible, setVisible] = useState<Ingrediente[]>(originalIngredients);

  const handleFiltra = () => {
    const term = filter.trim().toLowerCase();
    setVisible(
      term === ''
        ? originalIngredients
        : originalIngredients.filter((i) => i.nome.toLowerCase().includes(term)),
    );
  };

  return (
    <section style={{ marginBottom: 24 }}>
      <h3>Filtra solo al click del pulsante</h3>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <input
          type="text"
          placeholder="Digita qui e poi premi 'Filtra'"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ flex: 1, padding: '6px 8px' }}
        />
        <button type="button" onClick={handleFiltra}>
          Filtra
        </button>
      </div>

      <ul style={{ paddingLeft: 12, listStylePosition: 'inside' }}>
        {visible.length === 0 ? (
          <li>Nessun ingrediente trovato</li>
        ) : (
          visible.map((ing, idx) => (
            <li key={ing.nome + idx}>
              <strong>{ing.nome}</strong> — {ing.quantita} {ing.unita}
            </li>
          ))
        )}
      </ul>
    </section>
  );
}

// Sezione: filtra live mentre si digita (senza bottone)
function LiveFilterSection() {
  const [filter, setFilter] = useState('');
  const visible =
    filter.trim() === ''
      ? originalIngredients
      : originalIngredients.filter((i) => i.nome.toLowerCase().includes(filter.trim().toLowerCase()));

  return (
    <section>
      <h3>Filtra live senza cliccare il bottone</h3>
      <div style={{ marginBottom: 12 }}>
        <input
          type="text"
          placeholder="Digita e vedi i risultati mentre scrivi"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ width: '100%', padding: '6px 8px' }}
        />
      </div>

      <ul style={{ paddingLeft: 12, listStylePosition: 'inside' }}>
        {visible.length === 0 ? (
          <li>Nessun ingrediente trovato</li>
        ) : (
          visible.map((ing, idx) => (
            <li key={ing.nome + idx}>
              <strong>{ing.nome}</strong> — {ing.quantita} {ing.unita}
            </li>
          ))
        )}
      </ul>
    </section>
  );
}

export default function IngredientiComponent(): React.ReactElement {
  return (
    <div style={{ maxWidth: 640, margin: '0 auto' }}>
      <h2>Lista Ingredienti</h2>
      <ButtonFilterSection />
      <LiveFilterSection />
    </div>
  );
}