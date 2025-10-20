import React from 'react';
import './App.css';
import IngredientiComponent from './components/IngredientiComponent';

function App(): React.ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista Ingredienti</h1>
      </header>
      <main style={{ padding: 16 }}>
        <IngredientiComponent />
      </main>
    </div>
  );
}

export default App;