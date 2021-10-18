import './App.css';
import React, { useState } from "react";


function App() {
  const [Contador, setContador] = useState(0);

  return (
    <div className="App">
        <h1>Contador</h1>
        <h2>Você clicou {Contador} vezes!</h2>
        <button onClick={() => setContador(Contador - 1)}>Decremento</button>
        <button onClick={() => setContador(Contador + 1)}>Incremento</button>
    </div>
  );
}

export default App;